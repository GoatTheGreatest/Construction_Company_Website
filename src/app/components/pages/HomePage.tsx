import { HeroSection } from '../sections/HeroSection';
import { StatsSection } from '../sections/StatsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { IndustriesSection } from '../sections/IndustriesSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { ContactCTASection } from '../sections/ContactCTASection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactCTASection />
    </div>
  );
}
