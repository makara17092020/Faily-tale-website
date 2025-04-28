import { Link } from "react-router";
import bookCover1 from "../assets/adventure 1.png";
import heart from "../assets/heart-icon.png";

// Define the props type
type CardProps = {
  story: any;
};

const Card = ({ story }: CardProps) => {
  return (
    <section>
      <Link to="/detail" className="">
        <div className="w-[18rem] h-[38rem] rounded-[1.5rem] shadow-2xl mb-5">
          <div className="relative w-full h-[75%]">
            {/* Use story data instead of hardcoded one */}
            <img
              className="w-full h-full rounded-tl-2xl rounded-tr-2xl"
              src={story.attributes?.coverImage?.url || bookCover1} // fallback if no image
              alt={story.attributes?.title || "Book Cover"}
            />
            <div className="absolute top-4 right-3 w-8 h-7.5 flex items-center justify-center rounded-full bg-transparent hover:bg-[#F40808] transition-colors duration-200">
              <img className="w-6 h-6" src={heart} alt="icon" />
            </div>
          </div>

          <div className="w-full h-[25%]">
            <h3 className="font-bold text-3xl p-3 text-[#FFD700] hover:text-[#983FFD]">
              {story.attributes?.title || "No Title"}
            </h3>
            <p className="text-xl ps-3 text-black">
              {story.attributes?.description || "No Description"}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
