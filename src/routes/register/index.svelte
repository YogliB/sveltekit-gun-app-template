<script>
	import { createUser } from '$lib/db';

	let userName = '';

	function handleSubmit(e) {
		e.preventDefault();

		if (!userName.trim().length) return;

		createUser(userName);
		userName = '';
	}
</script>

<main class="h-screen flex flex-col justify-center items-center gap-8">
	<h1 class="text-3xl">Awesome App</h1>

	<form class="flex flex-col" on:submit={handleSubmit}>
		<input
			type="text"
			placeholder="What's your name?"
			class="text-center"
			bind:value={userName}
		/>
		<button> Go </button>
	</form>

	<a href="/login">Already have an account?</a>
</main>
