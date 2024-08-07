import { tick } from 'svelte';
import { test } from '../../test';

export default test({
	compileOptions: {
		compatibility: {
			componentApi: 4
		}
	},
	html: '<button>0</button>',
	async test({ assert, target }) {
		const button = target.querySelector('button');
		await button?.click();
		await tick();
		assert.htmlEqual(target.innerHTML, '<button>1</button>');
	}
});
