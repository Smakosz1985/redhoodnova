// app/privacy-choices/page.tsx
export default function PrivacyChoicesPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-6 py-10">
      <h1>Your Privacy Choices</h1>
      <p className="text-sm text-neutral-400">Last updated: October 2025</p>

      <p>
        Under applicable privacy laws, including the California Consumer Privacy Act (CCPA) 
        and the California Privacy Rights Act (CPRA), residents of certain regions have the 
        right to opt out of the “sale” or “sharing” of their personal information.
      </p>

      <p>
        RedHoodNova does not sell personal data in the traditional sense. However, 
        we may use cookies and similar technologies for personalized advertising and 
        analytics that could be considered “sharing” under the CCPA/CPRA.
      </p>

      <h2>Manage Your Choices</h2>
      <p>
        If you wish to opt out of personalized ads or analytics tracking, you can:
      </p>
      <ul>
        <li>Disable advertising cookies in our <a href="/privacy">Privacy & Cookies</a> settings.</li>
        <li>Adjust tracking permissions in your mobile device settings (for Ignaro, Flamette, or Blazero apps).</li>
        <li>Email us directly at <a href="mailto:contact@redhoodnova.com">contact@redhoodnova.com</a> 
            with the subject line <strong>“Privacy Choice Request”</strong>.</li>
      </ul>

      <h2>Global Privacy Control (GPC)</h2>
      <p>
        We honor browser-based opt-out signals such as Global Privacy Control (GPC). 
        When detected, we will treat it as a valid request to opt out of targeted advertising.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about your privacy rights or choices, 
        contact us at <a href="mailto:contact@redhoodnova.com">contact@redhoodnova.com</a>.
      </p>

      <p className="text-neutral-400 text-sm">
        © 2025 RedHoodNova — Based in the United Kingdom. Available worldwide.
      </p>
    </main>
  );
}
