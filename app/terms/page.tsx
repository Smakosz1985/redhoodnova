// app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16 prose prose-invert prose-a:text-orange-300">
        {/* Przyciski nawigacyjne */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-block rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            ← Home
          </Link>
        </div>

        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> 10 Sep 2025</p>

        <h2>1) Agreement to Terms</h2>
        <p>
          By accessing and using <strong>redhoodnova.com</strong>, you agree to be bound by these Terms of Service. 
          If you do not agree, please do not use our site or services.
        </p>

        <h2>2) Use of the Site</h2>
        <ul>
          <li>You may use this site only for lawful purposes and in accordance with these Terms.</li>
          <li>You agree not to misuse the contact form or attempt to interfere with the operation of the site.</li>
          <li>We reserve the right to suspend or terminate access for violations of these Terms.</li>
        </ul>

        <h2>3) Intellectual Property</h2>
        <p>
          All content on this site (including logos, text, graphics, design, and code) is owned by RedHoodNova 
          unless otherwise stated. You may not copy, distribute, or create derivative works without our prior consent.
        </p>

        <h2>4) Disclaimer of Warranties</h2>
        <p>
          This site is provided on an “as is” and “as available” basis. We make no guarantees that the site will be 
          uninterrupted, error-free, or secure. Use is at your own risk.
        </p>

        <h2>5) Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, RedHoodNova shall not be liable for any indirect, incidental, 
          consequential, or punitive damages arising from your use of this site.
        </p>

        <h2>6) Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. We are not responsible for the content or practices of such sites.
        </p>

        <h2>7) Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the United Kingdom. 
          Any disputes will be subject to the exclusive jurisdiction of the UK courts.
        </p>

        <h2>8) Changes</h2>
        <p>
          We may update these Terms from time to time. Any changes will be posted on this page with an updated “Last updated” date.
        </p>

        <h2>9) Contact</h2>
        <p>
          For questions regarding these Terms, please contact us at:&nbsp;
          <a href="mailto:contact@redhoodnova.com">contact@redhoodnova.com</a>
        </p>
      </section>
    </main>
  );
}
