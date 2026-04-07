import { config as baseConfig } from '../wdio.base.conf.js'

export const config = {
  ...baseConfig,
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 15',      
    'appium:platformVersion': '17.0',
    'appium:automationName': 'XCUITest',
    'appium:bundleId': 'com.wdiodemoapp',
    'appium:noReset': false,
    'appium:newCommandTimeout': 120,
  }],
}