import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import WindiCSS from 'vite-plugin-windicss';

const moduleExclude = (match) => {
	const m = (id) => id.indexOf(match) > -1;
	return {
		name: `exclude-${match}`,
		resolveId(id) {
			if (m(id)) return id;
		},
		load(id) {
			if (m(id)) return `export default {}`;
		},
	};
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		vite: {
			plugins: [WindiCSS(), moduleExclude('text-encoding')],
			optimizeDeps: {
				include: [
					'gun',
					'gun/gun',
					'gun/sea',
					'gun/sea.js',
					'gun/lib/then',
					'gun/lib/webrtc',
					'gun/lib/radix',
					'gun/lib/radisk',
					'gun/lib/store',
					'gun/lib/rindexed',
				],
			},
		},
	},
};

export default config;
