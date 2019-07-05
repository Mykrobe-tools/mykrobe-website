const base = require('../webpack.config.development');

module.exports = {
  mode: 'development',
  plugins: [
    // your custom plugins
  ],
  resolve: {
    ...base.resolve,
  },
  module: {
    rules: [...base.module.rules],
  },
};
