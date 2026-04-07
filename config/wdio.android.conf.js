import { config as baseConfig } from '../wdio.base.conf.js'

export const config = {
  ...baseConfig,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'sdk_gphone16k_x86_64',
    'appium:platformVersion': '17.0',       
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.wdiodemoapp',
    'appium:appActivity': '.MainActivity',
    'appium:noReset': false,
    'appium:fullReset': false,
    'appium:newCommandTimeout': 120,
  }],
}