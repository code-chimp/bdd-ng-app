export default {
  requireModule: ['ts-node/register'],
  require: ['cucumber.conf.ts', 'tests/assurance/step-definitions/**/*.ts'],
  format: ['@cucumber/pretty-formatter'],
  paths: ['tests/assurance/features/**/*.feature'],
};
