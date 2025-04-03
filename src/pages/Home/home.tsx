// import HeroSection from "./components/Herosection"
import Card from "../../components/card";

const Home = () => {
  return (
    <main>
      <>
        {/* <HeroSection /> */}
        <h1 className="lg:px-10 md:px-15 sm:px-10 px-20 py-5 font-bold text-5xl text-[#983FFD]">
          Adventure
        </h1>

        <div className="flex justify-center flex-wrap gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </>
    </main>
  );
};

export default Home;
