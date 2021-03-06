module.exports = {
	extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'jest', 'import'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
		babelOptions: {
			babelrcRoots: [
				// Keep the root as a root
				'.',

				// Also consider story-book as root.
				'./tools/story-book',
			],
		},
	},
	env: {
		es6: true,
		browser: true,
		node: true,
		jest: true,
		jquery: false,
		mocha: false,
	},
	rules: {
		'no-mixed-spaces-and-tabs': 0,
		quotes: 0,
		'no-console': 0,
		'no-debugger': 1,
		'no-var': 1,
		semi: [1, 'always'],
		'no-trailing-spaces': 0,
		'eol-last': 0,
		'no-underscore-dangle': 0,
		'no-alert': 1,
		'no-lone-blocks': 0,
		'jsx-quotes': 1,
		'react/display-name': [
			1,
			{
				ignoreTranspilerName: false,
			},
		],
		'react/forbid-prop-types': [
			1,
			{
				forbid: ['any'],
			},
		],
		'no-unused-vars': 0,
		'no-control-regex': 0,
		'no-dupe-args': 1,
		'no-dupe-keys': 1,
		'no-unused-labels': 1,
		'no-self-assign': 1,
		'react/jsx-boolean-value': 0,
		'react/jsx-closing-bracket-location': 0,
		'react/jsx-curly-spacing': 1,
		'react/jsx-indent-props': 0,
		'react/jsx-key': 1,
		'react/jsx-max-props-per-line': 0,
		'react/jsx-no-bind': 0,
		'react/jsx-no-duplicate-props': 1,
		'react/jsx-no-literals': 0,
		'react/jsx-no-undef': 1,
		'react/jsx-pascal-case': 1,
		'react/jsx-sort-prop-types': 0,
		'react/jsx-sort-props': 0,
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/no-danger': 0,
		'react/no-did-mount-set-state': 1,
		'react/no-did-update-set-state': 1,
		'react/no-direct-mutation-state': 1,
		'react/no-multi-comp': 0,
		'react/no-set-state': 0,
		'react/no-unknown-property': 1,
		'react/prefer-es6-class': 1,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 1,
		'react/self-closing-comp': 1,
		'react/sort-comp': 1,
		'import/no-unresolved': 0,
		'no-case-declarations': 'warn',
		'no-empty': 'warn',
		'no-fallthrough': 'warn',
		'no-constant-condition': 'warn',
		'no-extra-boolean-cast': 'warn',
		'import/default': 'warn',
		'no-unsafe-finally': 'warn',
		'no-useless-escape': 'warn',
		'no-cond-assign': 1,
		'import/no-cycle': [1, { maxDepth: 10 }],
	},
	globals: {
		__SRC_LANG_EN__: true,
		__SRC_LANG_VI__: true,
		__PLATFORM__: true,
		__DEV__: true,
		__PROD__: true,
		__ZaBUNDLENAME__: true,
		__INSTALLER__: true,
		__CDN_DOMAIN__: true,
		__SRC_CPU_HEAVY_WORKER__: true,
		__SRC_SOC_WORKER__: true,
		__SRC_ZD_WORKER__: true,
		__SRC_SEARCH_WORKER__: true,
		__SRC_PDF_WORKER__: true,
		__SRC_SERVICE_WORKER__: true,
		__BUILD_TYPE__: true,
		__BUILD_ENV__: true,
		__PC__: true,
		__WEB__: true,
		_$encrypt: true,
		perf: true,
		__SRC_PREVIEW_THUMB_WORKER__: 'readonly',
		__SRC_MAINLESS_WORKER__: 'readonly',
		globalThis: 'readonly',
		JSX: true,
	},

};
