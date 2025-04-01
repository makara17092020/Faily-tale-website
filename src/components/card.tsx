import bookCover1 from '../assets/adventure 1.png'
import heart from '../assets/heart-icon.png'

const Card = () => {
    return (
        <section>
            <a href="">
            <div className="w-[21rem] h-[38rem] rounded-[1.5rem] shadow-2xl ps-5">
                <div className='relative w-full h-[75%]'>
                    <img className='w-full h-full' src={bookCover1} alt="" />
                    <a className="relative" href="">
                    <div className="absolute top-4 right-3 w-8 h-7.5 flex items-center justify-center rounded-full bg-transparent hover:bg-[#F40808] transition-colors duration-200">
                        <img className="w-6 h-6" src={heart} alt="" />
                    </div>
                </a>


                </div>

                <div className='w-full h-[25%]'>
                    <h3 className='font-bold text-3xl p-3 text-[#FFD700] hover:text-[#983FFD]'>An Alice's </h3>
                    <p className='text-xl ps-3 text-black'>An inquisitive girl finds herself falling into a new land, Wonderland. What strange and </p>
                </div>
            </div>
            </a>
        </section>
    )
}

export default Card