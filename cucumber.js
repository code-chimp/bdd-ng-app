module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require cucumber.conf.ts',
    '--require tests/acceptance/stepDefinitions/**/*.ts',
    '--format @cucumber/pretty-formatter',
  ].join(' '),
};
