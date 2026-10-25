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
export const tools: Tool[] = [
	{
		slug: 'calendar-clock',
		title: 'Calendar Clock',
		date: '2026-10-11',
		summary: "Ambient full-screen display with this month's calendar beside a large clock."
	},
	{
		slug: 'mosaic',
		title: '16:9 Mosaic Maker',
		date: '2026-10-11',
		summary: 'Arrange images into a grid on a 16:9 sheet and export it as a JPEG or PNG.'
	},
	{
		slug: 'mountain-logo',
		title: 'Mountain Logo',
		date: '2026-10-11',
		summary: 'Generate minimalist three-peak mountain logos and copy or download them as SVG.'
	},
	{
		slug: 'svg-to-png',
		title: 'SVG to PNG',
		date: '2026-10-25',
		summary: 'Drop in an SVG and download it rendered as a PNG at any width (640px by default).'
	}
];

export function findTool(slug: string): Tool | undefined {
	return tools.find((t) => t.slug === slug);
}
