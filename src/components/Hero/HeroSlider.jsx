import { useEffect, useState } from "react";

import hero1 from "../../assets/images/hero1.jpeg";
import hero2 from "../../assets/images/hero2.jpeg";
import hero3 from "../../assets/images/hero3.jpeg";

const images = [hero1, hero2, hero3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${index === current
              ? "scale-100 opacity-100"
              : "scale-110 opacity-0"
            }`}
        >
          <img
            src={img}
            alt={`Shree Gurukripa Events ${index + 1}`}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Bottom cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

      {/* Left readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
    </div>
  );
};

export default HeroSlider;