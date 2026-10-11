<script lang="ts">
	import ToolList from '#lib/components/ToolList.svelte';
	import { tools } from '#lib/tools.ts';
</script>

<svelte:head><title>Mini Tools</title></svelte:head>

<p class="intro">
	A collection of small, single-purpose tools. By <a href="https://liquidx.net">@liquidx</a>.
</p>

{#if tools.length}
	<ToolList {tools} />
{:else}
	<p class="empty">no tools yet.</p>
{/if}

<style>
	.intro {
		padding: 96px 0 56px;
		max-width: 560px;
		font-size: var(--text-content);
		line-height: 1.7;
		color: var(--color-text-tertiary);
	}
	.intro a {
		color: var(--color-text-secondary);
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
		text-decoration-color: var(--color-text-faint);
	}
	.intro a:hover {
		text-decoration-color: var(--color-accent);
	}
	.empty {
		font-size: var(--text-small);
		color: var(--color-text-faint);
		animation: var(--animate-rise-in);
	}
	@media (max-width: 719px) {
		.intro {
			padding: 48px 0 40px;
		}
	}
</style>
