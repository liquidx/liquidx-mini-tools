<script lang="ts">
	import { resolve } from '$app/paths';
	import LegalPage from '#lib/components/LegalPage.svelte';
</script>

<LegalPage title="Privacy Policy" updated="2026-10-25">
	<p>
		This Privacy Policy explains what information Mini Tools (the "Service"), operated by Alastair
		Tse ("we", "us"), collects, how we use it, and the choices you have. By using the Service you
		agree to the practices described here. This policy should be read alongside our
		<a href={resolve('/terms')}>Terms of Service</a>.
	</p>

	<h2>If you are not signed in</h2>
	<p>
		<strong>We do not keep any data you submit.</strong> Files, text, and settings you use with a tool
		while signed out are not stored by us, and are discarded once you leave or reload the page.
	</p>

	<h2>If you are signed in</h2>
	<p>
		<strong>We keep all data you submit while signed in.</strong> This includes:
	</p>
	<ul>
		<li>your account details, such as your name and email address;</li>
		<li>files, text, images, and settings you create or upload with any tool;</li>
		<li>records of when that content was created or changed.</li>
	</ul>
	<p>
		We use this data only to provide the Service to you, for example to let you return to your work
		later. We do not sell it, and we do not share it with third parties except service providers
		that host and run the Service on our behalf, or where required by law.
	</p>

	<h2>Technical information</h2>
	<p>
		Like most websites, our hosting provider may process standard request information, such as your
		IP address, browser type, and the pages you request, in order to deliver the site and protect it
		from abuse. We do not use this information to identify or track you, and we do not use
		advertising or third-party tracking cookies.
	</p>

	<h2>Retention and deletion</h2>
	<p>
		We keep data associated with your account for as long as your account exists. You may ask us to
		delete your account and its data at any time, and we will do so within a reasonable period,
		except where we are required by law to retain it.
	</p>

	<h2>Your rights</h2>
	<p>
		Depending on where you live, you may have the right to access, correct, export, or delete your
		personal data, or to object to how it is processed. To exercise any of these rights, contact us
		using the details below.
	</p>

	<h2>Security</h2>
	<p>
		We take reasonable measures to protect the data we hold, but no method of transmission or
		storage is completely secure, and we cannot guarantee absolute security.
	</p>

	<h2>Children</h2>
	<p>
		The Service is not directed at children under 13, and we do not knowingly collect personal data
		from them.
	</p>

	<h2>Changes to this policy</h2>
	<p>
		We may update this policy from time to time. Changes take effect when posted on this page, and
		the date at the top will be updated.
	</p>

	<h2>Contact</h2>
	<p>Questions about this policy can be sent via <a href="https://liquidx.net">liquidx.net</a>.</p>
</LegalPage>
