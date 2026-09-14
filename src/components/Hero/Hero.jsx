import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <HeroSlider />
      <HeroContent />
    </section>
  );
};

export default Hero;