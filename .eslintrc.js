module.exports = {
  root: true,
  extends: [
    'react-recommend'
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/webpack.base.conf.js'
      }
    },
  }
};
