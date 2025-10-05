// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service • RedHoodNova",
  description:
    "Global Terms of Service for RedHoodNova apps (Ignaro, Flamette, Blazero): eligibility (18+), accounts, subscriptions, coins & gifts, live rooms, moderation, privacy, and regional rights (EU/UK/US/KR, etc.).",
  alternates: { canonical: "/terms" },
};

const UPDATED = "2025-10-05";

// 🔧 UZUPEŁNIJ TE DANE PRZED PUBLIC: 
const ORG_NAME = "RedHoodNova";                    // sole trader – bez "Ltd"
const ORG_JURISDICTION = "England & Wales";        // prawo właściwe (UK)
const LEGAL_EMAIL = "contact@redhoodnova.com";     // <— Twój email
const PRIVACY_EMAIL = "contact@redhoodnova.com";   // ten sam dla privacy
const CONTACT_URL = "/contact";

export default function TermsPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-6 py-10">
      <h1>Terms of Service</h1>
      <p className="text-sm text-neutral-400">Last updated: {UPDATED}</p>

      <p>
  These Terms of Service (“<strong>Terms</strong>”) govern your access to and use of the mobile
  applications and services published by <strong>{ORG_NAME}</strong> (“<strong>RedHoodNova</strong>,”
  “we,” “us,” or “our”), including <strong>Ignaro</strong>, <strong>Flamette</strong>, and
  <strong> Blazero</strong> (collectively, the “<strong>Apps</strong>”). By creating an account or
  using the Apps, you agree to these Terms and to our <a href="/privacy">Privacy Policy</a>.
  If you do not agree, do not use the Apps.
</p>

<p>
  RedHoodNova operates as a <strong>sole trader</strong> established in the United Kingdom.
  References to “Company”, “RedHoodNova”, “we”, “us”, or “our” mean the sole trader business of RedHoodNova.
