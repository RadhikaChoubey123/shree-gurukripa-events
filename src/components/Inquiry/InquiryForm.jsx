
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { submitInquiry } from "../../api/inquiryApi";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  date: "",
  location: "",
  guests: "",
  budget: "",
  message: "",
};

const InquiryForm = () => {
  const [searchParams] = useSearchParams();

  const selectedPackage = searchParams.get("package") || "";
  const selectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    ...initialFormData,
    package: selectedPackage,
    service: selectedService,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inquiryMutation = useMutation({
    mutationFn: submitInquiry,

    onSuccess: () => {
      setFormData({
        ...initialFormData,
        package: selectedPackage,
        service: selectedService,
      });
    },

    onError: (error) => {
      console.error("Inquiry submission error:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    inquiryMutation.mutate(formData);
  };

  const inputStyle =
    "mt-2 w-full rounded-lg border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-500/60";

  const labelStyle =
    "text-sm font-medium text-gray-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8"
    >
      {/* Header */}
      <div className="mb-7">
        <h3 className="text-2xl font-bold text-white">
          Event Inquiry
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Fill in the details below to get started.
        </p>
      </div>

      {/* Selected Package / Service */}
      {(selectedPackage || selectedService) && (
        <div className="mb-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-3">
          <p className="mb-1 text-xs uppercase tracking-wider text-yellow-400">
            Selected
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-300">
            {selectedPackage && (
              <span>
                Package:{" "}
                <strong className="text-white">
                  {selectedPackage}
                </strong>
              </span>
            )}

            {selectedService && (
              <span>
                Service:{" "}
                <strong className="text-white">
                  {selectedService}
                </strong>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid gap-5 sm:grid-cols-2">

        {/* Name */}
        <div>
          <label className={labelStyle}>
            Full Name <span className="text-yellow-400">*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputStyle}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelStyle}>
            Phone Number <span className="text-yellow-400">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputStyle}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelStyle}>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        {/* Event Type */}
        <div>
          <label className={labelStyle}>
            Event Type <span className="text-yellow-400">*</span>
          </label>

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className={`${inputStyle} cursor-pointer`}
          >
            <option value="" className="bg-[#111111]">
              Select event type
            </option>

            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Decoration">Decoration</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className={labelStyle}>
            Event Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        {/* Location */}
        <div>
          <label className={labelStyle}>
            Event Location
          </label>

          <input
            type="text"
            name="location"
            placeholder="City / Venue"
            value={formData.location}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        {/* Guests */}
        <div>
          <label className={labelStyle}>
            Expected Guests
          </label>

          <input
            type="number"
            name="guests"
            min="1"
            placeholder="Approx. guest count"
            value={formData.guests}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        {/* Budget */}
        <div>
          <label className={labelStyle}>
            Estimated Budget
          </label>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputStyle} cursor-pointer`}
          >
            <option value="">Select budget</option>
            <option value="₹50,000 - ₹1 Lakh">
              ₹50,000 - ₹1 Lakh
            </option>
            <option value="₹1 Lakh - ₹5 Lakh">
              ₹1 Lakh - ₹5 Lakh
            </option>
            <option value="₹5 Lakh+">
              ₹5 Lakh+
            </option>
          </select>
        </div>

      </div>

      {/* Message */}
      <div className="mt-5">
        <label className={labelStyle}>
          Message
        </label>

        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your event, theme or special requirements..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputStyle} resize-none`}
        />
      </div>

      {/* Success */}
      {inquiryMutation.isSuccess && (
        <div className="mt-5 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
          Your inquiry has been submitted successfully! 🎉
        </div>
      )}

      {/* Error */}
      {inquiryMutation.isError && (
        <div className="mt-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
          {inquiryMutation.error?.message ||
            "Something went wrong. Please try again."}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={inquiryMutation.isPending}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {inquiryMutation.isPending ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Inquiry
            <Send size={17} />
          </>
        )}
      </button>
    </form>
  );
};

export default InquiryForm;

