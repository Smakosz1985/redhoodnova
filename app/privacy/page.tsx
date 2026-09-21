// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy • RedHoodNova",
  description:
    "Privacy Policy for RedHoodNova apps (Ignaro, Flamette, Blazero): what we collect, why we collect it, camera & live rooms, chat, location, coins & rewards, analytics, cookies, security, retention, and regional rights (EU/UK/US/KR/JP/AU/BR/IN/CN).",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "2025-10-05";

// 🔧 UZUPEŁNIJ W RAZIE POTRZEBY:
const ORG_NAME = "RedHoodNova";                  // sole trader (bez "Ltd")
const CONTROLLER_DESC =
  "RedHoodNova operates as a sole trader established in the United Kingdom and acts as the data controller for the Apps.";
const PRIVACY_EMAIL = "contact@redhoodnova.com";
const CONTACT_URL = "/contact";
const DO_NOT_SELL_URL = "/privacy-choices";      // jeśli zrobisz taką stronę dla CCPA/CPRA

export default function PrivacyPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-6 py-10">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-neutral-400">Last updated: {UPDATED}</p>

      <p>
        This Privacy Policy explains how <strong>{ORG_NAME}</strong> (“<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”)
        collects, uses, shares, and safeguards information across its mobile applications, including
        <strong> Ignaro</strong>, <strong>Flamette</strong>, and <strong>Blazero</strong> (the “<strong>Apps</strong>”).
        By using the Apps, you agree to this Policy and to our <a href="/terms">Terms of Service</a>.
      </p>
      <p>{CONTROLLER_DESC}</p>

      <h2>1. What We Collect</h2>
      <ul>
        <li>
          <strong>Account & Profile</strong> — username, display name, age confirmation (18+), gender, preferences, bio,
          avatars/photos/videos, profile settings, blocks/favorites.
        </li>
        <li>
          <strong>Usage & Interactions</strong> — messages and message metadata, live room joins, reactions, followers,
          gifts sent/received, coins balance and transactions, progress levels, rewards history, feature usage, in-app
          reports (abuse/appeal), device language/timezone.
        </li>
        <li>
          <strong>Device & App</strong> — device model, OS and version, app version, identifiers (e.g., IDFV/Instance ID),
          crash logs, diagnostics, performance metrics, security telemetry (e.g., anti-spam/anti-fraud signals).
        </li>
        <li>
          <strong>Location</strong> — precise or approximate location for features such as <em>Radar</em>, <em>Nearby</em>, and <em>Roam</em>,
          with your device-level permission. You can disable it in device settings at any time.
        </li>
        <li>
          <strong>Camera/Microphone/Media</strong> — content you stream or upload (video, audio, images), thumbnails,
          and moderation signals (e.g., automated classification). Access is optional and controlled by your device.
        </li>
        <li>
          <strong>Payments & Subscriptions</strong> — purchase receipts, plan, status, renewal dates, transaction IDs,
          limited billing metadata from app stores/payment processors. We do <em>not</em> store full card numbers.
        </li>
        <li>
          <strong>Cookies & Similar Technologies (Web)</strong> — essential cookies for security and functionality, and
          optional analytics/marketing cookies subject to consent where required. See “Cookies” below.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>Provide, operate, and improve the Apps; personalize discovery and recommendations.</li>
        <li>Enable chat, live rooms, camera features, gifts, coins, progress levels, and rewards.</li>
        <li>Safety and <strong>moderation</strong> (automated tools and human review) to detect and address prohibited content/behavior and underage use.</li>
        <li>Fraud prevention and account integrity (anti-spam, anti-abuse, chargeback handling).</li>
        <li>Analytics, product research, and quality assurance.</li>
        <li>Marketing and communications (with consent where required); service messages (e.g., changes to terms, security alerts).</li>
        <li>Legal compliance, dispute handling, and enforcement of our Terms.</li>
      </ul>

      <h2>3. Legal Bases (EEA/UK)</h2>
      <p>
        Where GDPR/UK GDPR applies, we process data based on: <strong>contract</strong> (to provide the Apps),
        <strong> legitimate interests</strong> (safety, analytics, improvement), <strong>consent</strong> (e.g., precise
        location, camera/mic, marketing cookies), and <strong>legal obligations</strong>.
      </p>

      <h2>4. Sharing & Disclosure</h2>
      <ul>
        <li>
          <strong>Service Providers</strong> — hosting/CDN, storage, analytics, content moderation, notifications,
          payments and subscriptions, age-verification (where required), security/anti-fraud, customer support.
        </li>
        <li>
          <strong>Affiliates & Business Transfers</strong> — within our group or in the context of a merger, acquisition, or asset sale.
        </li>
        <li>
          <strong>Legal</strong> — when required by law or to protect users, our rights, or the Service; we may cooperate with law enforcement where legally appropriate.
        </li>
      </ul>
      <p>
        We do not sell personal information as “sale” may be defined by certain laws. Where “share” for cross-context
        behavioral advertising under CPRA applies, we provide opt-out mechanisms (see “Your Rights” below).
      </p>

      <h2>5. Camera, Microphone, Live Rooms & Media</h2>
      <ul>
        <li>Access to camera/microphone is optional and can be disabled in device settings at any time.</li>
        <li>
          Streams/uploads may be analyzed automatically and/or by human moderators to enforce our rules and applicable
          law. Do not share sensitive personal information in chat or on camera.
        </li>
        <li>
          We do not publicly resell user streams. Recordings/features, if available, are limited to the Service’s
          functionality and subject to this Policy and the Terms.
        </li>
      </ul>

      <h2>6. Location</h2>
      <p>
        If you enable location, we use it to power discovery features (e.g., Radar/Nearby/Roam). You can revoke
        permission in your device settings. Disabling location may limit certain features.
      </p>

      <h2>7. Cookies & Similar Technologies</h2>
      <p>
        On our website we use essential cookies (security, session, consent storage) and, with consent where required,
        analytics/marketing cookies. You can manage preferences via our cookie banner or browser settings. Refusing
        optional cookies may impact certain site features.
      </p>

      <h2>8. Retention</h2>
      <p>
        We retain information only as long as necessary for the purposes described above, to comply with legal
        obligations, and to resolve disputes. Retention periods vary by data category and region (e.g., payments and
        security logs may be kept longer). After account deletion or applicable retention periods, data is deleted or
        de-identified per our policy.
      </p>

      <h2>9. Security</h2>
      <p>
        We implement administrative, technical, and physical safeguards designed to protect information (e.g., access
        controls, encryption in transit where appropriate, monitoring). No system is 100% secure. Use caution when
        sharing information and report any concerns to <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>

      <h2>10. Your Choices</h2>
      <ul>
        <li>Update profile info, content visibility, and preferences in the Apps.</li>
        <li>Control device permissions (location, camera, microphone, notifications) in your OS settings.</li>
        <li>Manage cookies/consents on the website via the cookie banner or browser settings.</li>
        <li>Unsubscribe from marketing emails via the link in the message (service messages may still be sent).</li>
      </ul>

      <h2>11. Your Rights</h2>
      <p>
        Your rights depend on your region. We will verify your request and respond within the time limits set by law.
        To exercise rights, use in-app settings or contact us at <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>
      <h3>EEA/UK (GDPR/UK GDPR)</h3>
      <ul>
        <li>Rights to access, rectification, deletion, restriction, portability, and objection; the right to withdraw consent.</li>
        <li>Complaints may be filed with your local data protection authority.</li>
      </ul>
      <h3>United States</h3>
      <ul>
        <li>
          Some state laws (e.g., California CPRA) grant rights to know, delete, correct, and opt out of “sale/share”
          of personal information and targeted advertising.
        </li>
        <li>
          You can exercise opt-out rights (where applicable) at <a href={DO_NOT_SELL_URL}>Your Privacy Choices</a>.
        </li>
      </ul>
      <h3>Brazil (LGPD)</h3>
      <p>Rights similar to GDPR, including confirmation of processing and contact with our data representative.</p>
      <h3>Canada (PIPEDA)</h3>
      <p>Right to access and correct personal information; you may contact the Office of the Privacy Commissioner of Canada.</p>
      <h3>Republic of Korea (PIPA)</h3>
      <p>
        Additional rights include the right to request <em>suspension of processing</em>. Where required, we obtain explicit
        consent for international transfers and may designate a local data representative.
      </p>
      <h3>Japan (APPI)</h3>
      <p>We disclose cross-border transfer practices and respond to data subject requests per APPI.</p>
      <h3>Australia</h3>
      <p>We comply with the Privacy Act 1988, including notice about overseas disclosures as described in this Policy.</p>
      <h3>India (DPDP)</h3>
      <p>Consent is a primary basis for processing; you may withdraw consent via in-app settings (processing may stop for related features).</p>
      <h3>China (PIPL)</h3>
      <p>
        Where applicable, we follow PIPL requirements for international transfers. If we do not store/process data in
        Mainland China, your use is subject to international transfer terms described below.
      </p>

      <h2>12. International Transfers</h2>
      <p>
        Information may be processed in countries other than your own (e.g., the EU, UK, or US). Where required, we use
        appropriate safeguards such as Standard Contractual Clauses (and the UK Addendum) and maintain technical and
        organizational measures.
      </p>

      <h2>13. Children</h2>
      <p>
        The Apps are intended for adults 18+ only. We do not knowingly collect data from minors. If you believe a minor
        is using the Apps, report it via in-app tools or contact <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>

      <h2>14. Changes to this Policy</h2>
      <p>
        We may update this Policy from time to time. Material changes will be communicated in-app and/or on our website
        as required by law. Continued use after changes means you accept the updated Policy.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions or privacy requests? Visit <a href={CONTACT_URL}>redhoodnova.com/contact</a> or email{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>. We respond within statutory deadlines.
      </p>

      <hr />
      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} {ORG_NAME}. All rights reserved. This Policy is an original work and may not be reproduced without permission.
      </p>
    </main>
  );
}
