
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const contactData = [
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    type: "phone",
    values: [
      {
        label: "+91 89640 16541",
        href: "tel:+918964016541",
      },
      {
        label: "+91 90095 21075",
        href: "tel:+919009521075",
      },
    ],
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    type: "email",
    values: [
      {
        label: "shreegurukripaevents@gmail.com",
        href: "mailto:shreegurukripaevents@gmail.com",
      },
    ],
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    type: "text",
    values: [
      {
        label: "Ujjain, Madhya Pradesh",
      },
    ],
  },
  {
    icon: <Clock size={24} />,
    title: "Working Hours",
    type: "text",
    values: [
      {
        label: "Mon - Sun | 9:00 AM - 9:00 PM",
      },
    ],
  },
];

const ContactInfo = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white sm:py-28">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-150px] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
            <Sparkles size={14} />
            Get In Touch
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            We'd Love To{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have questions about your event? Contact our team and we'll help
            you plan the perfect celebration.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactData.map((item) => (
            <div
              key={item.title}
              className="group rounded-[28px] border border-white/[0.08] bg-[#151515] p-7 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-yellow-500/5"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-white">
                {item.title}
              </h3>

              {/* Values */}
              <div className="space-y-2">
                {item.values.map((value) =>
                  value.href ? (
                    <a
                      key={value.href}
                      href={value.href}
                      className="block break-words text-sm leading-6 text-gray-400 transition-colors duration-200 hover:text-yellow-400"
                    >
                      {value.label}
                    </a>
                  ) : (
                    <p
                      key={value.label}
                      className="text-sm leading-6 text-gray-400"
                    >
                      {value.label}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
            Follow Us
          </h3>

          <div className="flex justify-center gap-3 sm:gap-4">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:h-12 sm:w-12"
            >
              <FaFacebookF size={17} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:h-12 sm:w-12"
            >
              <FaInstagram size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918964016541"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:h-12 sm:w-12"
            >
              <FaWhatsapp size={19} />
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:h-12 sm:w-12"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
