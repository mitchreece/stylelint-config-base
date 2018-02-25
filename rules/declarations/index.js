const properties = require('./properties')
const values = require('./values')
const units = require('./units')

module.exports = Object.assign(
	{
		'declaration-colon-space-before': 'never',
		'declaration-colon-space-after': 'always',
		'declaration-bang-space-before': 'never',
		'declaration-bang-space-after': 'never',
		'no-extra-semicolons': true,
	},
	properties,
	values,
	units
)
