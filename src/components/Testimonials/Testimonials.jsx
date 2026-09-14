
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import testimonials from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-24 sm:py-28">

      {/* Decorative Top Line */}
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

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[-80px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-500/10
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          right-[-120px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-orange-500/10
          blur-[180px]
        "
      />

      {/* Background Pattern */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[radial-gradient(circle,#facc15_1px,transparent_1px)]
          bg-[size:35px_35px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 text-center md:mb-16">

          {/* Badge */}
          <div
            className="
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
            "
          >
            <Sparkles size={14} />
            Testimonials
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            What Our{" "}
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
              Happy Clients Say
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
            Every event tells a story. Here's what our happy clients
            say about their unforgettable experience with
            Shree Gurukripa Events.
          </p>

        </div>

        {/* Testimonials Cards */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
              <Link
                to="/gallery"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-yellow-500/40
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-yellow-400
                  transition-all
                  duration-300
                  hover:bg-yellow-500
                  hover:text-black
                  hover:shadow-lg
                  hover:shadow-yellow-500/20
                "
              >
                View Our Gallery

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

      </div>
    </section>
  );
};

export default Testimonials;
