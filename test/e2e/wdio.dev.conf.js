// Specific configurations for tests execution on local dev machine
var merge = require("deepmerge");
var wdioConf = require("./wdio.conf.js");

// have main config file as default but overwrite environment specific information
exports.config = merge(
  wdioConf.config,
  {
    // Host address of the running Selenium server.
    //if using grid in dev vm (see README => local VM with grid)
    // host: '192.168.31.19',
    // port: 1234,
    host: "localhost",
    port: "4444",
    path: "/wd/hub",

    //total maximum number of different browser instances
    maxInstances: 1,

    //Use real chrome browser with 1 instance for local testing on dev machine
    capabilities: [
      {
        //max instance of chrome browser instances
        maxInstances: 1,
        browserName: "chrome",

        chromeOptions: {
          args: ["--window-size=1920,1080", "--incognito"]
        }
      }
    ],
    reporters: ["spec", "allure"],
    reporterOptions: {
      allure: {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true
      }
    }
  },
  { clone: false }
);
