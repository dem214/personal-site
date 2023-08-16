<script lang="ts">
	export let statements: any[];
</script>

{#each statements as statement (statement.id)}
	<p>{statement.text}</p>
{/each}
