module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'class-methods-use-this': 0,
    'react/jsx-props-no-spreading': 0
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      webpack: {
        config: './build/webpack.base.conf.js'
      }
    },
    'import/extensions': ['.js', '.jsx']
  }
};
