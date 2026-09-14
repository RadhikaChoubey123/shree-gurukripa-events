
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PackageCard = ({ packageItem }) => {
  return (
    <article
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10 bg-white/[0.04]
        backdrop-blur-sm
        transition-all duration-500
        hover:-translate-y-2
        hover:border-yellow-500/40
        hover:shadow-2xl hover:shadow-black/40
      "
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={packageItem.image}
          alt={packageItem.title}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="
            font-serif text-xl font-bold
            text-white transition-colors duration-300
            group-hover:text-yellow-400
          "
        >
          {packageItem.title}
        </h3>

        <p
          className="
            mt-3 line-clamp-2
            text-sm leading-6 text-gray-400
          "
        >
          {packageItem.description}
        </p>

        {/* Bottom link */}

        <Link
          to={`/packages/${packageItem._id}`}
          className="
    mt-6 inline-flex items-center justify-center gap-2
    rounded-xl
    bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500
    px-5 py-3
    text-sm font-bold text-black
    transition-all duration-300
    hover:scale-105
    hover:shadow-lg hover:shadow-yellow-500/20
  "
        >
          Explore Package
          <ArrowUpRight
            size={17}
            className="
      transition-transform duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
          />
        </Link>

      </div>
    </article>
  );
};

export default PackageCard;

