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
      <h1>Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <h2>{story.title}</h2>
            <img src={story.cover_image.url} alt={story.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchStories;
