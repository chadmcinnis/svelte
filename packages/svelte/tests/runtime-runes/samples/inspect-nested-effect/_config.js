import { test } from '../../test';

export default test({
	compileOptions: {
		dev: true
	},

	async test({ assert, logs }) {
		assert.deepEqual(logs, ['init', 0, 'update', 1]);
	}
});
