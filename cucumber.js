module.exports = {
  default: {
    require: [
      'src/step_definitions/**/*.ts'
    ],
    requireModule: [
      'ts-node/register'
    ],
    format: ['progress'],
    timeout: 60000,  // Adjust the timeout as needed
  },
};
