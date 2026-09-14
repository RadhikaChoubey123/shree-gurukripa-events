import InquiryHero from "../components/Inquiry/InquiryHero";
import InquiryInfo from "../components/Inquiry/InquiryInfo";
import InquiryForm from "../components/Inquiry/InquiryForm";

const Inquiry = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      {/* Hero */}
      <InquiryHero />

      {/* Inquiry Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left */}
          <InquiryInfo />

          {/* Right */}
          <InquiryForm />

        </div>
      </section>

    </main>
  );
};

export default Inquiry;

