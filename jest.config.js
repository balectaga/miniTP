/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  // Optionnel si tu veux surcharger TS pour les tests :
  // globals: { 'ts-jest': { tsconfig: 'tsconfig.json' } },
};
