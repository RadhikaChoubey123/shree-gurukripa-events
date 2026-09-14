import { Link } from "react-router-dom";

const  HeroButtons=()=> {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <Link
        to="/inquiry"
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition"
      >
        Book Now
      </Link>

      <Link
        to="/gallery"
        className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full transition"
      >
        View Gallery
      </Link>
    </div>
  );
}

export default HeroButtons;