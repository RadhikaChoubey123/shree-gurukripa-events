import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../components/Services/ServiceCard";
import { Sparkles, ArrowRight, Loader2, } from "lucide-react";
import { Link } from "react-router-dom";
import hero3 from "../assets/images/hero3.jpeg";

const API_URL = "https://shree-gurukripa-events-backend.onrender.com/api/services";

const AllServices = () => {

  // GET SERVICES

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }

      return response.json();
    },
  });

  const services = data?.services || [];

  return (
    <main className="bg-black text-white">

      {/* ================= Hero ================= */}

      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${hero3})` }}
        >
          <div className="absolute inset-0 bg-black/85"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs uppercase tracking-[3px] mb-8 backdrop-blur-md">
            <Sparkles size={14} />
            Excellence In Every Celebration
          </div>

          {/* Heading */}

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Crafting

            <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">

              Extraordinary Events

            </span>

          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-300 leading-8">

            From luxury weddings and birthdays to corporate gatherings,
            we deliver unforgettable celebrations with creativity,
            elegance and flawless execution.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/inquiry"
              className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition duration-300"
            >
              Book Your Event
            </Link>

            <Link
              to="/gallery"
              className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              View Gallery
            </Link>

          </div>

        </div>

      </section>

      {/* ================= Services ================= */}

      <section className="relative py-28">

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#facc15_1px,transparent_1px)] bg-[size:35px_35px]"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-5">
              Explore Our Premium Services
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 mt-6 leading-8">

              Whether you're planning an intimate celebration or a grand
              occasion, our dedicated team ensures every detail is executed
              perfectly to create unforgettable memories.

            </p>

            <div className="w-28 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-8"></div>

          </div>

          {/* ================= LOADING ================= */}

          {isLoading && (
            <div className="flex items-center justify-center py-20">

              <Loader2
                size={32}
                className="text-yellow-400 animate-spin"
              />

            </div>
          )}

          {/* ================= ERROR ================= */}

          {isError && (
            <div className="text-center py-20">

              <p className="text-red-400">
                Failed to load services.
              </p>

              <p className="text-gray-600 text-sm mt-2">
                Please try again later.
              </p>

            </div>
          )}

          {/* ================= NO SERVICES ================= */}

          {!isLoading &&
            !isError &&
            services.length === 0 && (
              <div className="text-center py-20">

                <p className="text-gray-400 text-lg">
                  No services available at the moment.
                </p>

              </div>
            )}

          {/* ================= SERVICE CARDS ================= */}

          {!isLoading &&
            !isError &&
            services.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {services.map((service, index) => (

                  <ServiceCard
                    key={service._id}
                    service={service}
                    index={index}
                  />

                ))}

              </div>
            )}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-500 p-10 md:p-16">

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:35px_35px]"></div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">

              <div>

                <h2 className="text-3xl md:text-5xl font-bold text-black">

                  Ready To Plan Your Dream Event?

                </h2>

                <p className="mt-5 max-w-2xl text-black/80 leading-8">

                  Contact us today and let our experienced team create a
                  memorable celebration tailored perfectly for you.

                </p>

              </div>

              <Link
                to="/inquiry"
                className="inline-flex items-center gap-3 bg-black text-white px-9 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default AllServices;