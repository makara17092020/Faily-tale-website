
import Card from "../components/card"
import Button from "../components/button"
import hero from "../assets/herosectionhomepage.png"

const Home = () => {
    return (
        <main>
            <>

            <div className=" w-full h-auto flex items-center justify-center ">
            <div className="w-full h-[500px]">
              <img className="h-full w-full" src={hero} alt="" />               
                </div>
            </div>

            <h1 className="lg:px-10 md:px-15 sm:px-10 px-20 py-5 font-bold text-5xl text-[#983FFD]">
                Adventure
            </h1>

            <div className="flex justify-center flex-wrap gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div className="flex justify-center flex-wrap py-5 mb-5">
                <Button/>
            </div>

            <h1 className="lg:px-10 md:px-15 sm:px-10 px-20 py-5 font-bold text-5xl text-[#983FFD]">
                Magic
            </h1>

            <div className="flex justify-center flex-wrap gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div className="flex justify-center flex-wrap py-5 mb-5">
                <Button/>
            </div>

            <h1 className="lg:px-10 md:px-15 sm:px-10 px-20 py-5 font-bold text-5xl text-[#983FFD]">
                Kindness
            </h1>

            <div className="flex justify-center flex-wrap gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div className="flex justify-center flex-wrap py-5 mb-5">
                <Button/>
            </div>

            <h1 className="lg:px-10 md:px-15 sm:px-10 px-20 py-5 font-bold text-5xl text-[#983FFD]">
                Problems Solving
            </h1>

            <div className="flex justify-center flex-wrap gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div className="flex justify-center flex-wrap py-5 mb-5">
                <Button/>
            </div>
            
            </>
            
        </main>
    )
}

export default Home;
