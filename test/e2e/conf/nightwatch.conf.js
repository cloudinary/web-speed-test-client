nightwatch_config = {
    src_folders: ['tests/'],
    custom_commands_path: ['commands/'],
    globals_path: "./globals.js",
    test_workers: { enabled: true, workers: 'auto' },

    selenium: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    },

    common_capabilities: {
        'build': 'e2e-nightwatch-browserstack',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || '',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || '',
        'browserstack.debug': true
    },

    test_settings: {
        default: {
            launch_url: 'https://webspeedtest.cloudinary.com/',
            desiredCapabilities: {
                os: 'Windows',
                os_version: '10',
                resolution: '1920x1200',
            }
        },
        chrome: {
            desiredCapabilities: {
                browser: 'chrome',
                chromeOptions: {
                    args: ['start-maximized']
                }
            }
        },
        firefox: {
            desiredCapabilities: {
                browser: 'firefox'
            }
        },
        safari: {
            desiredCapabilities: {
                browser: 'safari',
            }
        },
        ie: {
            desiredCapabilities: {
                browser: 'internet explorer'
            }
        }
    }
};

for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for (var j in nightwatch_config.common_capabilities) {
        config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
}

module.exports = nightwatch_config;