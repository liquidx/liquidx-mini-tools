import html from './calendar-clock.html?raw';
import type { RequestHandler } from './$types';

export const prerender = true;

// Standalone tool: served as its own document, outside the site layout.
export const GET: RequestHandler = () =>
	new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
