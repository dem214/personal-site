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
	<div class="input-row">
		<label for="command-input">$</label>
		<input name="command-input" bind:value />
</div>
</form>

<style>
	.input-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	input {
		width: 100%;
		background: transparent;
		color: inherit;
		font-family: inherit;
		font-size: inherit;
		border-color: transparent;
	}
	label {
		text-align: right;
		clear: both;
		float:left;
	}
</style>
