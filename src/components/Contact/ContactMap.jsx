import { MapPinned, Navigation, Sparkles } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-24 text-white sm:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-1/3 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-150px] right-[-150px] h-96 w-96 rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
            <Sparkles size={14} />
            Find Us
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Visit Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Office
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            We'd love to meet you in person. Visit our office or get in touch
            with us to start planning your next unforgettable celebration.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-[#111111] p-2 shadow-2xl">
          <div className="overflow-hidden rounded-[26px]">
            <iframe
              title="Shree Gurukripa Events Location"
              src="https://www.google.com/maps?q=Ujjain%2C%20Madhya%20Pradesh&output=embed"
              className="h-[400px] w-full border-0 sm:h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Location Card */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-white/[0.08] bg-[#151515] p-7 shadow-xl sm:p-8 md:flex-row">

          {/* Location Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
              <MapPinned size={24} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Shree Gurukripa Events
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Ujjain, Madhya Pradesh
              </p>
            </div>
          </div>

          {/* Directions Button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ujjain%2C%20Madhya%20Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/20"
          >
            <span>Get Directions</span>
            <Navigation size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;