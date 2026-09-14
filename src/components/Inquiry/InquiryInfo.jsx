import { CheckCircle2 } from "lucide-react";

const features = [
  "Customized Event Planning",
  "Creative Decoration & Setup",
  "Flexible Packages",
  "Smooth Event Execution",
];

const InquiryInfo = () => {
  return (
    <div className="pt-2 lg:pt-8">

      {/* Small Label */}
      <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
        Let’s Plan Your Event
      </p>

      {/* Heading */}
      <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        Tell Us About Your{" "}
        <span className="text-yellow-400">
          Celebration
        </span>
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
        Share your event details with us. We’ll understand your requirements
        and help you plan a celebration that fits your vision and occasion.
      </p>

      {/* Features */}
      <div className="mt-8 space-y-4">
        {features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="shrink-0 text-yellow-400"
            />

            <span className="text-sm text-gray-300 sm:text-base">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-l border-yellow-500/40 pl-4">
        <p className="text-sm leading-6 text-gray-500">
          The more details you share, the better we can understand your
          event requirements.
        </p>
      </div>

    </div>
  );
};

export default InquiryInfo;

