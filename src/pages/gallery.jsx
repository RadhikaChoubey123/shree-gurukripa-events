import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { getGallery } from "../api/galleryApi";
import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryCard from "../components/Gallery/GalleryCard";
import GalleryModal from "../components/Gallery/GalleryModal";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // =========================
  // FETCH GALLERY
  // =========================
  const { data, isLoading, isError } = useQuery({
    queryKey: ["gallery"],
    queryFn: getGallery,
  });

  const gallery = data?.gallery || [];

  // =========================
  // CATEGORIES
  // =========================
  const categories = [
    "All",
    ...new Set(
      gallery
        .map((item) => item.category)
        .filter(Boolean)
    ),
  ];

  // =========================
  // FILTER GALLERY
  // =========================
  const filteredGallery =
    selectedCategory === "All"
      ? gallery
      : gallery.filter(
          (item) => item.category === selectedCategory
        );

  // =========================
  // CURRENT PHOTO
  // =========================
  const currentPhoto = filteredGallery[currentIndex];

  // =========================
  // OPEN PHOTO
  // =========================
  const handleViewPhoto = (item) => {
    const index = filteredGallery.findIndex(
      (photo) => photo._id === item._id
    );

    setCurrentIndex(index >= 0 ? index : 0);
    setIsOpen(true);
  };

  // =========================
  // CLOSE MODAL
  // =========================
  const handleClose = () => {
    setIsOpen(false);
  };

  // =========================
  // PREVIOUS
  // =========================
  const handlePrevious = () => {
    if (filteredGallery.length <= 1) return;

    setCurrentIndex((prev) =>
      prev === 0
        ? filteredGallery.length - 1
        : prev - 1
    );
  };

  // =========================
  // NEXT
  // =========================
  const handleNext = () => {
    if (filteredGallery.length <= 1) return;

    setCurrentIndex((prev) =>
      prev === filteredGallery.length - 1
        ? 0
        : prev + 1
    );
  };

  // =========================
  // KEYBOARD CONTROLS
  // =========================
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (e.key === "ArrowLeft") {
        handlePrevious();
      }

      if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, filteredGallery.length]);

  // =========================
  // RESET ON CATEGORY CHANGE
  // =========================
  useEffect(() => {
    setCurrentIndex(0);
    setIsOpen(false);
  }, [selectedCategory]);

  return (
    <main className="overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <GalleryHero />

      {/* =====================================================
          GALLERY CONTENT
      ===================================================== */}
      <section className="relative pt-4 pb-24 md:pt-6 md:pb-28">

        {/* Background Pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[radial-gradient(circle,#facc15_1px,transparent_1px)]
            bg-[size:35px_35px]
          "
        />

        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            top-1/3
            -left-32
            h-96
            w-96
            rounded-full
            bg-yellow-500/10
            blur-[180px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-1/3
            -right-32
            h-96
            w-96
            rounded-full
            bg-orange-500/10
            blur-[180px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

          {/* =================================================
              HEADING
          ================================================= */}
          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[4px]
                text-yellow-400
                sm:text-sm
              "
            >
              Our Collection
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                text-white
                sm:text-4xl
                md:mt-5
                md:text-6xl
              "
            >
              Browse Event Categories
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-sm
                leading-7
                text-gray-400
                sm:text-base
                sm:leading-8
              "
            >
              Explore beautiful moments from our weddings,
              celebrations, decorations, and special events.
            </p>

            {/* Decorative Divider */}
            <div
              className="
                mx-auto
                mt-7

                h-1
                w-28
                bg-gradient-to-r
                from-transparent
                via-yellow-500
                to-transparent
                md:mt-8
              "
            />

          </div>

          {/* =================================================
              LOADING
          ================================================= */}
          {isLoading && (
            <div className="py-20 text-center">

              <div
                className="
                  mx-auto
                  mb-4
                  h-10
                  w-10
                  animate-spin
                  rounded-full
                  border-2
                  border-yellow-400/30
                  border-t-yellow-400
                "
              />

              <p className="text-gray-400">
                Loading gallery...
              </p>

            </div>
          )}

          {/* =================================================
              ERROR
          ================================================= */}
          {isError && (
            <div className="py-20 text-center">

              <div
                className="
                  mx-auto
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-red-500/20
                  bg-red-500/10
                "
              >
                <Sparkles
                  size={26}
                  className="text-red-400"
                />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Unable to Load Gallery
              </h3>

              <p className="mt-2 text-gray-500">
                Please try again later.
              </p>

            </div>
          )}

          

          {/* =================================================
              EMPTY GALLERY
          ================================================= */}
          {!isLoading &&
            !isError &&
            gallery.length === 0 && (
              <div className="py-20 text-center">

                <div
                  className="
                    mx-auto
                    mb-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-yellow-500/20
                    bg-yellow-500/10
                  "
                >
                  <Sparkles
                    size={28}
                    className="text-yellow-400"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Gallery Coming Soon
                </h3>

                <p className="mt-2 text-gray-500">
                  Our beautiful event memories will appear here.
                </p>

              </div>
            )}

          {/* =================================================
              GALLERY GRID
          ================================================= */}
          {!isLoading &&
            !isError &&
            filteredGallery.length > 0 && (
              <div
                className="
                  grid
                  grid-cols-1
                  gap-6
                  sm:grid-cols-2
                  md:gap-8
                  lg:grid-cols-3
                "
              >
                {filteredGallery.map((item) => (
                  <GalleryCard
                    key={item._id}
                    item={item}
                    onView={handleViewPhoto}
                  />
                ))}
              </div>
            )}

          {/* =================================================
              NO RESULTS
          ================================================= */}
          {!isLoading &&
            !isError &&
            gallery.length > 0 &&
            filteredGallery.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-gray-500">
                  No photos found in this category.
                </p>
              </div>
            )}

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="pb-20 md:pb-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-gradient-to-r
              from-yellow-600
              via-amber-500
              to-orange-500
              p-8
              md:p-16
            "
          >

            <div
              className="
                absolute
                inset-0
                opacity-10
                bg-[radial-gradient(circle,#fff_1px,transparent_1px)]
                bg-[size:35px_35px]
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                items-center
                justify-between
                gap-8
                md:gap-10
                lg:flex-row
              "
            >

              <div className="text-center lg:text-left">

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-black
                    md:text-5xl
                  "
                >
                  Like What You See? Let's Plan Yours!
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    leading-8
                    text-black/80
                  "
                >
                  Get in touch with us to design a breathtaking
                  event custom-tailored to your style and needs.
                </p>

              </div>

              <Link
                to="/inquiry"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-3
                  rounded-xl
                  bg-black
                  px-9
                  py-4
                  font-bold
                  text-white
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                Book Now
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          GALLERY MODAL
      ===================================================== */}
      {isOpen && currentPhoto && (
        <GalleryModal
          image={currentPhoto}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrevious}
          currentIndex={currentIndex}
          totalImages={filteredGallery.length}
        />
      )}

    </main>
  );
};

export default Gallery;

