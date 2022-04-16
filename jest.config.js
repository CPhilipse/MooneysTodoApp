module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {'\\.ts$': ['ts-jest']},
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

// module.exports = {
//   preset: 'react-native',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
// };
