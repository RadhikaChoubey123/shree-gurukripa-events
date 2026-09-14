import { Sparkles } from "lucide-react";
import HeroButtons from "./HeroButtons";


const HeroContent = () => {
  return (
    <div
      className="
        relative z-10 mx-auto flex min-h-screen max-w-7xl
        items-center px-5 py-28
        sm:px-8
        lg:px-10
      "
    >
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="w-full max-w-4xl">
        {/* Welcome badge */}
        <div
          className="
            mb-6 inline-flex items-center gap-2
            rounded-full border border-yellow-400/30
            bg-black/25 px-4 py-2
            text-[10px] font-medium uppercase
            tracking-[3px] text-yellow-300
            backdrop-blur-md
            sm:text-xs sm:tracking-[4px]
          "
        >
          <Sparkles size={15} className="shrink-0 animate-pulse" />

          <span>Welcome To Shree Gurukripa Events</span>
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-4xl
            font-serif text-4xl font-bold
            leading-[1.08] tracking-tight text-white
            drop-shadow-2xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Designing Your Dreams Into{" "}
          <span
            className="
              bg-gradient-to-r
              from-yellow-200 via-yellow-400 to-orange-500
              bg-clip-text text-transparent
            "
          >
            Reality
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-6 max-w-2xl
            text-sm leading-7 text-gray-200
            sm:text-base sm:leading-8
            md:text-lg
          "
        >
          Creating beautiful and memorable celebrations with thoughtful
          planning, elegant décor, and unforgettable experiences.
        </p>

        {/* Event types */}
        <div
          className="
            mt-5 flex max-w-3xl flex-wrap items-center
            gap-x-3 gap-y-2
            text-xs text-gray-300
            sm:text-sm
          "
        >
          <span className="text-yellow-400">Weddings</span>
          <span className="text-white/30">•</span>

          <span>Engagements</span>
          <span className="text-white/30">•</span>

          <span className="text-yellow-400">Birthdays</span>
          <span className="text-white/30">•</span>

          <span>Anniversaries</span>
          <span className="text-white/30">•</span>

          <span className="text-yellow-400">Traditional Ceremonies</span>
        </div>

        {/* Buttons */}
        <HeroButtons />

      </div>
    </div>
  );
};

export default HeroContent;