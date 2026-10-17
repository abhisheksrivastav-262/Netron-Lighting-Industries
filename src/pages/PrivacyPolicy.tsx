import PageContainer from "../components/PageContainer";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { COMPANY } from "../data/company";

const LAST_UPDATED = new Date().toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={`How ${COMPANY.name} handles the information you provide when contacting us.`}
      />

      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
        <div className="light-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <PageContainer className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Legal"
            title="Privacy Policy"
            description="How we handle the information you share when you contact Netron Lighting Industries."
          />
        </PageContainer>
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-midnight/80 sm:text-base">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Last updated: {LAST_UPDATED}
          </p>

          <div>
            <h2 className="text-xl font-semibold text-midnight">
              Information you provide
            </h2>
            <p className="mt-3">
              When you use the contact form on this website, you may provide
              your name, phone number, the type of enquiry and a message. This
              information is used only to understand and respond to your
              enquiry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-midnight">
              How the contact form works
            </h2>
            <p className="mt-3">
              This website does not operate an enquiry database or server-side
              form processing. When you submit the form, your details are
              composed into a message and opened in WhatsApp so that you can
              send it to us directly. Unless you send that WhatsApp message,
              the information you typed is not transmitted to us and is not
              stored by this website.
            </p>
            <p className="mt-3">
              When you choose to contact us by phone or WhatsApp, the handling
              of that conversation is governed by the terms and privacy policy
              of your phone or messaging service provider.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-midnight">
              Cookies and tracking
            </h2>
            <p className="mt-3">
              We have not added advertising trackers or analytics cookies to
              this website. If this changes in future, this policy will be
              updated to describe what is collected and why.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-midnight">
              How long we keep information
            </h2>
            <p className="mt-3">
              Because the website itself does not store your form details, there
              is no website-held record to retain. If you contact us by
              WhatsApp or phone, we may keep that conversation for as long as
              needed to handle your enquiry and any resulting business
              relationship.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-midnight">
              Your choices
            </h2>
            <p className="mt-3">
              You can choose not to submit the form and instead contact us by
              phone. If you would like us to delete details you have shared with
              us, please contact us and we will do our best to help.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-midnight">Contact us</h2>
            <p className="mt-3">
              For any question about this policy or your information, contact{" "}
              {COMPANY.name} at{" "}
              <a
                href={COMPANY.phoneDial}
                className="font-semibold text-electric hover:text-midnight"
              >
                {COMPANY.phoneDisplay}
              </a>{" "}
              or visit us at {COMPANY.addressLine}.
            </p>
          </div>

          <p className="rounded-xl bg-mist px-4 py-3 text-xs text-muted">
            This policy is provided as plain, good-faith information. It is not
            a statement of certification or a legal guarantee.
          </p>
        </div>
      </section>
    </>
  );
}