</p>


      <div className="not-prose rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 my-6">
        <p className="m-0">
          <strong>US Residents – Arbitration & Class Action Waiver:</strong> Section 23 requires binding
          arbitration on an individual basis (with a 30-day opt-out). You waive the right to a jury trial and
          to participate in a class action.
        </p>
      </div>

      <h2>1. Eligibility (18+)</h2>
      <ul>
        <li>The Apps are intended strictly for adults 18 years of age or older (or the age of majority in your jurisdiction, if higher).</li>
        <li>Certain features (e.g., Live Rooms, camera streams, adult chat) are restricted to 18+ only.</li>
        <li>Where required by law, we may implement age-verification (self-attestation and/or third-party checks).</li>
        <li>You may not use the Apps if you are on any government sanctions/restricted list or in prohibited territories.</li>
      </ul>

      <h2>2. Account & Security</h2>
      <ul>
        <li>Provide accurate information and keep it up to date. You are responsible for all activity on your account.</li>
        <li>Do not share, sell, rent, or transfer your account or credentials.</li>
        <li>Notify us promptly of unauthorized use or a security incident via <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.</li>
        <li>We may suspend or terminate accounts to protect users, enforce these Terms, or comply with law.</li>
      </ul>

      <h2>3. Community Rules & Prohibited Conduct</h2>
      <p>You must follow our community standards (incorporated by reference). Prohibited conduct includes, without limitation:</p>
      <ul>
        <li>illegal activity; harassment; hate or extremist content; exploitation; doxxing; threats; stalking; fraud; scams; spam;</li>
        <li>sexualization of minors; non-consensual or exploitative content; trafficking or solicitation of minors;</li>
        <li>nudity/explicit content where prohibited by law or platform policy; public sexual content; voyeurism without consent;</li>
        <li>infringement or misuse of others’ intellectual property and publicity rights;</li>
        <li>reverse-engineering, scraping, automated access, or interference with the Apps; trading coins/items for real money;</li>
        <li>unsafe use (e.g., while driving or in hazardous conditions).</li>
      </ul>
      <p>We may remove content, restrict features, or ban accounts at our discretion to protect users or comply with law.</p>

      <h2>4. Subscriptions, Purchases & Billing</h2>
      <ul>
        <li>We offer paid tiers (e.g., Premium, VIP, Royal) and in-app purchases (coins, boosts, gifts). Pricing/features are shown in-app and may vary by region/store.</li>
        <li><strong>Auto-renewal:</strong> Subscriptions renew automatically until canceled in your platform store settings at least 24 hours before the current period ends.</li>
        <li><strong>Refunds:</strong> Except where required by law or store policy, purchases are final and non-refundable once delivered.</li>
        <li>Free trials and promotions may convert to paid plans if not canceled before the trial ends. Promotional codes are limited, non-transferable, and may be withdrawn.</li>
      </ul>

      <h2>5. Virtual Items: Coins, Gifts, Progress & Rewards</h2>
      <ul>
        <li>Coins, gifts, badges, levels, progress, and rewards are <strong>virtual items</strong> licensed to you on a limited, revocable, non-transferable, non-sublicensable basis for use only within the Apps; they have <strong>no cash value</strong>.</li>
        <li>We may modify, regulate, or discontinue virtual items at any time; unredeemed items may expire. Balances may be adjusted in cases of fraud, abuse, chargeback, or error.</li>
        <li>Trading or selling virtual items outside the Apps is prohibited and may lead to account action.</li>
      </ul>

      <h2>6. Live Rooms, Camera, Media & Chat</h2>
      <ul>
        <li>By streaming, uploading, or posting content, you grant {ORG_NAME} a worldwide, royalty-free, non-exclusive license to host, store, reproduce, display, adapt, translate, and distribute your content within the Apps and for operating, improving, and moderating the Apps.</li>
        <li>You are solely responsible for your content and interactions. Do not share sensitive personal data.</li>
        <li>We may use automated tools and human review to moderate streams, media, and chat and to enforce these Terms and applicable law.</li>
      </ul>

      <h2>7. Location & Discovery Features</h2>
      <p>
        Features such as <strong>Radar</strong>, <strong>Nearby</strong>, and <strong>Roam</strong> may use precise or approximate location to help discover users or content.
        You control device-level permissions; limiting permissions may affect functionality. See our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>8. User Content, System-Generated Content & AI</h2>
      <ul>
        <li>You retain ownership of your User Content subject to the license in Section 6.</li>
        <li>The Apps may provide recommendations, prompts, insights, thumbnails, or other system-generated outputs (including automated/“AI” features). We do not guarantee accuracy or fitness for any purpose.</li>
        <li>You may not use the Apps to train, test, or develop competing models/services or to extract datasets.</li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>
        The Apps, software, interfaces, designs, graphics, trademarks, and other materials are owned by {ORG_NAME} or its licensors and are protected by law. 
        Except as permitted by law, you may not copy, modify, create derivative works, distribute, decompile, or reverse-engineer any part of the Apps.
      </p>

      <h2>10. Third-Party Services</h2>
      <p>
        We may integrate third-party services (e.g., payments, age-verification, analytics, moderation). Their terms and privacy policies apply; we are not responsible for third-party acts or omissions.
      </p>

      <h2>11. Reporting & Enforcement</h2>
      <p>
        Use in-app tools to report abuse, underage users, illegal content, or IP infringement. Where legally required, we may cooperate with law enforcement.
      </p>

      <h2>12. Termination</h2>
      <ul>
        <li>You may terminate your account at any time via in-app settings.</li>
        <li>We may suspend or terminate access for breach of these Terms, suspected fraud, safety risks, inactivity, legal requirements, or at our discretion. Upon termination, licenses and virtual items may cease.</li>
      </ul>

      <h2>13. Disclaimers</h2>
      <p>
        THE APPS ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, 
        INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not guarantee uninterrupted or error-free operation.
      </p>

      <h2>14. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, {ORG_NAME} WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES,
        OR FOR LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES. Some jurisdictions do not allow certain limitations; rights may vary.
      </p>

      <h2>15. Indemnity</h2>
      <p>
        You agree to defend, indemnify, and hold {ORG_NAME} harmless from claims arising out of your use of the Apps, your content, or your breach of these Terms.
      </p>

      <h2>16. International Use</h2>
      <p>
        You are responsible for compliance with local laws. Using certain features may involve transferring your data to other countries; see our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>17. Changes to the Apps or Terms</h2>
      <p>
        We may update features or these Terms. Where required, we will provide notice of material changes. Continued use of the Apps constitutes acceptance.
      </p>

      <h2>18. App Stores</h2>
      <p>
        Purchases may be processed by Apple or Google; their terms apply. Refund requests may need to be directed to the applicable store per its policies.
      </p>

      <h2>19. Trademarks & Non-Affiliation</h2>
      <p>
        All trademarks, trade names, and logos used in connection with the Apps, including Ignaro, Flamette, and Blazero, are owned by {ORG_NAME}. 
        We are not affiliated with or endorsed by Grindr LLC, Tinder Inc., Bumble Inc., or any other third-party platform.
      </p>

      <h2>20. Governing Law & Venue</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of <strong>{ORG_JURISDICTION}</strong>, without regard to conflict of law rules. 
        Subject to Section 23 (US arbitration), courts located in <strong>{ORG_JURISDICTION}</strong> shall have exclusive jurisdiction.
      </p>

      <h2>21. Severability; Assignment; Entire Agreement</h2>
      <p>
        If any provision is unenforceable, the remaining terms remain in effect. You may not assign your rights without our consent; we may assign to an affiliate, successor, or acquirer.
        These Terms and the Privacy Policy are the entire agreement between you and {ORG_NAME}.
      </p>

      <h2>22. Contact</h2>
      <p>
        Questions about these Terms? Visit <a href={CONTACT_URL}>redhoodnova.com/contact</a> or email <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>

      <h2>23. (US Only) Binding Arbitration & Class Action Waiver</h2>
      <p>
        If you reside in the United States, any dispute or claim with {ORG_NAME} will be resolved by binding arbitration on an individual basis under the rules of a recognized arbitration provider. 
        <strong>You waive the right to a jury trial and to participate in a class action.</strong> You may opt out within 30 days of account creation by emailing{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> with the subject “Arbitration Opt-Out” and your registered email/username.
      </p>

      <h2>24. Regional Terms</h2>

      <h3>24.1 Users in the EEA (EU) & United Kingdom</h3>
      <ul>
        <li>We process personal data under GDPR/UK GDPR based on contract, legitimate interests, consent, and legal obligations.</li>
        <li>You have rights to access, rectify, delete, restrict, port, or object. See our <a href="/privacy">Privacy Policy</a> for details and how to exercise rights.</li>
        <li>Complaints may be directed to your local supervisory authority. Contact our privacy team at <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.</li>
      </ul>

      <h3>24.2 United States (including California)</h3>
      <ul>
        <li>State privacy laws (e.g., CCPA/CPRA) may provide additional rights, including the right to opt out of “sale/share” of personal information. See our Privacy Policy for mechanisms.</li>
        <li>Auto-renewal disclosures are provided at purchase; you may cancel in your store settings.</li>
      </ul>

      <h3>24.3 Brazil</h3>
      <p>
        We comply with LGPD. You may contact our data representative (“Encarregado”) via <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>

      <h3>24.4 Canada</h3>
      <p>
        We comply with PIPEDA. You may request access to or correction of your data and contact the Office of the Privacy Commissioner of Canada if concerns persist.
      </p>

      <h3>24.5 Republic of Korea</h3>
      <ul>
        <li>We comply with the Personal Information Protection Act (PIPA). Certain features may require explicit consent for international data transfers.</li>
        <li>You may request suspension of processing in addition to deletion. Where required, we will designate a local data representative.</li>
      </ul>

      <h3>24.6 Japan</h3>
      <p>
        We comply with APPI. We disclose foreign data transfer practices and provide contacts for inquiries via <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>

      <h3>24.7 Australia</h3>
      <p>
        We comply with the Privacy Act 1988. Overseas disclosures are described in our Privacy Policy.
      </p>

      <h3>24.8 India</h3>
      <p>
        We comply with the Digital Personal Data Protection Act (DPDP). Certain processing may require express consent; you may withdraw consent via in-app settings.
      </p>

      <h3>24.9 China (Mainland)</h3>
      <p>
        Where applicable, we comply with PIPL requirements for international data transfers. If we do not process/store personal data within Mainland China, usage is subject to
        international transfer terms described in our Privacy Policy.
      </p>

      <hr />

      <p className="text-xs text-neutral-500">
        These Terms are original works owned by {ORG_NAME}. Unauthorised reproduction or adaptation is prohibited. 
        Nothing in these Terms creates any partnership, employment, or agency relationship. 
      </p>
    </main>
  );
}
