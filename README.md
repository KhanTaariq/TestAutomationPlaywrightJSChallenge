# TestAutomationPlaywrightJSChallenge

To set up project > open terminal

To clone repo : cmd > Git clone <repository_url>

Install dependencies : cmd >npm install

-Install the dependencies to the local node_modules folder.

-In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.

-By default, npm install will install all modules listed as dependencies in package.json.

To run test open "TestAutomationPlaywrightJSChallenge\package.json"
under scripts (test can be run by clicking on the name of the script):
"scripts":
 {
    "test:Run all tests with UI on multiple browsers": "npx playwright test --headed",
    "test:Run all tests headless on multiple browsers": "npx playwright test",
    "test:Run all tests with UI on chrome browsers": "npx playwright test --headed --project=chromium",
    "test:Run all tests headless on chrome browsers": "npx playwright test --project=chromium",
    "test:Open monocart report": "npx monocart show-report monocart-report/index.html"
  }
