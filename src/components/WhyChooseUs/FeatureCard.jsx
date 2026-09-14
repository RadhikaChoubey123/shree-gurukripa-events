import { CheckCircle } from "lucide-react";

const FeatureCard = ({ title, description }) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#111111]
        p-7
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-500/40
        hover:shadow-2xl
        hover:shadow-yellow-500/10
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
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          border
          border-yellow-500/20
          bg-yellow-500/10
          text-yellow-400
          shadow-inner
          transition-all
          duration-300
          group-hover:bg-yellow-400
          group-hover:text-black
        "
      >
        <CheckCircle className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3
        className="
          text-xl
          font-bold
          text-white
          transition-colors
          duration-300
          group-hover:text-yellow-400
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          text-sm
          leading-7
          text-gray-400
        "
      >
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
