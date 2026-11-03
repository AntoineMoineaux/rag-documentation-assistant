# A document assistant that refuses to guess, and the measurements to prove it

A retrieval augmented assistant over a 61 page fleet manual, built in n8n, and
measured on a fixed protocol of 20 control questions across six runs.

**Zero fabricated answers, in every run.**

```
Right source retrieved    14/14
Wrong refusals             0/14
Fabrications               0/6     <- the one non negotiable target
```

Every number on this page can be recomputed from
[`eval/results/evaluation-log-all-runs.csv`](eval/results/), which is the raw,
unedited log of all 105 questions ever asked, including the failed runs.

---

## What this is, and what it is not

This is a **witness build**. I delivered a WhatsApp document assistant for a
former client. Client work does not get published, so rather than ask you to
take my word for it, I rebuilt a witness version on a corpus I wrote myself and
made it measurable.

**It is not:** a production system, a product, or a benchmark of RAG in general.
No client, no users, no traffic. One corpus, one language, 20 questions.

**The corpus is fictional.** HYDROCAB does not exist. Every procedure, threshold,
phone number and price in it was invented, and the PDF says so on page 2. No
employer or client data is anywhere in this repository.

---

## The result worth reading

The interesting finding is not that it works. It is **what stopped working.**

The system has two safety barriers: a similarity threshold held in code, which
blocks before the model is called, and an escalation instruction in the prompt.
I assumed the threshold was doing the work. The measurements said otherwise.

**The threshold was a coin flip.** At 0.45 it blocked four questions: two that
genuinely had no answer, and two whose answer was sitting word for word in the
retrieved passages. One good answer destroyed for every bad question stopped.

**The prompt was not.** It declined 5 unanswerable questions out of 5, every run.

So the threshold was lowered from a judge to a floor, and the decision moved to
where it demonstrably works.

### And the similarity score does not measure what it looks like it measures

Three independent demonstrations, all in the log:

**One.** On question A03, between two runs, the score went **up** from 0.494 to
0.502 while the answer's presence in the retrieved passages collapsed from 5
fragments out of 5 to 2 out of 5. Same question, same system. Higher score,
worse content.

**Two.** In the final run, the lowest scoring question of all twenty, at 0.364,
got a complete and correct answer. A question with no answer in the corpus at
all scored 0.354. **Ten thousandths apart.**

**Three.** The gap between the two score populations **narrowed** from 0.070 to
0.043 across the runs, while the system went from 3 wrong refusals to zero.
Eleven of the fourteen answerable questions score inside the range of questions
that have no answer whatsoever.

A similarity score tells you a passage is topically near the question. It does
not tell you the answer is in it. Those are different things, and the second one
is the only one that matters.

---

## How it is built

Three workflows, deliberately separate.

```
RAG 01 Indexation     PDF -> text -> cleanup -> structural chunking -> embeddings -> Supabase
RAG 02 Assistance     question -> retrieve 4 -> threshold -> answer or decline -> log
RAG 03 Evaluation     replays the 20 questions THROUGH workflow 2, scores the 3 figures
```

**Workflow 3 calls workflow 2. It does not re-implement it.** A copied chain
measures the copy and drifts away the first time a setting changes. Workflow 2
therefore has two entry points, a chat trigger and a programmatic one, which
converge on a single normalisation step. Nothing downstream of that step knows
which door the question came through. That is what makes the three figures mean
anything.

### Two things that were measured rather than assumed

**Header removal is detected, not configured.** The chunker does not hold a list
of strings to strip. It counts lines: a running header repeats on every page, a
sentence of content does not. It recovered all 10 real headers of the PDF blind,
plus 3 patterns I would not have thought to list, and it reports the grey zone
just below its threshold so a misconfiguration is visible rather than silent.

**Chunking is structural, and uses no model.** The document carries 120 numbered
section headings. A regular expression finds them. An LLM would chunk
differently on every reindex, which would make it impossible to attribute a
change in the three figures to anything but luck. The guarantee is not
granularity, it is this: **a chunk never cuts a section in half.** That single
property is what took wrong refusals from 2 to 0.

---

## Reproducing it

