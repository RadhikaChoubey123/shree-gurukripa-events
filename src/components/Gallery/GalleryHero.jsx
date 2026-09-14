import { Sparkles } from "lucide-react";
import galleryBanner from "../../assets/images/hero2.jpeg";

const GalleryHero = () => {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden sm:min-h-[580px] lg:min-h-[680px]">

      {/* Background Image */}
      <img
        src={galleryBanner}
        alt="Shree Gurukripa Events Gallery"
        className="
          absolute inset-0
          h-full w-full
          scale-105
          object-cover
        "
      />

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/30
          via-black/45
          to-black
        "
      />

      {/* Side Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/50
          via-transparent
          to-black/50
        "
      />

      {/* Golden Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-yellow-500/10
          blur-[120px]
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-24
          h-80
          w-80
          rounded-full
          bg-orange-500/10
          blur-[140px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          -translate-y-4
          px-5
          text-center
          sm:-translate-y-8
          sm:px-8
          lg:-translate-y-12
        "
      >

        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-400/25
            bg-white/[0.07]
            px-4
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[2.5px]
            text-yellow-300
            shadow-lg
            shadow-black/20
            backdrop-blur-md
            sm:px-5
            sm:text-xs
            sm:tracking-[3px]
          "
        >
          <Sparkles size={14} />
          Our Portfolio
        </div>

        {/* Heading */}
        <h1
          className="
            mt-6
            text-4xl
            font-bold
            leading-[1.05]
            tracking-tight
            text-white
            sm:mt-7
            sm:text-5xl
            md:text-6xl
            lg:mt-8
            lg:text-7xl
          "
        >
          Explore Our

          <span
            className="
              mt-2
              block
              bg-gradient-to-r
              from-yellow-200
              via-amber-400
              to-orange-500
              bg-clip-text
              text-transparent
            "
          >
            Masterpieces
          </span>
        </h1>

        {/* Decorative Divider */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-7">

          <span className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-500/60 sm:w-16" />

          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/40" />

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-500/60 sm:w-16" />

        </div>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-gray-300
            sm:mt-6
            sm:text-base
            sm:leading-8
            md:text-lg
          "
        >
          A visual journey through our most elegant weddings,
          celebrations, and beautifully crafted events.
        </p>

      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

    </section>
  );
};

export default GalleryHero;