import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { getGallery } from "../../api/galleryApi";
import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["gallery"],
    queryFn: getGallery,
  });

  const gallery = data?.gallery || [];

  // Show only 4 images on Home
  const featuredImages = gallery.slice(0, 5);

  // Open selected image
  const handleViewPhoto = (item) => {
    const index = featuredImages.findIndex(
      (image) => image._id === item._id
    );

    setCurrentIndex(index >= 0 ? index : 0);
    setIsOpen(true);
  };

  // Close modal
  const handleClose = () => {
    setIsOpen(false);
  };

  // Previous image
  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredImages.length - 1 : prev - 1
    );
  };

  // Next image
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === featuredImages.length - 1 ? 0 : prev + 1
    );
  };

  const currentPhoto = featuredImages[currentIndex];

  return (
    <>
      <section className="relative overflow-hidden bg-[#090909] py-20 sm:py-24 lg:py-28">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/5 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-orange-500/5 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center lg:mb-14">
            <div className="flex justify-center mb-6">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </div>
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
              "
            >
              <Sparkles size={14} />
              Our Gallery
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Moments We{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-yellow-300
                  via-amber-400
                  to-orange-500
                  bg-clip-text
                  text-transparent
                "
              >
                Created
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Take a look at some of our memorable weddings,
              celebrations, and beautifully crafted events.
            </p>
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="
                    h-[280px]
                    animate-pulse
                    rounded-2xl
                    bg-white/5
                    sm:h-[320px]
                    lg:h-[380px]
                  "
                />
              ))}
            </div>
          )}

          {/* Error */}
          {isError && (
            <div className="py-10 text-center">
              <p className="text-gray-400">
                Unable to load gallery at the moment.
              </p>
            </div>
          )}

          {/* Featured Gallery */}
          {!isLoading && !isError && (
            <>
              {featuredImages.length > 0 ? (
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-4
                    lg:grid-rows-[240px_240px]
                    lg:h-[500px]
                  "
                >
                  {featuredImages.map((item, index) => (
                    <div
                      key={item._id}
                      className={
                        index === 0
                          ? "sm:col-span-2 sm:row-span-2"
                          : "sm:col-span-1 sm:row-span-1"
                      }
                    >
                      <GalleryCard
                        item={item}
                        onView={handleViewPhoto}
                        featured={index === 0}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <p className="text-gray-500">
                    No gallery images available yet.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Complete Gallery Button */}
          {!isLoading && !isError && gallery.length > 0 && (
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
                View Complete Gallery

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
          )}
        </div>
      </section>

      {/* Image Modal */}
      {isOpen && currentPhoto && (
        <GalleryModal
          image={currentPhoto}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrevious}
          currentIndex={currentIndex}
          totalImages={featuredImages.length}
        />
      )}
    </>
  );
};

export default Gallery;
