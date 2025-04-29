<<<<<<< HEAD
import pic1 from "../assets/detail1.png"
import pic2 from "../assets/detail2.png"
import pic3 from "../assets/detail3.png"
import pic4 from "../assets/detail4.png"
import pic5 from "../assets/detail5.png"

const Detail = () => {
    return (
      <>
        <div>
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-400 w-16"></div>
            <h2 className="mx-4 text-lg font-bold">The Three Little Pigs</h2>
            <div className="border-t border-gray-400 w-16"></div>
          </div>
        </div>
        <div className="rounded-xl max-w-4xl overflow-hidden mx-auto shadow-lg border">
          <img src={pic1} alt="Image" className="w-full h-[40rem] object-cover" />
        </div>
        <div className="flex items-center mb-4  "></div>
        <div className="p-2">
          <div className="flex items-center">
            <audio controls className="max-w-4xl mx-auto">
              <source type="audio/mp3" src="" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <section className="p-6 max-w-4xl mx-auto">
          <div className="mb-6 space-y-4 text-lg text-gray-800">
            <p>
              Once upon a time, an old mother pig had three piglets.
              Unfortunately, she didn’t have enough food to keep them, so she sent
              them out to seek their own luck. When the first pig went out, he met
              a man with a bundle of straw. The pig said, “Sir, please give me the
              straw so I can build a house.” The man gave him the straw, and the
              pig built a house out of straw.
            </p>
            <p>
              When the first pig went out, he met a man with a bundle of straw.
              The pig said,{" "}
              <em>“Sir, please give me the straw so I can build a house.”</em> The
              man gave him the straw, and the pig built a house out of straw.
            </p>
          </div>
  
          <div className="rounded-xl overflow-hidden shadow-lg border">
            <img src={pic2} alt="Image" className="w-full h-[40rem] object-cover" />
          </div>
        </section>
        <section className="p-6 max-w-4xl mx-auto">
          <div className="mb-6 space-y-4 text-lg text-gray-800">
            <p>
              Soon after, a big bad wolf passed by. He knocked on the door and
              said, “Hey, little pig, let me in.” The pig replied, “No, no, not by
              the hair on my chinny chin chin.” “Then I’ll huff and I’ll puff and
              I’ll blow your house in,” said the wolf. And so he did. He huffed
              and he puffed, and he blew the door down. The little pig quickly ran
              away to his brother. His brother, the second pig, had met a man with
              a bundle of sticks. The pig said, “Sir, please give me the sticks so
              I can build a house.” The man gave him the sticks, and the pig built
              a house out of sticks. He was sitting in his house feeling proud
              when he heard a knock on the door. It was his little brother. “The
              wolf blew my house down! Please can I stay here?”. “Of course, my
              house is made of sticks, it’s safe for sure!” his brother said. Then
              the big bad wolf came by the house made of sticks and said, “Hey,
              little pig, let me in.” “No, no, not by the hair on my chinny chin
              chin,” replied the pig. “Then I’ll huff and I’ll puff and I’ll blow
              your house in,” said the wolf. And so he did. He huffed and he
              puffed, and he blew the door down. The two pigs quickly ran away to
              their other brother.
            </p>
          </div>
  
          <div className="rounded-xl overflow-hidden shadow-lg border">
            <img src={pic3} alt="Image" className="w-full h-[40rem] object-cover" />
          </div>
        </section>
        <section className="p-6 max-w-4xl mx-auto">
          <div className="mb-6 space-y-4 text-lg text-gray-800">
            <p>
              The third pig had met a man with a load of bricks. The pig said,
              “Please, sir, give me those bricks so I can build a house.” The man
              gave him the bricks, and the pig built a house out of bricks. He was
              sitting in his house when he heard a knock on the door. It were his
              brothers! “The wolf has blown our houses down! Please can we stay
              here?”
            </p>
          </div>
  
          <div className="rounded-xl overflow-hidden shadow-lg border">
            <img src={pic4} alt="Image" className="w-full h-[40rem] object-cover" />
          </div>
        </section>
        <section className="p-6 max-w-4xl mx-auto">
          <div className="mb-6 space-y-4 text-lg text-gray-800">
            <p>
              “Of course, my house is made of brick, it’s safe for sure!” the
              brother said. “But the wolf will surely come around here. Let’s make
              a plan to make sure he never bothers us again.” So the three little
              pigs came up with a plan. And just like the pig predicted, the wolf
              came to his house… The big bad wolf came to the house made of bricks
              and said, “Hey, little pig, let me in.” “No, no, not by the hair on
              my chinny chin chin,” replied the pig. “Then I’ll huff and I’ll puff
              and I’ll blow your house in,” said the wolf. So the wolf huffed and
              he puffed and he huffed and he puffed and he huffed and he puffed,
              but he couldn’t blow the door down. He soon realized he couldn’t
              open the door by huffing and puffing. Then, of course, the wolf
              became angry and decided that he would come after the pigs through
              the chimney. But the three little pigs knew what he was planning to
              do and they had hung a water kettle over the fire. And just as the
              wolf came down the chimney, he took the lid off the kettle. The hot
              steam reached the big bad wolf and with a big howl the wolf shot up!
              “Ouch, ouch, ouch! Oh you pigs! I will get you some day!” and the
              wolf ran away as fast as he could. And after that? The big bad wolf
              never came back again, he was too scared of the three smart little
              pigs. And the pigs? They lived happily ever after, together in the
              house made of bricks.
            </p>
          </div>
  
          <div className="rounded-xl overflow-hidden shadow-lg border">
            <img src={pic5} alt="Image" className="w-full h-[40rem] object-cover" />
          </div>
        </section>
      </>
    );
  };
  
  export default Detail;
  
=======
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  interface Story {
    title: string;
    content: string; // HTML string
    audio: {
      url: string;
    };
    cover_image: {
      url: string;
    };
  }

  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(
          "http://62.72.46.248:1337/api/stories/pzu6dz18p3fev0l8pukj04pp?populate=*"
        );
        // No attributes, just direct access to data

        setStory(res.data.data);
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!story) {
    return (
      <div className="text-center mt-10 text-red-600">
        Failed to load story.
      </div>
    );
  }

  console.log(story.cover_image.url, "story");
  console.log(story.audio.url, "story");
  return (
    <div className="p-4 max-w-4xl mx-auto items-center">
      <div className="border-t border-gray-400 w-16 mx-auto font-bold text-2xl">
        <h2 className="mx-4 text-lg font-bold text-center">{story.title}</h2>
      </div>
      <div className="flex flex-col items-center my-4">
        <div className="w-96">
          <img className="w-full" src={story?.cover_image?.url} />
        </div>
        <div className="mt-4">
          <audio className="w-96" controls>
            <source src={story?.audio?.url} type="audio/mpeg" />
          </audio>
        </div>
      </div>

      {/* Render HTML content safely */}
      <div
        className="prose prose-lg text-center"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </div>
  );
};

export default Detail;
>>>>>>> detail
