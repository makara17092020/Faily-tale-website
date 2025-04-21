import { useState } from "react";
import favorite from "../../assets/favorite.png";
import pig from "../../assets/box.png";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";
import box5 from "../../assets/box5.png";
import box6 from "../../assets/box6.png";
import box7 from "../../assets/box7.png";

const stories = [
  {
    title: "An Alice's ",
    image: pig,
    description:
      "An inquisitive girl finds herself falling into a new land, Wonderland. What strange and wonderful things will pop ....",
  },
  {
    title: "A Cinderella",
    image: box1,
    description:
      "As the kingdom prepares for a much anticipated Royal Ball, will the poor servant girl Cinderella be able to attend? ",
  },
  {
    title: "Puss In Boots",
    image: box2,
    description:
      "Three brothers are given gifts from their father. The first two brothers are gifted a windmill and the third brother is gifted a cat!",
  },
  {
    title: "Three Little Pigs",
    image: box3,
    description:
      "Three little pigs build houses from straw, sticks and bricks. Which house can keep them safe from the big bad wolf?",
  },
  {
    title: "Aladdin",
    image: box4,
    description:
      "A nasty magician locks Aladdin in a cave. But why? And how on earth did he get out?",
  },
  {
    title: "The Biscuit Thief",
    image: box5,
    description:
      "A biscuit-loving boy called Tom promises that he never lies. So how can he prove who’s been stealing the family’s biscuits ...",
  },
  {
    title: "The Wonderful Wizard of Oz",
    image: box6,
    description:
      "During a terrible storm, Dorothy and her little dog Toto are whisked away to a very strange and magical land called Oz.",
  },
  {
    title: "Candy King",
    image: box7,
    description:
      "A boy who eats sweets morning, noon and night. So many , in fact, some very strange things start happening. The big question is ...",
  },
];

export default function FavoriteStories() {
  const [loved, setLoved] = useState(Array(stories.length).fill(false));
  const toggleLove = (index: number) => {
    setLoved((prev) => {
      const newLoved = [...prev];
      newLoved[index] = !newLoved[index];
      return newLoved;
    });
  };

  return (
    <div className="min-h-screen bg-green-100">
      {/* Banner */}
      <div className="relative w-full h-100 bg-cover bg-center">
        <img
          src={favorite}
          alt="Favorite Stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">FAVORITE STORY</h2>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-100 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{story.title}</h3>
              {/* Text inside the box */}
              <p className="text-sm text-gray-600 mt-2">{story.description}</p>
              <button
                onClick={() => toggleLove(index)}
                className={`mt-2 px-4 py-2 rounded ${
                  loved[index]
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {loved[index] ? "Favorite ❤️" : "Favorite ♡"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
