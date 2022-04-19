<script>
	import { createUser } from '$lib/db';
</script>

<main class="h-screen flex flex-col justify-center items-center gap-8">
	<h1 class="text-3xl">Awesome App</h1>

	<form class="flex flex-col">
		<input
			type="text"
			placeholder="What's your name?"
			class="text-center"
		/>
		<button> Go </button>
	</form>

	<a href="/login">Already have an account?</a>
</main>
