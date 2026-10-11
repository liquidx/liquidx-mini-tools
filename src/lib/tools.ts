export type Tool = {
	slug: string;
	title: string;
	/** ISO date, YYYY-MM-DD */
	date: string;
	summary: string;
};

/**
 * Every tool listed on the index, in display order.
 *
 * An entry links to /<slug>. Until src/routes/<slug>/ exists, the
 * src/routes/[slug]/ placeholder page is shown instead.
 */
export const tools: Tool[] = [];

export function findTool(slug: string): Tool | undefined {
	return tools.find((t) => t.slug === slug);
}
