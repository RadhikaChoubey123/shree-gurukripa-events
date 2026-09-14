
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Sparkles,
  CalendarDays,
  Heart,
  Star,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/services";

const ServiceDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["service", id],

    queryFn: async () => {
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch service");
      }

      return response.json();
    },

    enabled: !!id,
  });

  const service = data?.service;

  /* ================= LOADING ================= */

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
            <Loader2
              size={28}
              className="animate-spin text-yellow-400"
            />
          </div>

          <p className="text-sm text-gray-500">
            Loading service...
          </p>
        </div>
      </main>
    );
  }

  /* ================= ERROR ================= */

  if (isError || !service) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#080808] px-6 text-center text-white">

        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
          <Sparkles
            size={30}
            className="text-yellow-400"
          />
        </div>

        <h1 className="mt-7 font-serif text-3xl font-bold sm:text-4xl">
          Service Not Found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
          This service is currently unavailable. Please explore
          our other services.
        </p>

        <Link
          to="/services"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
        >
          <ArrowLeft size={17} />
          Back to Services
        </Link>

      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[72vh] overflow-hidden">

        {/* Background Image */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/35 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

        {/* Decorative Glow */}
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10">

          <div className="max-w-4xl">

            {/* Back */}
            <Link
              to="/services"
              className="mb-7 inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-x-1 hover:text-yellow-400"
            >
              <ArrowLeft size={17} />
              Back to Services
            </Link>

            {/* Category */}
            <div className="mb-5">

              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-yellow-300 backdrop-blur-md sm:text-xs">
                <Sparkles size={14} />
                {service.category || "Our Service"}
              </span>

            </div>

            {/* Title */}
            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base sm:leading-8">
              {service.description}
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO STRIP
      ===================================================== */}

      <section className="border-y border-white/[0.06] bg-[#0c0c0c]">

        <div className="mx-auto grid max-w-7xl sm:grid-cols-3">

          {/* Item */}
          <div className="flex items-center gap-4 border-b border-white/[0.06] px-6 py-6 sm:border-b-0 sm:border-r sm:px-8">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <Heart
                size={20}
                className="text-yellow-400"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Thoughtful Planning
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Every detail matters
              </p>
            </div>

          </div>

          {/* Item */}
          <div className="flex items-center gap-4 border-b border-white/[0.06] px-6 py-6 sm:border-b-0 sm:border-r sm:px-8">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <Star
                size={20}
                className="text-yellow-400"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Elegant Experience
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Beautifully designed
              </p>
            </div>

          </div>

          {/* Item */}
          <div className="flex items-center gap-4 px-6 py-6 sm:px-8">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <CalendarDays
                size={20}
                className="text-yellow-400"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Personalized Events
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Designed for you
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DETAILS
      ===================================================== */}

      <section className="relative overflow-hidden py-20 sm:py-28">

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[150px]" />

        {/* Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:radial-gradient(circle,#facc15_1px,transparent_1px)] [background-size:35px_35px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20">

            {/* =================================================
                LEFT
            ================================================= */}

            <div>

              {/* Section Heading */}
              <div className="mb-8">

                <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
                  About This Service
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Everything You Need
                </h2>

                <div className="mt-5 h-px w-24 bg-gradient-to-r from-yellow-500 to-transparent" />

              </div>

              {/* Description */}
              <p className="max-w-3xl text-sm leading-8 text-gray-400 sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              {service.features?.length > 0 && (
                <div className="mt-12">

                  <div className="mb-7">

                    <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
                      What's Included
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                      Designed Around Your Celebration
                    </h3>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    {service.features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
                        >

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 transition-all duration-300 group-hover:bg-yellow-500/15">
                            <Check
                              size={18}
                              className="text-yellow-400"
                            />
                          </div>

                          <span className="text-sm leading-6 text-gray-300">
                            {feature}
                          </span>

                        </div>
                      )
                    )}

                  </div>
                </div>
              )}

            </div>

            {/* =================================================
                BOOKING CARD
            ================================================= */}

            <div>

              <div className="lg:sticky lg:top-24">

                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#101010] p-7 shadow-2xl shadow-black/40 sm:p-8">

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-yellow-500/10 blur-[90px]" />

                  <div className="relative">

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                      <Sparkles
                        size={21}
                        className="text-yellow-400"
                      />
                    </div>

                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
                      Plan Your Event
                    </p>

                    <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Ready to make it special?
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      Tell us about your event and our team will
                      help you turn your ideas into a beautiful
                      celebration.
                    </p>

                    {/* Divider */}
                    <div className="my-7 h-px bg-white/[0.08]" />

                    {/* Service */}
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">

                      <p className="text-[10px] uppercase tracking-[2px] text-gray-600">
                        Selected Service
                      </p>

                      <p className="mt-2 text-sm font-semibold text-white">
                        {service.title}
                      </p>

                    </div>

                    {/* CTA */}
                    <Link
                      to={`/inquiry?service=${encodeURIComponent(
                        service.title
                      )}`}
                      className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-4 text-sm font-semibold text-black shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20"
                    >
                      Plan This Service

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    <p className="mt-4 text-center text-xs text-gray-600">
                      Let's create something memorable together.
                    </p>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="pb-24 sm:pb-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-500 p-8 shadow-2xl shadow-yellow-500/10 sm:p-10 md:p-14">

            {/* Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:35px_35px]" />

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />

            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

              <div className="max-w-2xl">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-black/60">
                  Let's Create Something Beautiful
                </p>

                <h2 className="font-serif text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
                  Have Your Dream Celebration In Mind?
                </h2>

                <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base">
                  Share your ideas with us and let's turn your
                  vision into a beautiful and unforgettable event.
                </p>

              </div>

              <Link
                to="/inquiry"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900"
              >
                Plan Your Event

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ServiceDetails;

