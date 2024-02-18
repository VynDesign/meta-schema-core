module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    transform: {
        "^.+\\.tsx?$": ["ts-jest", {
            diagnostics: false
        }]
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: './test-results', outputName: 'unit-tests.xml' }]
    ]
}
