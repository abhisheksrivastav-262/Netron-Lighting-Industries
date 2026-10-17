import CTASection from "../components/CTASection";
import GalleryGrid from "../components/GalleryGrid";
import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { ASSETS } from "../data/assets";
import { COMPANY } from "../data/company";
import { GALLERY } from "../data/gallery";

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery"
        description={`Photographs from ${COMPANY.name}, an LED bulb manufacturer in ${COMPANY.address.city}, ${COMPANY.address.region}. All ${GALLERY.length} images are our own.`}
        image={ASSETS.brandBoard}
      />

      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
        <div className="light-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <PageContainer className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Gallery"
            title="Our photographs"
            description={`All ${GALLERY.length} photographs below are our own. Tap any image to view it full size — nothing is cropped or stretched.`}
          />
        </PageContainer>
      </section>

      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <GalleryGrid images={GALLERY} columnsClassName="columns-1 sm:columns-2 lg:columns-3" />
        </Reveal>
      </section>

      <CTASection
        title="Want to know more about our products?"
        description="Reach out to Netron Lighting Industries and we will be glad to help."
      />
    </>
  );
}
