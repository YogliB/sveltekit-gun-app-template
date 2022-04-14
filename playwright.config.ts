import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run storybook:start',
		port: 3000,
	},
};

export default config;