You need an n8n instance, a Supabase project with pgvector, an OpenAI key for
embeddings and an Anthropic key for generation. Indexing the whole corpus costs
well under one cent, so there is no reason to get it right the first time.

1. Create the table and the matching function in Supabase, 1536 dimensions.
2. Import the three workflows from [`workflows/`](workflows/). Credentials and
   private resource IDs were stripped, so the placeholders marked `A_REMPLACER`
   need filling in.
3. Put [`corpus/manuel-chauffeur-hydrocab-v4.2.pdf`](corpus/) somewhere workflow
   1 can read it.
4. Run workflow 1. Expect about 62 rows.
5. Run workflow 3.

The 20 questions, their expected content and why each of the 6 unanswerable ones
is absent from the corpus are in [`eval/questions.json`](eval/questions.json).

---

## What is in here

| | |
|---|---|
| [`workflows/`](workflows/) | the three n8n workflows, plus the two chunking scripts as standalone files |
| [`corpus/`](corpus/) | the fictional 61 page manual, as PDF and as source markdown |
| [`eval/questions.json`](eval/questions.json) | the 20 control questions and the correction key |
| [`eval/results/`](eval/results/) | the raw log of all six runs, and how to recompute the figures |
| [`tools/build_pdf.js`](tools/build_pdf.js) | regenerates the PDF from the markdown |

Every design decision in this repository was written down with the measurement
that justified it, before the next change was made. That is why the runs above
can be attributed to anything at all: one change per run, recorded, including
the one that made things worse.

---

## Honest limitations

- **"Zero fabrications" rests on only 6 unanswerable questions.** That is the
  weakest claim on this page and it should be read as such: with zero failures
  observed on 6 trials, the true fabrication rate could still be as high as 39%
  at 95% confidence. It would take 60 to bring that bound under 5%. The result
  is stable, it held across five runs and three different configurations, but
  stability is not coverage. See *What I would test next* below.
- **One corpus, one language.** Placing a threshold between two observed values
  on a sample this small is reading noise. What is demonstrated is not a value,
  it is that no value does the job the threshold was given.
- **The automatic scorer counts word stems**, so it both over and under counts.
  The 14 answers of the final run were read one by one by hand. The scorer is a
  pre-filter, not a verdict.
- **The threshold has almost no margin left.** It sits at 0.33 and the lowest
  scoring correct question is at 0.364. It destroys nothing today, but it has no
  room. Any corpus change means recalibrating it.
- **No channel.** The original ran on WhatsApp. This one uses the n8n chat,
  because the interesting part is upstream of the channel. Adding WhatsApp is
  one node, and it is not claimed here because it is not built here.

---

## What I would test next

The six unanswerable questions in the current protocol all test the same thing:
**a topic that is entirely absent from the corpus.** That is the easy case. A
competent model detects it without effort, which is exactly why the result is
0 out of 6.

Reviewing my own protocol, I can name six distinct ways this kind of system
fabricates, and I only cover the first one. Listing them here rather than
pretending the coverage is complete:

| | Failure mode | Example against this corpus | Covered |
|---|---|---|---|
| 1 | Topic entirely absent | *"does the health plan cover glasses?"* | 6 questions |
| 2 | Non existent entity inside a real category | *"is there hydrogen at the south station?"* | 1 ad hoc test |
| 3 | A number the manual never gives | *"how much does a full tank cost?"* | none |
| 4 | **A template begging to be filled** | *"what is the tank pressure on an H2-D?"* when A, B and C are all listed with theirs | none |
| 5 | **A false premise inside the question** | *"why does the leak procedure say to open the hood?"* when the manual says never to | none |
| 6 | **Two true facts combined into a false one** | *"the cold weather critical threshold is 25%, right?"* where the concept is real and the number is not | none |

Modes 4, 5 and 6 are the dangerous ones, and they are where retrieval augmented
systems actually fail in production. Mode 5 in particular is a known gap in my
prompt: it instructs the model to invent nothing, but it never instructs it to
**contradict the user**.

The work would be 9 questions per family, 54 in total, which brings the
fabrication bound under 5% and tests all six modes instead of one. I expect
modes 5 and 6 to produce failures. That is the point of running them.

I have not run this. It is scoped, not done, and it is listed here so that the
limits of what is claimed above are explicit.
