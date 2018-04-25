# Web Speed Test - Testing functionality with webdriverio
------------

Uses:
[WebdriverIO](http://webdriver.io/ "WebdriverIO") as a base WebDriver implementation.
[TypeScript](https://www.typescriptlang.org/ "TypeScript") for easier development process.
[Mocha](https://mochajs.org/ "Mocha")  as a test runner
[Allure Reporter ](https://github.com/webdriverio/wdio-allure-reporter "Allure Reporter ") for nice tests result representation

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

[NodeJs](https://nodejs.org/en/ "NodeJs") runtime engine (Version 8 and above)
[Chrome](https://www.google.com/chrome/ "Chrome")  for tests execution
[FireFox](https://www.mozilla.org/en-US/ "FireFox")  for tests execution and display allure reporter
[Java](http://www.oracle.com/technetwork/java/index.html "Java") for selenium grid and report generation(Version 7 and above) 

------------
**Steps:**
**Install packages:**
> npm install

**Compile TypeScript:**
> npm run compile

**Start Selenium grid:** *(start grid in separate terminal)*
> npm run grid

**Execute test suite:** 
> npm run test

**Additional commands can be found in the package.json**
