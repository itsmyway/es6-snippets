const webpackConfig = require('./webpack.config.js');

// Karma configuration
// Generated on Mon Jun 05 2017 22:45:37 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      { pattern: 'test-context.js', watched: false }
    ],
    exclude: [
    ],
    reporters: ['spec'],
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    preprocessors: {
      'test-context.js': ['webpack']
    }
  })
}
