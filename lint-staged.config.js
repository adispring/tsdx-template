// lint-staged.config.js
const micromatch = require('micromatch');

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': (files) => {
    return `eslint ${files.join(' ')}`;
  },
  'src/**/*.less': (files) => {
    return `stylelint ${files.join(' ')}`;
  },
};
