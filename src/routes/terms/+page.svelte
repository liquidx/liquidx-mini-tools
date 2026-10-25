<script lang="ts">
	import { resolve } from '$app/paths';
	import LegalPage from '#lib/components/LegalPage.svelte';
</script>

<LegalPage title="Terms of Service" updated="2026-10-25">
	<p>
		These terms govern your use of Mini Tools (the "Service"), operated by Alastair Tse ("we",
		"us"). By using the Service you agree to these terms. If you do not agree, do not use the
		Service.
	</p>

	<h2>Use of the Service</h2>
	<p>
		You may use the Service for any lawful purpose. You agree not to misuse it, including by
		attempting to disrupt, overload, or gain unauthorised access to it, or by using it to process
		content you do not have the right to use.
	</p>

	<h2>Accounts</h2>
	<p>
		If you create an account, you are responsible for keeping your sign-in credentials secure and
		for activity under your account. We may suspend or close accounts that breach these terms.
	</p>

	<h2>Your content</h2>
	<p>
		You keep ownership of anything you submit to the Service. You grant us a limited licence to
		store and process that content solely to operate the Service for you. How we handle your data is
		described in our <a href={resolve('/privacy')}>Privacy Policy</a>.
	</p>

	<h2>No warranty</h2>
	<p>
		The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong>, without
		warranties of any kind, express or implied. We do not guarantee that it will be uninterrupted,
		error-free, or that its output will be accurate or fit for any particular purpose.
	</p>

	<h2>Limitation of liability</h2>
	<p>
		To the fullest extent permitted by law, we are not liable for any indirect, incidental, special,
		or consequential damages, or any loss of data, profits, or revenue, arising from your use of or
		inability to use the Service.
	</p>

	<h2>Changes</h2>
	<p>
		We may modify, suspend, or discontinue the Service, or update these terms, at any time. Changes
		take effect when posted on this page. Continued use of the Service after a change means you
		accept the updated terms.
	</p>

	<h2>Contact</h2>
	<p>Questions about these terms can be sent via <a href="https://liquidx.net">liquidx.net</a>.</p>
</LegalPage>
