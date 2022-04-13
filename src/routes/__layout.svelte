<script lang="ts">
	import 'virtual:windi.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	let Sentry;

	onMount(async () => {
		if (browser) {
			import('virtual:windi-devtools');
			Sentry = (await import('@sentry/browser')).default;

			Sentry.init({});
		}
	});
</script>

<slot />
