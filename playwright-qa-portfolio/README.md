# Playwright QA Automation Portfolio

**Author:** Fahad Mukhtar — QA Lead & Quality Engineering Consultant

This is an original, public-safe **demonstration project**. It tests a locally hosted fictional policy-quote form. It is **not** production client code and does not claim measured improvements in test coverage or defect rates.

## What it demonstrates
- TypeScript + Playwright test organization
- Page Object Model (`pages/QuotePage.ts`)
- Positive and negative test cases with accessible selectors
- HTML test reporting, screenshots on failure, traces on first retry
- CI execution using GitHub Actions
- Local test fixture, so no third-party site or credentials are needed

## Run locally

Requires Node.js 20+.

```bash
npm install
npx playwright install chromium
npm test
npm run report
```

`npm test` starts the local demo web server automatically via Playwright's `webServer` configuration.

## Test matrix
| ID | Scenario | Expected result |
|---|---|---|
| Q-001 | Valid applicant and amount | Sample quote shown |
| Q-002 | Coverage below $1,000 | Browser rejects submission |
| Q-003 | Missing applicant name | Browser rejects submission |

## Publish to GitHub
1. Create a **public** repository in your GitHub account.
2. Upload the contents of this folder (including `.github/workflows`).
3. Optionally run `npm install` and commit the generated `package-lock.json` for reproducible dependencies.
4. Push to GitHub and confirm the Actions workflow passes.
5. Feature the public repository link on LinkedIn.

## Next steps for a real project
Add API contract tests, fixtures and test-data factories, cross-browser coverage, CI quality gates, accessibility checks, and service virtualization. These are **proposed enhancements**, not included features.

## Disclaimer
All data is synthetic. No client information, credentials, or proprietary artifacts are included.
