import type { Metadata } from "next";
import Link from "next/link";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms & Conditions | Essence Interiors",
  description:
    "Terms of use for the Essence Interiors website, consultation requests, and related design services.",
};

export default function TermsPage() {
  return (
    <LegalDoc title="Terms & Conditions" crumb="TERMS & CONDITIONS">
      <p>
        These terms govern your use of{" "}
        <a href="https://www.essenceinteriors.co.in">www.essenceinteriors.co.in</a> and any enquiry or
        consultation you send through it. By using the site, you agree to them. If you do not agree, please do
        not use the site.
      </p>
      <p>
        The website is operated by ESSENCE INTERIORS, HUDA Layout, Gopanpalle, Nallagandla,
        Telangana 500019, India.
      </p>

      <h2>The website</h2>
      <p>
        Content on this site — project photographs, descriptions, finishes, and process notes — is for general
        information. It is not a quote, specification, or contract. Images may include completed work, styling,
        or representative spaces and can differ from what is delivered on a future project.
      </p>
      <p>
        We may change, pause, or take down pages without notice. We do not guarantee that the site will always
        be available, error-free, or free of technical issues.
      </p>

      <h2>Enquiries and consultations</h2>
      <p>
        Submitting a form, calling, or messaging us is a request to talk — not a booking of works and not an
        acceptance of a project. We may accept, decline, or reschedule a consultation depending on availability
        and the nature of the work.
      </p>
      <p>
        Any estimate, mood board, or suggestion shared after a consultation is indicative unless we confirm it
        in a separate written proposal or agreement. Fees, timelines, materials, and scope for a project are
        agreed only in that written document.
      </p>

      <h2>Services</h2>
      <p>
        Interior design, styling, and related services are provided subject to a separate client agreement.
        Website terms do not replace that agreement. Where the two conflict, the signed client agreement
        prevails for that project.
      </p>

      <h2>Your information</h2>
      <p>
        You confirm that information you submit (name, contact details, project notes) is accurate and that you
        are authorised to share it. How we handle personal data is described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Essence Interiors name, logo, site design, text, and photographs are owned by us or used with
        permission. You may not copy, republish, or use them for commercial purposes without our written
        consent.
      </p>
      <p>
        Drawings, concepts, and specifications we prepare for a client remain our intellectual property until
        (and except as) a signed agreement says otherwise. You may not use them with another contractor or on
        another site without our written consent.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Misuse forms, or submit false or harmful content</li>
        <li>Attempt to disrupt or probe the website</li>
        <li>Use the site or our materials in a way that infringes anyone’s rights</li>
      </ul>

      <h2>Third-party links and maps</h2>
      <p>
        The site links to social profiles and embeds a Google Map. Those services are outside our control. Your
        use of them is governed by their own terms.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by Indian law, Essence Interiors is not liable for indirect, incidental,
        or consequential loss arising from use of this website, including reliance on information published
        here or inability to access the site. Nothing in these terms limits liability that cannot be limited by
        law, including for fraud or personal injury caused by negligence.
      </p>
      <p>
        Project delivery, workmanship, and on-site outcomes are covered only by the relevant client agreement,
        not by these website terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts in Hyderabad, Telangana have exclusive
        jurisdiction over disputes arising from the website or these terms.
      </p>

      <h2>Changes</h2>
      <p>
        We may revise these terms from time to time. Continued use of the site after a change means you accept
        the updated terms. The “Last updated” date at the top of this page will change when we revise them.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href="mailto:info@essenceinteriors.co.in">info@essenceinteriors.co.in</a> or{" "}
        <a href="tel:+919666199943">+91 9666199943</a>.
      </p>
      <p>
        See also our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalDoc>
  );
}
