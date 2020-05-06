module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/src/$1',
    '^~/(.*)$': '<rootDir>/app/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/src/components/**/*.vue',
    '<rootDir>/app/src/pages/**/*.vue'
  ]
}
