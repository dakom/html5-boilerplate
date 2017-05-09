var CommonConfig = require('../common.config.js');

module.exports = function (config) {
  frameworks: ['mocha'],

  config.set({
    basePath: '',
    frameworks: ["mocha", "source-map-support"],
    files: CommonConfig.GetInfo("karma-libs", process.env.NODE_ENV).concat([
      '../test-dist/*.js',
      {
        pattern: '../test-dist/*.map',
        included: false,
        served: true
      }
    ]),
    preprocessors: {
      '**/*.js': ['sourcemap']
    },

    reporters: ["mocha"],
    port: 9876,
    colors: true,
    
    browsers: ['Chrome'],
    
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    client: {
      mocha: {
        timeout : 6000 // 6 seconds - upped from 2 seconds
      }
    },

    webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,
            // and use stats to turn off verbose output
            stats: {
                // options i.e. 
                chunks: false
            }
        },

        plugins: [
          'karma-mocha', 
          'karma-chrome-launcher', 
          'karma-source-map-support', 
          'karma-sourcemap-loader',
          'karma-mocha-reporter',
          
        ]
  });
}