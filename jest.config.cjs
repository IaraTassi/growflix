module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "json"],
  roots: ["<rootDir>/tests"],
};
