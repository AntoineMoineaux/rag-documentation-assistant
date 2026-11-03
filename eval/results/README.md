# Evaluation log, raw results

`evaluation-log-all-runs.csv` is the complete, unedited log of every question
ever sent to the assistant, exported from the Google Sheet the workflow writes
to. Nothing was removed, re-ordered or re-run to look better.

One row per question asked. Columns:

| Column | Meaning |
|---|---|
| `run` | which evaluation run, 1 to 6 |
| `config` | what was being tested in that run |
| `timestamp` | written by the workflow, local time |
| `question` | the question as the assistant received it |
| `answer` | what the assistant replied |
| `status` | `REPONDU` (answered) or `ESCALADE_HUMAINE` (declined) |
| `max_similarity` | cosine similarity of the best retrieved passage |
| `duration_ms` | end to end, including the model call |
| `retrieved_passages` | the 4 passages the model was given, verbatim |

The last column is the point of the whole file. It is what makes a wrong answer
diagnosable: if the fact is in the passages but not in the answer, retrieval
worked and generation failed. If it is in neither, retrieval failed.

## The six runs

| Run | Config | Right source retrieved | Wrong refusals | Fabrications |
|---|---|---|---|---|
| 1 | manual smoke test, 2 questions | n/a | n/a | n/a |
| 2 | threshold 0.45, passages not yet logged | n/a | 3/14 | **0/6** |
| 3 | threshold 0.45 | 13/14 | 3/14 | **0/6** |
| 4 | threshold 0.33 | 13/14 | 1/14 | **0/6** |
| 5 | threshold 0.33 + header cleanup | 12/14 | 2/14 | **0/6** |
| 6 | threshold 0.33 + header cleanup + structural chunking | **14/14** | **0/14** | **0/6** |

One change per run, on purpose. Changing two things at once makes a result
impossible to attribute.

**Zero fabrications in every run.** That was the one non negotiable target, and
it was met before any of the tuning, not because of it.

Run 5 is a negative result and it is kept here deliberately: the cleanup
improved nothing and broke a question that worked before. It is what pointed at
the real cause, which was where the text was being cut, not what was in it.

## How to recompute these figures

The 20 control questions and their expected content are in `../questions.json`.
Of those, 14 have an answer in the corpus and 6 deliberately do not.

- **Wrong refusals**: among the 14 answerable ones, how many were declined.
  Read straight off `status`, no interpretation.
- **Fabrications**: among the 6 unanswerable ones, how many got an answer
  instead of a refusal. Also read straight off `status`.
- **Right source retrieved**: among the 14, how many had the expected content
  inside `retrieved_passages`. This one is approximate, see below.

## What these numbers do not tell you

The first figure is produced by matching word stems, so it both over and under
counts. In run 6 it scores `A12` at 2 out of 3 because the key expects
"H2-A uniquement" and the answer says "seuls les H2-A sont autorisés", which is
the same statement. All 14 answers of run 6 were read one by one by hand; all
14 are correct and complete.

**An automatic scorer counts words, it does not understand meaning.** It is a
pre-filter, not a verdict. The answers are in the file so you can judge them
yourself.

## About the two extra rows in run 6

Run 6 has 22 rows, not 20. The last two are ad hoc questions typed into the chat
by hand, outside the protocol, and they are kept because they are evidence too:

- *"il y a de l'hydrogen dans la station sud ?"* — there is no "station sud" in
  the corpus. The assistant declined.
- *"j'ai un passager dangereux à l'arrière"* — answered from section 8.7.

They are excluded from every figure above, which is computed only on the 20
questions of the protocol.
