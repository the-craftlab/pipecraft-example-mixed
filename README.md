# pipecraft-example-mixed

Mixed-promotion PipeCraft example.

- **Flow:** `develop → staging → main`
- **develop → staging:** auto-promoted (no human gate)
- **staging → main:** manual gate (PipeCraft opens a PR for human approval)
- **Strategy:** fast-forward

A `feat:` on `develop` versions, tags, and auto-cascades to `staging`, then
stops and opens a promotion PR into `main` for review.
