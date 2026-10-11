import { useCallback, useEffect, useMemo, useState } from "react";
import fallbackImage from "../../assets/images/banner/building-02.png";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from "react-icons/fi";
import { galleryCategories, galleryImages } from "./galleryData.js";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = selectedImage
    ? filteredImages.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (!filteredImages.length || selectedIndex < 0) return;

    const previousIndex =
      (selectedIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  }, [filteredImages, selectedIndex]);

  const showNext = useCallback(() => {
    if (!filteredImages.length || selectedIndex < 0) return;

    const nextIndex = (selectedIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  }, [filteredImages, selectedIndex]);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox, showPrevious, showNext]);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <section
      id="school-gallery"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      {/* Heading */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow text-gold">Our Memories</p>

          <h2 className="h-section mt-2">
            A Glimpse of School Life
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Browse photographs from learning spaces, school activities,
            creative experiences, and moments of discovery.
          </p>
        </div>

        <p className="shrink-0 text-sm text-gray-500">
          {filteredImages.length} photographs
        </p>
      </div>

      {/* Category filters */}
      <div className="mt-7 -mx-1 overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2 px-1" aria-label="Gallery categories">
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-10 rounded-sm border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? "border-navy bg-navy text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-navy hover:text-navy"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery grid */}
      {filteredImages.length > 0 ? (
        <ul className="mt-6 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((item) => (
            <li key={item.id} className="min-w-0">
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`View image: ${item.title}`}
                className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center border border-white/40 bg-navy/40 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <FiMaximize2 aria-hidden="true" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                      {item.category}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {item.description}
                </p>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 border border-gray-200 px-5 py-12 text-center">
          <p className="text-base font-semibold text-navy">
            No photographs found
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Try selecting another gallery category.
          </p>
        </div>
      )}

      {/* Image lightbox */}
      {selectedImage && selectedIndex >= 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/30 bg-black/30 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-6 sm:top-6"
          >
            <FiX className="text-xl" />
          </button>

          {/* Previous */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-white/30 bg-black/30 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:left-6 sm:h-12 sm:w-12"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
          )}

          {/* Selected photo */}
          <div className="flex max-h-full w-full max-w-5xl flex-col">
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                onError={handleImageError}
                className="max-h-[72vh] max-w-full object-contain"
              />
            </div>

            <div className="mx-auto w-full max-w-3xl pt-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 font-serif text-xl text-white sm:text-2xl">
                {selectedImage.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/70">
                {selectedImage.description}
              </p>

              <p className="mt-3 text-xs text-white/50">
                {selectedIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-white/30 bg-black/30 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-6 sm:h-12 sm:w-12"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}