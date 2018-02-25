module.exports = {
	'selector-max-id': [0, {
		message: 'Unexpected use of id selector',
	}],
	'no-duplicate-selectors': true,
	'selector-combinator-space-before': 'always',
	'selector-combinator-space-after': 'always',
	'selector-list-comma-space-before': 'never',
	'selector-list-comma-space-after': 'always',
	'selector-descendant-combinator-no-non-space': true,
	'selector-pseudo-class-parentheses-space-inside': 'never',
	'selector-attribute-quotes': 'never',
	'selector-type-case': 'lower',
	'selector-pseudo-element-case': 'lower',
	'selector-pseudo-class-case': 'lower',
	'rule-empty-line-before': ['always', {
		'ignore': ['inside-block', 'after-comment'],
	}],
}
