module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'vue/script-setup-uses-vars': 'error',
		'no-console': 'warn',
		'prettier/prettier': [
			'warn',
			{
				useTabs: true,
				semi: true,
				singleQuote: true,
				bracketSpacing: true,
				bracketSameLine: false,
				arrowParens: 'avoid',
				proseWrap: 'always',
			},
		],
	},
};
