module.exports = {
  // preset: 'babel-jest',
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "<rootDir>.*(node_modules)(?!.*my-project-b.*).*$",
  ],
  coveragePathIgnorePatterns: ["applicationContext.js"],
  collectCoverage: true,
};