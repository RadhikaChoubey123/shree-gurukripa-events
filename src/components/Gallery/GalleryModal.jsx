import React, { useEffect } from "react";
import {
  X,
  ArrowLeft,
} from "lucide-react";

const GalleryModal = ({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}) => {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && totalImages > 1) onNext();
      if (e.key === "ArrowLeft" && totalImages > 1) onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose, onNext, onPrev, totalImages]);

  if (!image) return null;

  return (
    <div
      className="
        fixed inset-0
        z-[9999]
        flex
        h-screen
        w-screen
        items-center
        justify-center
        overflow-hidden
        bg-black/95
        backdrop-blur-xl
      "
      onClick={onClose}
    >
      {/* ================= BLURRED BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={image.image}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            scale-110
            object-cover
            opacity-20
            blur-3xl
          "
        />

        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* ================= TOP NAVIGATION BAR ================= */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-50
          flex
          items-center
          justify-between
          px-4
          py-4
          sm:px-7
          sm:py-6
          lg:px-10
        "
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-black/40
            px-3.5
            py-2
            text-xs
            font-medium
            text-gray-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-yellow-400/30
            hover:bg-white/10
            hover:text-white
            sm:px-5
            sm:py-3
            sm:text-sm
          "
        >
          <ArrowLeft
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          <span className="hidden sm:inline">
            Back to Gallery
          </span>

          <span className="sm:hidden">
            Gallery
          </span>
        </button>

        {/* Image Counter */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            rounded-full
            border
            border-white/10
            bg-black/40
            px-4
            py-1.5
            text-[10px]
            font-semibold
            tracking-[2px]
            text-gray-300
            backdrop-blur-xl
            sm:px-5
            sm:py-2.5
            sm:text-xs
          "
        >
          <span className="text-yellow-400">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>

          <span className="mx-1.5 text-gray-600">
            /
          </span>

          <span>
            {String(totalImages).padStart(2, "0")}
          </span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close gallery"
          className="
            group
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/40
            text-gray-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-yellow-400/40
            hover:bg-yellow-400
            hover:text-black
            sm:h-12
            sm:w-12
          "
        >
          <X
            size={20}
            className="
              transition-transform
              duration-300
              group-hover:rotate-90
            "
          />
        </button>
      </div>

      {/* ================= MAIN IMAGE ================= */}
      <div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          px-4
          pb-20
          pt-16
          sm:px-20
          sm:pb-28
          sm:pt-24
        "
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={image.image}
          src={image.image}
          alt="Event gallery"
          className="
            block
            max-h-[72vh]
            max-w-full
            select-none
            rounded-xl
            object-contain
            sm:max-h-[78vh]
            sm:rounded-2xl
            lg:max-h-[82vh]
          "
        />
      </div>

      {/* ================= BOTTOM BRAND LINE ================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          left-1/2
          z-40
          flex
          -translate-x-1/2
          items-center
          gap-2
          whitespace-nowrap
          text-[8px]
          font-semibold
          uppercase
          tracking-[2.5px]
          text-gray-500
          sm:bottom-5
          sm:text-[10px]
          sm:tracking-[3px]
        "
      >
        <span className="h-px w-6 bg-white/10 sm:w-12" />

        Shree Gurukripa Events

        <span className="h-px w-6 bg-white/10 sm:w-12" />
      </div>
    </div>
  );
};

export default GalleryModal;