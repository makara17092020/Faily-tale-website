// import HeroSection from "./components/Herosection"
import Button from "../../components/button";

<<<<<<< .merge_file_aUDi7H
export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <h1>This is home page</h1>
      <Button />
    </main>
  );
}
=======
const Home = () => {
    return (
        <main>
            <>

            {/* <HeroSection /> */}
            <h1 className="lg:px-10 md:px-15 sm:px-10 px-20 py-5 font-bold text-5xl text-[#983FFD]">
                Adventure
            </h1>

            <div className="flex justify-center flex-wrap gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
            </>
            
        </main>
    )
}

export default Home
>>>>>>> .merge_file_lxA1OK
