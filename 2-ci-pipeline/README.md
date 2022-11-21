# 2 - CI Pipeline

This directory contains a very basic website server run off Node, and tests against the server that are run on GitHub Actions.

The GitHub Action workflow is defined in [`.github/workflows/2-ci-pipeline.yaml`](/.github/workflows/2-ci-pipeline.yaml)

## Playwright

To run the Playwright tests:

```
cd playwright/
npx playwright test  # Run tests headless
npm playwright test --debug  # Run tests in browers with debugger
```

## Cypress

To do added
