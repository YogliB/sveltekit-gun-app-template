const sveltePreprocess = require('svelte-preprocess');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
	],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: sveltePreprocess(),
	},
	webpackFinal: (config) => {
		config.plugins.push(new WindiCSSWebpackPlugin());
		return config;
	},
};
