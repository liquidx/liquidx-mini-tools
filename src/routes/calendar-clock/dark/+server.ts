import html from '../calendar-clock.html?raw';
import type { RequestHandler } from './$types';

export const prerender = true;

// Same document as /calendar-clock; the page picks its dark theme from the URL path.
export const GET: RequestHandler = () =>
	new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
