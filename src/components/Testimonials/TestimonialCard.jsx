import { Star, Quote, Sparkles } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const rating = Math.min(testimonial.rating || 5, 5);

  return (
    <article
      className="
        group
        relative
        flex
        min-h-[360px]
        flex-col
        justify-between
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-[#0c0c0c]
        p-7
        shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-500/40
        hover:shadow-yellow-500/10
        sm:rounded-[32px]
        sm:p-8
      "
    >
      {/* Top Hover Line */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-yellow-500
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Decorative Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-30px]
          top-[-30px]
          h-40
          w-40
          rounded-full
          bg-yellow-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        {/* Event + Quote */}
        <div className="mb-6 flex items-start justify-between gap-4">

          <span
            className="
              inline-flex
              max-w-[75%]
              items-center
              gap-1.5
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-3.5
              py-1.5
              text-[11px]
              font-semibold
              tracking-wider
              text-yellow-400
              sm:px-4
            "
          >
            <Sparkles size={12} />
            <span className="truncate">
              {testimonial.event}
            </span>
          </span>

          <Quote
            size={30}
            className="
              shrink-0
              text-yellow-500/25
              transition-colors
              duration-300
              group-hover:text-yellow-400/70
            "
          />

        </div>

        {/* Review */}
        <p
          className="
            text-sm
            leading-7
            text-gray-300
            sm:text-base
            sm:leading-8
          "
        >
          "{testimonial.review}"
        </p>

        {/* Rating */}
        <div className="mt-6 flex items-center gap-1.5">
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
              className="
                text-yellow-400
                drop-shadow-[0_0_7px_rgba(250,204,21,0.35)]
              "
            />
          ))}
        </div>

      </div>

      {/* Client Footer */}
      <div
        className="
          relative
          z-10
          mt-8
          flex
          items-center
          justify-between
          border-t
          border-white/[0.08]
          pt-6
        "
      >

        <div className="min-w-0">
          <h3
            className="
              truncate
              text-base
              font-bold
              tracking-wide
              text-white
              transition-colors
              duration-300
              group-hover:text-yellow-400
              sm:text-lg
            "
          >
            {testimonial.name}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Verified Client
          </p>
        </div>

        {/* Verified Icon */}
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            text-sm
            font-bold
            text-yellow-400
            transition-all
            duration-300
            group-hover:border-yellow-500
            group-hover:bg-yellow-500
            group-hover:text-black
          "
        >
          ✓
        </div>

      </div>
    </article>
  );
};

export default TestimonialCard;

