
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 text-white">
      {/* Decorative Top Line */}
      <div className="mb-6 flex justify-center">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>

      {/* Atmospheric Background Glows */}
      <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-yellow-400 backdrop-blur-md">
            <Sparkles size={15} />
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let's Start{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Planning
            </span>
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-gray-400 sm:text-lg">
            We'd love to hear about your upcoming celebration. Contact us
            today and let's create unforgettable memories together.
          </p>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* Left Column */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
            {/* Address Card */}
            <div className="group flex flex-col justify-between rounded-[28px] border border-white/5 bg-[#0e0e0e] p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/40">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                  <MapPin size={22} />
                </div>

                <h3 className="mb-1 text-base font-bold text-white">
                  Our Location
                </h3>

                <p className="text-sm font-light leading-relaxed text-gray-400">
                  Ujjain, Madhya Pradesh
                </p>
              </div>
            </div>

            {/* Phone Card - 2 Numbers */}
            <div className="group flex flex-col justify-between rounded-[28px] border border-white/5 bg-[#0e0e0e] p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/40">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                  <Phone size={22} />
                </div>

                <h3 className="mb-2 text-base font-bold text-white">
                  Phone Numbers
                </h3>

                <div className="space-y-1.5">
                  <a
                    href="tel:+918964016541"
                    className="block text-sm font-light text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    +91 8964016541
                  </a>

                  <a
                    href="tel:+919009521075"
                    className="block text-sm font-light text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    +91 9009521075
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group flex flex-col justify-between rounded-[28px] border border-white/5 bg-[#0e0e0e] p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/40">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                  <Mail size={22} />
                </div>

                <h3 className="mb-1 text-base font-bold text-white">
                  Email Address
                </h3>

                <a
                  href="mailto:shreegurukripaevents@gmail.com"
                  className="block truncate text-sm font-light text-gray-400 transition-colors hover:text-yellow-400"
                >
                 shreegurukripaevents@gmail.com
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="group flex flex-col justify-between rounded-[28px] border border-white/5 bg-[#0e0e0e] p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/40">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                  <Clock size={22} />
                </div>

                <h3 className="mb-1 text-base font-bold text-white">
                  Working Hours
                </h3>

                <p className="text-sm font-light text-gray-400">
                  Mon - Sun : 9 AM - 9 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[32px] border border-yellow-500/30 bg-[#0e0e0e] p-2 shadow-2xl">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Ujjain&output=embed"
                className="h-full w-full rounded-[24px] opacity-90 contrast-125 invert-[90%] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-3.5 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/20"
          >
            <span>Visit Full Contact Page</span>
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ContactPreview;
