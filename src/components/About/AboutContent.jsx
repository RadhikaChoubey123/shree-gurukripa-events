import { Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  const features = [
    "Customized Event Planning",
    "Beautiful Event Decoration",
    "Professional Event Services",
    "Flexible Packages",
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative">

        {/* Top label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-yellow-500" />

          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
            <Sparkles size={14} />
            About Us
          </div>
        </div>

        {/* Heading */}
        <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          We Create
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Moments Worth Remembering
          </span>
        </h2>

        {/* Description */}
        <div className="mt-7 max-w-3xl space-y-4">
          <p className="text-base leading-8 text-gray-400 sm:text-lg">
            At{" "}
            <span className="font-semibold text-yellow-400">
              Shree Gurukripa Events
            </span>
            , we create beautiful and memorable celebrations with thoughtful
            planning, creative decoration and smooth event execution.
          </p>

          <p className="text-base leading-8 text-gray-500 sm:text-lg">
            From weddings and engagements to birthdays, corporate events and
            special occasions, we bring your ideas together to create an
            experience that feels truly special.
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-yellow-500/40 via-white/10 to-transparent" />

        {/* Features */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                <CheckCircle2
                  size={19}
                  className="text-yellow-400"
                />
              </div>

              <span className="text-sm font-medium text-gray-300 sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-medium text-gray-300">
              Planning something special?
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Let’s turn your vision into a beautiful celebration.
            </p>
          </div>

          <Link
            to="/inquiry"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20"
          >
            Plan Your Event
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>

      </div>
    </div>
  );
};

export default AboutContent;

