import type { Metadata } from "next";
import Link from "next/link";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy | Essence Interiors",
  description:
    "How Essence Interiors collects, uses, and protects personal information submitted through our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc title="Privacy Policy" crumb="PRIVACY POLICY">
      <p>
        Essence Interiors (“we”, “us”, “our”) operates{" "}
        <a href="https://www.essenceinteriors.co.in">www.essenceinteriors.co.in</a> from our studio at ESSENCE
        INTERIORS, HUDA Layout, Gopanpalle, Nallagandla, Telangana 500019, India.
        This policy explains what personal information we collect through the website and how we use it.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information you choose to send us through our enquiry and consultation forms, including:</p>
      <ul>
        <li>Name, phone number, and email address</li>
        <li>City, property or project type, preferred date and time</li>
        <li>Any message or project details you write in the form</li>
      </ul>
      <p>
        If you call, WhatsApp, or email us, we also hold the details you share in that conversation. We do not
        ask you to create an account, and we do not collect payment details on this website.
      </p>

      <h2>How we use it</h2>
      <p>We use this information only to:</p>
      <ul>
        <li>Respond to enquiries and consultation requests</li>
        <li>Call or email you about your project</li>
        <li>Prepare estimates and follow-up after a consultation</li>
        <li>Improve how the website and our services work</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>How it is stored and shared</h2>
      <p>
        Form submissions are emailed to our studio inbox (
        <a href="mailto:info@essenceinteriors.co.in">info@essenceinteriors.co.in</a>) using our email provider.
        Access is limited to people at Essence Interiors who need it to handle your request.
      </p>
      <p>We may share information only when:</p>
      <ul>
        <li>You ask us to, or it is needed to deliver a service you requested</li>
        <li>The law requires it</li>
        <li>A vendor who processes email or hosting for us needs it to operate those systems</li>
      </ul>

      <h2>Cookies and third parties</h2>
      <p>
        This website uses only what is needed to load pages, fonts, and the Google Map on the Contact page.
        Google Maps is provided by Google and may set its own cookies under Google’s privacy policy. Links to
        Instagram, Facebook, YouTube, and Pinterest take you to those sites, which have their own policies.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and consultation details for as long as needed to handle your request and for a
        reasonable period afterwards (typically up to 24 months), unless a longer period is required for an
        ongoing project or by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You may ask us to access, correct, or delete the personal information we hold about you, or to stop
        contacting you about a request. Write to us at the email or address below. We will respond within a
        reasonable time, subject to any legal obligations to retain records.
      </p>

      <h2>Children</h2>
      <p>This website is intended for adults making enquiries about interior design services.</p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date at the top of this page will
        change when we do.
      </p>

      <h2>Contact</h2>
      <p>
        Essence Interiors
        <br />
        CH. Sudheera
        <br />
        ESSENCE INTERIORS, HUDA Layout, Gopanpalle, Nallagandla, Telangana 500019
        <br />
        Email: <a href="mailto:info@essenceinteriors.co.in">info@essenceinteriors.co.in</a>
        <br />
        Phone: <a href="tel:+919666199943">+91 9666199943</a>
      </p>
      <p>
        See also our <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    </LegalDoc>
  );
}
