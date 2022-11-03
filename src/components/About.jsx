import React from 'react'
import miska from '../assets/miska.jpg';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center w-full h-full'>

                    <div className='sm:text-center pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
                            Minusta
                        </p>
                    </div>

                    {/* Kuva */}
                    <div className=' mx-auto rounded-full xxs:h-40 xxs:w-40 xs:w-40 xs:h-40 s:w-40 s:h-40 sm:w-80 sm:h-80 mb-10 mt-5 overflow-hidden'>
                        <img src={miska} layout="fill" objectFit="cover" />
                    </div>

                    <div>
                        <p className='sm:text-center text-4xl font-bold xxs:text-2xl'>
                            Hei olen Miska ja olen neljännen vuoden Tieto- ja viestintätekniikan opiskelija
                        </p>
                    </div>
                    
                    <div className='sm:text-center py-8 max-w-[700px]'>
                        <p>
                            Olen kiinnostunut verkkosivujen suunnittelusta ja niiden toteuttamisesta. Yritän opetella useita eri tekniikoita ja tapoja luoda parempia ja hienompia verkkosivuja.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
