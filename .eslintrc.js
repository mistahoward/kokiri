module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ["react", "@typescript-eslint", "@stylistic"],
	extends: ["plugin:react/recommended", "airbnb",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended", "plugin:react/jsx-runtime",
		"@electron-toolkit/eslint-config-ts/recommended",
	],
	parser: "@typescript-eslint/parser",
	overrides: [],
	parserOptions: {
		project: ["./tsconfig.node.json", "./tsconfig.web.json"],
		tsconfigRootDir: __dirname,
	},
	rules: {
		"@stylistic/quotes": ["error", "double"],
		"no-tabs": "off",
		indent: ["error", "tab", { SwitchCase: 1 }],
		quotes: ["error", "double"],
		"react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
		"import/extensions": "off",
		"import/no-unresolved": "off",
		"react/jsx-indent": "off",
		"react/jsx-closing-tag-location": "off",
	},
};
