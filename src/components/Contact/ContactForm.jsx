
import { useState } from "react";
import {
  SendHorizonal,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    try {
      // Contact message API yahan connect karna hai
      // Example:
      // await fetch("http://localhost:5000/api/contact", {...})

      console.log("Contact Message:", formData);

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. We will get back to you soon.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-150px] h-96 w-96 rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
            <Sparkles size={14} />
            Send Message
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let's Talk About Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Event
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a question or need assistance? Send us a message and our
            team will get back to you as soon as possible.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-white/[0.08] bg-[#111111] p-6 shadow-2xl sm:p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/20"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/20"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What would you like to ask?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/20"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-[#181818] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/20"
            />
          </div>

          {/* Success */}
          {status.type === "success" && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
              <p>{status.message}</p>
            </div>
          )}

          {/* Error */}
          {status.type === "error" && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              <AlertCircle size={20} className="mt-0.5 shrink-0" />
              <p>{status.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/20"
          >
            Send Message
            <SendHorizonal size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

