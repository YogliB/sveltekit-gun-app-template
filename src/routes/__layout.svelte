<script context="module">
	import { browser } from '$app/env';
	import { initSentryBrowser, initWindiDevTools } from '$lib/helpers';
	import 'virtual:windi.css';

	if (browser) {
		initSentryBrowser({ dsn: import.meta.env.VITE_SENTRY_DSN });
		initWindiDevTools();
	}
</script>

<slot />
