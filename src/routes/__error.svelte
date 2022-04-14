<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status: status,
			},
		};
	}
</script>

<script>
	export let message;
	export let status;
</script>

{#if status == 404}
	404
{:else}
	{message} {status}
{/if}
