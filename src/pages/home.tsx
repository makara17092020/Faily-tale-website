import untitled from '../assets/Untitled.png'
import untitled2 from '../assets/Untitled2.png'
import people from '../assets/people.png'
import last from '../assets/last.png'


const Home = () => {
    return (
        <main>
            <>

            <div className="lg:h-[100vh] w-full h-[350px] flex items-center justify-center flex-wrap">
            <div className=" w-[50%] h-[38rem]">
                <div className="">
                    <h1 className='lg:px-10 lg:mt-36  lg:text-7xl text-xl font-bold px-5 mt-20'>Get 1000 hours <br /> of world-class <br /> stories, free.</h1>
                    <p className='lg:text-xl lg:px-10 lg:mt-10 text-[12px] px-5 mt-2.5'>From our multi-Emmy® winning storytellers.</p>
                </div>
            </div> 
            <div className="lg:mt-0 -mt-72 w-[50%] h-[38rem] flex items-center justify-between gap-0">
                <div>
                    <img className='w-[80%] rotate-6' src={untitled} alt="Image" />
                </div>
                <div>
                    <img className='w-[80%]  -rotate-3' src={untitled2} alt="Imgae" />
                </div>
            </div>
            </div>

            <div className='bg-[#983FFD]'>
                <h1 className='lg:text-7xl text-4xl font-bold text-center text-white py-10'>MADE WITH LOVE.</h1>
                <p className='text-white lg:text-2xl text-xl text-center'>Every story crafted with care, bringing magic and joy to your heart! 💖📖</p>
                <div className='flex justify-center'>
                <img className='' src={people} alt="" />
                </div>
            </div>

            <div className='mb-10'>
                <h1 className='lg:text-7xl text-4xl font-bold text-center text-black py-10'>ENJOY FAIRY-TALE WITH WMAD</h1>
                <p className='text-black lg:text-2xl text-xl text-center'>Enjoy magical tales with WMAD, where adventure and friendship leap off the pages! ✨📚</p>
                <div className='mt-5 w-full lg:h-[38rem] h-[20rem]'>
                    <img className='w-full h-full' src={last} alt="" />
                </div>
            </div>

            
            
            </>
            
        </main>
    )
}



export default Home;
