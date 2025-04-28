import { useEffect, useState } from "react";
import Button from "../components/button";
import Card from "../components/card";
import Herostory from "../assets/Herostory.png";

const Story = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [ageGroups, setAgeGroups] = useState<any[]>([]);
  const [filters, setFilters] = useState<any>({ category: [], ageGroup: [] });
  const [searchTerm, setSearchTerm] = useState<string>(""); // New: For input search
  const [stories, setStories] = useState<any[]>([]); // New: To store fetched stories

  // Fetch story types and age ranges from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryRes, ageRes] = await Promise.all([
          fetch("http://62.72.46.248:1337/api/story-types"),
          fetch("http://62.72.46.248:1337/api/age-ranges"),
        ]);

        const categoryData = await categoryRes.json();
        const ageData = await ageRes.json();

        setCategories(categoryData.data.map((item: any) => item.name));
        setAgeGroups(ageData.data.map((item: any) => item.label));
      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch stories based on searchTerm
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(
          `http://62.72.46.248:1337/api/stories?filters[title][$containsi]=${searchTerm}`
        );
        const data = await res.json();
        setStories(data.data || []); // Fallback to empty if no data
      } catch (error: any) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, [searchTerm]); // Runs when searchTerm changes

  const toggleFilter = (type: any, value: any) => {
    setFilters((prev: any) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((item: any) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  const isActive = (type: any, value: any) => filters[type]?.includes(value);

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center">
        <div className="w-full h-[500px]">
          <img className="h-full w-full" src={Herostory} alt="Hero Story" />
        </div>
      </div>

      <h1 className="text-center py-10 font-bold text-5xl text-[#983FFD]">
        Choose Stories By Type
      </h1>

      <div className="flex justify-center items-center h-auto mb-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-[30rem] h-[4rem] px-6 text-lg border-2 border-[#983FFD] rounded-full shadow-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // New: update searchTerm
        />
      </div>

      <div className="flex justify-center w-[95%] mx-auto gap-2 flex-wrap py-10 border-b-4 border-[#983FFD]">
        <div className="w-[49%] flex justify-center flex-wrap gap-5">
          {categories.map((category: any, index: any) => (
            <Button
              key={index}
              label={category}
              onClick={() => toggleFilter("category", category)}
              isActive={isActive("category", category)}
            />
          ))}
        </div>

        <div className="hidden md:block h-[7.5rem] w-2 bg-[#983FFD]"></div>

        <div className="w-[49%] flex justify-center flex-wrap gap-5">
          {ageGroups.map((ageGroup: any, index: any) => (
            <Button
              key={index}
              label={ageGroup}
              onClick={() => toggleFilter("ageGroup", ageGroup)}
              isActive={isActive("ageGroup", ageGroup)}
            />
          ))}
        </div>
      </div>

      <h1 className="text-center py-10 font-bold text-5xl text-[#983FFD]">
        Picture Books
      </h1>

      <div className="flex justify-center flex-wrap gap-5">
        {stories.length > 0 ? (
          stories.map((story: any) => <Card key={story.id} story={story} />)
        ) : (
          <p className="text-lg text-gray-500">No stories found</p>
        )}
      </div>
    </>
  );
};

export default Story;
