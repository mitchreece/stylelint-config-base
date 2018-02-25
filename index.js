module.exports = {
	rules: Object.assign(
		require('./rules/blocks'),
		require('./rules/selectors'),
		require('./rules/declarations'),
		require('./rules/general')
	),
}
