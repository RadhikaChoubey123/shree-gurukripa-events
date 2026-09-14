
import { Link } from "react-router-dom";
import {
  CalendarDays,
  PhoneCall,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-28">

      {/* Background Glows */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-1/2
          h-96
          w-96
          -translate-y-1/2
          rounded-full
          bg-yellow-500/10
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          right-[-120px]
          h-96
          w-96
          rounded-full
          bg-orange-500/10
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-[#0d0d0d]
            p-7
            shadow-2xl
            sm:p-10
            lg:rounded-[36px]
            lg:p-14
          "
        >

          {/* Top Glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/4
              top-0
              h-32
              w-96
              bg-yellow-500/10
              blur-[100px]
            "
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

            {/* ================= LEFT ================= */}

            <div className="lg:col-span-7">

              {/* Badge */}
              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-yellow-500/20
                  bg-yellow-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-yellow-400
                "
              >
                <Sparkles size={14} />
                Let's Create Something Special
              </div>

              {/* Heading */}
              <h2
                className="
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Let's Make Your Event{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-yellow-300
                    via-amber-400
                    to-orange-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Truly Memorable
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-400
                  sm:text-base
                  sm:leading-8
                "
              >
                From elegant weddings to joyful celebrations,
                we bring your ideas to life with creative planning,
                beautiful decoration, and seamless execution.
              </p>

              {/* Trust Points */}
              <div
                className="
                  mt-7
                  grid
                  gap-4
                  border-t
                  border-white/[0.08]
                  pt-6
                  sm:grid-cols-2
                "
              >

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-yellow-400"
                  />
                  <span className="text-sm text-gray-300">
                    Experienced Event Team
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-yellow-400"
                  />
                  <span className="text-sm text-gray-300">
                    Customized Event Themes
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-yellow-400"
                  />
                  <span className="text-sm text-gray-300">
                    Complete Event Management
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-yellow-400"
                  />
                  <span className="text-sm text-gray-300">
                    Smooth & Timely Execution
                  </span>
                </div>

              </div>
            </div>

            {/* ================= RIGHT ================= */}

            <div className="lg:col-span-5">

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-yellow-500/20
                  bg-[#111111]
                  p-7
                  text-center
                  shadow-xl
                  sm:p-8
                "
              >

                {/* Inner Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-50px]
                    top-[-50px]
                    h-40
                    w-40
                    rounded-full
                    bg-yellow-500/10
                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <h3 className="text-2xl font-bold text-white">
                    Ready to Plan Your Event?
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-400">
                    Tell us about your event and we'll help you
                    create a celebration that feels truly special.
                  </p>

                  {/* Buttons */}
                  <div className="mt-7 space-y-3">

                    {/* Primary Button */}
                    <Link
                      to="/inquiry"
                      className="
                        group/btn
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2.5
                        rounded-xl
                        bg-yellow-400
                        px-6
                        py-3.5
                        text-sm
                        font-bold
                        text-black
                        shadow-lg
                        shadow-yellow-500/10
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-yellow-300
                        hover:shadow-xl
                        hover:shadow-yellow-500/20
                      "
                    >
                      <CalendarDays size={19} />

                      <span>Book an Inquiry</span>
                    </Link>

                    {/* Secondary Button */}
                    <a
                      href="tel:+918964016541"
                      className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2.5
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-gray-200
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-yellow-500/40
                        hover:bg-yellow-400
                        hover:text-black
                      "
                    >
                      <PhoneCall size={19} />

                      <span>Call Us</span>
                    </a>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
