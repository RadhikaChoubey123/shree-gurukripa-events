import { Sparkles, ArrowDown } from "lucide-react";
import inquiryBanner from "../../assets/images/hero1.jpeg";

const InquiryHero = () => {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden sm:min-h-[600px]">

      {/* Background Image */}
      <img
        src={inquiryBanner}
        alt="Event decoration"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

      {/* Decorative Glow */}
      <div className="absolute left-[-80px] top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-60px] h-80 w-80 rounded-full bg-orange-500/10 blur-[130px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-10 text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-yellow-400 backdrop-blur-md">
          <Sparkles size={14} />
          Book Your Event
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Let’s Create Your
          <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Dream Celebration
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          Tell us about your event and let our team help you plan a
          celebration that matches your vision, style and occasion.
        </p>

        

      </div>
    </section>
  );
};

export default InquiryHero;

