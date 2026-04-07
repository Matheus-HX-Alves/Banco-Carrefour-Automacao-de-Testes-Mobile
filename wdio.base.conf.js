import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import allureReporter from '@wdio/allure-reporter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const config = {
  runner: 'local',
  port: 4723,
  specs: [
    path.resolve(__dirname, 'test', 'specs', '**', '*.spec.js')
  ],
  exclude: [],
  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  onPrepare: function () {
    if (!fs.existsSync('./allure-results')) {
      fs.mkdirSync('./allure-results', { recursive: true })
    }
    // Informações de ambiente que aparecem no relatório
    fs.writeFileSync('./allure-results/environment.properties', [
      'OS=Windows',
      'Platform=Android',
      'Framework=WebdriverIO',
      'Reporter=Allure',
      'Automation=Appium',
      'App=com.wdiodemoapp',
      'AppVersion=17.0',
    ].join('\n'))
  },

  afterTest: async function (test, context, { passed }) {
    if (!passed) {
      const screenshotDir = './allure-results/screenshots'

      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true })
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const screenshotPath = `${screenshotDir}/${timestamp}.png`

      await browser.saveScreenshot(screenshotPath)

      allureReporter.addAttachment(
        `Falha: ${test.title}`,
        fs.readFileSync(screenshotPath),
        'image/png'
      )
    }
  },
}