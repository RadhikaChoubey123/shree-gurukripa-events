import FeatureCard from "./FeatureCard";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Experienced Team",
    description:
      "Professional planners with years of experience in managing successful events.",
  },
  {
    title: "Creative Decoration",
    description:
      "Luxury themes, floral decoration, lighting and customized event setups.",
  },
  {
    title: "Affordable Packages",
    description:
      "Flexible packages designed to fit different budgets without compromising quality.",
  },
  {
    title: "On-Time Execution",
    description:
      "Every event is planned and executed on schedule for a smooth experience.",
  },
  {
    title: "Premium Quality",
    description:
      "High-quality decoration materials, catering and entertainment services.",
  },
  {
    title: "Dedicated Support",
    description:
      "Quick assistance before, during and after your event whenever needed.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-28">

      {/* Background Glow Accents */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-1/2
          h-96
          w-96
          -translate-y-1/2
          rounded-full
          bg-yellow-500/10
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          right-[-120px]
          h-96
          w-96
          rounded-full
          bg-orange-500/10
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Decorative Line */}
        <div className="mb-6 flex justify-center">
          <div
            className="
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-yellow-500
              to-transparent
            "
          />
        </div>

        {/* Section Header */}
        <div className="mb-14 text-center md:mb-16">

          {/* Badge */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-yellow-400
              backdrop-blur-md
            "
          >
            <Sparkles size={14} />
            <span>Why Choose Us</span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            We Make Every Event{" "}
            <span
              className="
                bg-gradient-to-r
                from-yellow-400
                via-amber-500
                to-orange-500
                bg-clip-text
                text-transparent
              "
            >
              Extraordinary
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            "
          >
            From planning to execution, we ensure every celebration
            is beautifully organized, stress-free, and memorable.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

