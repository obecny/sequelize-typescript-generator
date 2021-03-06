export const eslintDefaultConfig = {
    parser:  '@typescript-eslint/parser',
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
    },
    plugins: [],
    extends:  [],
    rules:  {
        'padded-blocks': ['error', { blocks: 'always', classes: 'always', switches: 'always' }],
        'lines-between-class-members': ['error', 'always' ],
        'object-curly-newline': ['error', {
            'ObjectExpression': 'always',
            'ObjectPattern': { 'multiline': true },
            'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
            'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
        }],
        'object-property-newline': ['error'],
        'indent': ['error', 'tab'],
    },
};
