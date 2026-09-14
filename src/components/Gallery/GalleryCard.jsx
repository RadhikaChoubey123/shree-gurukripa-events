import { Eye } from "lucide-react";

const GalleryCard = ({ item, onView, featured = false }) => {
  return (
    <article
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#111111]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-yellow-500/30
        hover:shadow-2xl
        hover:shadow-yellow-500/10
        sm:rounded-3xl
      "
    >
      {/* Image */}
      <div
        className={`
          relative
          h-full
          min-h-[300px]
          overflow-hidden
          bg-[#080808]
          sm:min-h-[320px]
          ${featured ? "lg:min-h-[500px]" : "lg:min-h-[240px]"}
        `}
      >
        <img
          src={item.image}
          alt="Event gallery"
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/45
          "
        />

        {/* View Photo Button */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
          "
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onView(item);
            }}
            className="
              pointer-events-auto
              inline-flex
              translate-y-3
              items-center
              gap-2
              rounded-xl
              bg-yellow-400
              px-5
              py-2.5
              text-xs
              font-bold
              text-black
              opacity-0
              shadow-xl
              shadow-yellow-500/20
              transition-all
              duration-300
              hover:scale-105
              hover:bg-yellow-300
              group-hover:translate-y-0
              group-hover:opacity-100
              sm:px-6
              sm:py-3
              sm:text-sm
            "
          >
            <Eye size={17} />
            View Photo
          </button>
        </div>
      </div>
    </article>
  );
};

export default GalleryCard;