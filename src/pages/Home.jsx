import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Packages from "../components/Packages/Packages";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import CTA from "../components/CTA/CTA";
import ContactPreview from "../components/ContactPreview/ContactPreview";

const Home = () => {
  return (
    <>
      <Hero />

      <Services />

      <Packages />

      <Gallery />

      <WhyChooseUs />

      <Testimonials />

      <CTA />

      <ContactPreview />
    </>
  );
};

export default Home;