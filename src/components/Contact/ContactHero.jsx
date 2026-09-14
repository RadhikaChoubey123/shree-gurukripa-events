
import { Sparkles } from "lucide-react";
import contactBanner from "../../assets/images/hero1.jpeg";

const ContactHero = () => {
  return (
    <section className="relative flex min-h-[600px] h-[78vh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={contactBanner}
        alt="Shree Gurukripa Events Contact"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Extra Dark Bottom Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Atmospheric Glows */}
      <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-yellow-400 backdrop-blur-md">
          <Sparkles size={15} />
          Contact Us
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Let's Start Your{" "}
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Dream Celebration
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          Have questions or want to plan your next event? Our team is here
          to help you create unforgettable memories with thoughtful planning
          and beautiful celebrations.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
