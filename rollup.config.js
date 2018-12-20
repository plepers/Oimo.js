export default {
	input: 'src/Oimo.js',
	output: [
		{
			format: 'umd',
			name: 'OIMO',
			file: 'build/oimo.js',
			indent: '\t'
		},
		{
			format: 'es',
			file: 'build/oimo.module.js',
			indent: '\t'
		}
	]
};
