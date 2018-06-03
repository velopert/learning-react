const path = require('path');

module.exports = {
  "extends": "airbnb-base",
  "settings": {
    "import/resolver": {
      node: { paths: [path.resolve('./src')] }
    },
  },
  "rules": {
    "no-unused-vars": 1,
    "comma-dangle": 0,
    "no-console": 0,
    "eol-last": 0
  }
};
