/* eslint-disable import/no-commonjs */
/* tslint:disable:object-literal-sort-keys */
module.exports = {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "jest-svg-transformer",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
