# TestAutomationPlaywrightJSChallenge
To run test open "TestAutomationPlaywrightJSChallenge\package.json"
under scripts (test can be run by clicking on the name of the script):
  "scripts": {
    "test:Run all tests with UI on multiple browsers": "npx playwright test --headed",
    "test:Run all tests headless on multiple browsers": "npx playwright test",
    "test:Run all tests with UI on chrome browsers": "npx playwright test --headed --project=chromium",
    "test:Run all tests headless on chrome browsers": "npx playwright test --project=chromium",
    "test:Open monocart report": "npx monocart show-report monocart-report/index.html"
  }
