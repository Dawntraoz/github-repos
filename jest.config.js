module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.vue',
    '!**/node_modules/**',
  ]
};
