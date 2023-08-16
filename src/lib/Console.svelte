<script lang="ts">
	import Output from './console/Output.svelte';
	import Input from './console/Input.svelte';
	import { handle } from './console/console';

	let statements: any[] = [];

	function handleInput(event: any): void {
		const result = handle(event.detail.text);
		statements.push({ id: event.detail.id, text: result });
		statements = statements;
	}
</script>

<Output {statements} />
<Input on:input_submitted={handleInput} />
