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
