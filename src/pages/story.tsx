import React, { useEffect, useState } from "react";

import axios from "axios";

interface Story {
  id: number;
  title: string;
  cover_image: {
    url: string;
  };
}

const FetchStories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://62.72.46.248:1337/api/stories?populate=cover_image"
        );
        setStories(response.data.data); // Assuming the response structure is { data: [...] }
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-3">Stories</h1>
      <div className="grid grid-cols-4 gap-5 w-[95%] mx-auto mt-5">
        {stories.map((story) => (
          <div key={story.id}>
            <img src={story.cover_image.url} alt={story.title} />
            <h2 className="text-center font-2xl mt-2 font-semibold">{story.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FetchStories;
