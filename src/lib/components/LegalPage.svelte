<!-- Long-form text page (terms, privacy): title, last-updated date, then prose sections. -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		/** ISO date, YYYY-MM-DD */
		updated: string;
		children: Snippet;
	};

	let { title, updated, children }: Props = $props();
</script>

<svelte:head><title>{title} · Mini Tools</title></svelte:head>

<article>
	<header>
		<h1>{title}</h1>
		<p class="meta">last updated <time datetime={updated}>{updated}</time></p>
	</header>
	<div class="prose">
		{@render children()}
	</div>
</article>

<style>
	article {
		padding: 96px 0 0;
		max-width: 640px;
	}
	header {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 40px;
	}
	h1 {
		font-size: var(--text-screen);
		font-weight: 600;
		letter-spacing: var(--tracking-title);
		text-transform: uppercase;
		line-height: 1.4;
	}
	.meta {
		font-size: var(--text-meta);
		color: var(--color-text-faint);
	}
	.prose {
		font-size: var(--text-content);
		line-height: 1.7;
		color: var(--color-text-tertiary);
	}
	.prose :global(h2) {
		margin: 40px 0 12px;
		font-size: var(--text-small);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}
	.prose :global(p),
	.prose :global(ul) {
		margin-bottom: 14px;
	}
	.prose :global(ul) {
		padding-left: 18px;
		list-style: square;
	}
	.prose :global(li) {
		margin-bottom: 6px;
	}
	.prose :global(strong) {
		color: var(--color-text-secondary);
		font-weight: 600;
	}
	.prose :global(a) {
		color: var(--color-text-secondary);
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
		text-decoration-color: var(--color-text-faint);
	}
	.prose :global(a:hover) {
		text-decoration-color: var(--color-accent);
	}
	@media (max-width: 719px) {
		article {
			padding-top: 48px;
		}
	}
</style>
