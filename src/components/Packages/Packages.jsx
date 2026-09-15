import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Loader2,
} from "lucide-react";

const API_URL ="https://shree-gurukripa-events-backend.onrender.com/api/packages";

const Packages = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch packages");
      }

      return response.json();
    },
  });

  const packages = data?.packages || [];
  const featuredPackages = packages.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-500/10 blur-[150px]" />

      {/* Subtle Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(circle,#facc15_1px,transparent_1px)] [background-size:35px_35px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          {/* Decorative Line */}
          <div className="mb-6 flex justify-center">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          </div>

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[3px] text-yellow-400 sm:text-xs">
            <Sparkles size={14} />
            Signature Packages
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
            Celebrate With{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Elegance
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Choose from our thoughtfully designed event packages,
            created to make your celebration memorable and stress-free.
          </p>

        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center py-16">
            <Loader2
              size={32}
              className="animate-spin text-yellow-400"
            />
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 py-12 text-center">
            <p className="text-sm text-red-400">
              Failed to load packages.
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading &&
          !isError &&
          featuredPackages.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500">
                No packages available at the moment.
              </p>
            </div>
          )}

        {/* Packages Grid */}
        {!isLoading &&
          !isError &&
          featuredPackages.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {featuredPackages.map((item) => (
                <div
                  key={item._id}
                  className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#121212] p-4 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/60 hover:shadow-xl hover:shadow-yellow-500/10"
                >

                  {/* Image */}
                  <div className="relative h-60 overflow-hidden rounded-2xl">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Category */}
                    {item.category && (
                      <span className="absolute left-3 top-3 rounded-lg bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-wider text-yellow-400 backdrop-blur">
                        {item.category}
                      </span>
                    )}

                  </div>

                  {/* Content */}
                  <div className="px-1 pb-2 pt-5 text-center">

                    <h3 className="font-serif text-xl font-bold text-yellow-400">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>

                    {/* Explore */}
                    <Link
                      to={`/packages/${item._id}`}
                      className="group/btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-sm font-semibold text-yellow-400 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
                    >
                      Explore Package

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </Link>

                  </div>

                </div>
              ))}

            </div>
          )}

        {/* View All */}
        <div className="mt-14 text-center">

          <Link
            to="/packages"
            className="group inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-7 py-3.5 text-sm font-semibold text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:shadow-yellow-500/20"
          >
            View All Packages

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Packages;