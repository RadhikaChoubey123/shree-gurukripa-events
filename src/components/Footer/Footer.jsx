import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      {/* Atmospheric Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div className="space-y-5">
            <div>
              <img
                src={logo}
                alt="Shree Gurukripa Events"
                className="mb-4 h-12 w-25 rounded-2xl object-cover shadow-lg"
              />

              <h2 className="text-2xl font-black tracking-tight">
                Shree{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Gurukripa
                </span>
              </h2>
            </div>

            <p className="text-sm font-light leading-relaxed text-gray-400">
              Creating unforgettable weddings, birthdays, corporate events
              and premium celebrations with creativity, elegance and
              perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold tracking-wide text-white">
              Quick Links

              <span className="absolute -bottom-1 left-0 h-[2px] w-8 bg-yellow-400" />
            </h3>

            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/Packages"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Gallery
                </Link>
              </li>

              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold tracking-wide text-white">
              Our Services

              <span className="absolute -bottom-1 left-0 h-[2px] w-8 bg-yellow-400" />
            </h3>

            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li className="cursor-pointer transition-colors duration-200 hover:text-yellow-400">
                Wedding Planning
              </li>

              <li className="cursor-pointer transition-colors duration-200 hover:text-yellow-400">
                Birthday Events
              </li>

              <li className="cursor-pointer transition-colors duration-200 hover:text-yellow-400">
                Corporate Events
              </li>

              <li className="cursor-pointer transition-colors duration-200 hover:text-yellow-400">
                Decoration
              </li>

              <li className="cursor-pointer transition-colors duration-200 hover:text-yellow-400">
                Photography
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold tracking-wide text-white">
              Contact Info

              <span className="absolute -bottom-1 left-0 h-[2px] w-8 bg-yellow-400" />
            </h3>

            <div className="space-y-4 text-sm">

              {/* Phone 1 */}
              <div className="flex items-start gap-3">
                <Phone
                  className="mt-1 shrink-0 text-yellow-400"
                  size={16}
                />

                <a
                  href="tel:+918964016541"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  +91 89640 16541
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-start gap-3">
                <Phone
                  className="mt-1 shrink-0 text-yellow-400"
                  size={16}
                />

                <a
                  href="tel:+919009521075"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  +91 90095 21075
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  className="mt-1 shrink-0 text-yellow-400"
                  size={16}
                />

                <a
                  href="mailto:shreegurukripaevents@gmail.com"
                  className="truncate text-gray-400 transition-colors hover:text-yellow-400"
                >
               shreegurukripaevents@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 shrink-0 text-yellow-400"
                  size={16}
                />

                <span className="text-gray-400">
                  Ujjain, Madhya Pradesh
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">


              {/* Instagram */}
              <a
                href="https://www.instagram.com/shree_gurukripa_events?utm_source=qr&stkn=MW1rMXVuenFxYWVjaw%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              >
                <FaInstagram size={16} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918964016541"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-center text-xs font-light text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Shree Gurukripa Events.
            All Rights Reserved.
          </p>

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/30"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
