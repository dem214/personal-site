<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value: string = '';

	function handleSubmit() {
		dispatch('input_submitted', {
			id: Date.now(),
			text: value
		});
		value = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<lable>$</lable>
	<input bind:value />
</form>
