
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
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
        flex flex-col h-full
      "
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="
            font-serif text-xl font-bold
            text-white transition-colors duration-300
            group-hover:text-yellow-400
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3 line-clamp-2
            text-sm leading-6 text-gray-400
            min-h-[48px]
          "
        >
          {service.description}
        </p>

        {/* Button */}
        <div className="mt-auto pt-6">
          <Link
            to={`/services/${service._id}`}
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl
              border border-yellow-500/50
              bg-yellow-500/10
              px-5 py-3
              text-sm font-semibold
              text-yellow-400
              transition-all duration-300
              hover:bg-yellow-500
              hover:text-black
              hover:border-yellow-500
            "
          >
            View Details

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
      </div>
    </article>
  );
};

export default ServiceCard;

