const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './src',
  roots: ["./src"]
})

const customJestConfig = {
  moduleDirectories: ['node_modules', `${__dirname}/src`],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
