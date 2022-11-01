import React from 'react'
import Javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import Blender from '../assets/blender.png';
import Photoshop from '../assets/photoshop.png';
import Premiere from '../assets/premiere.png';
import Wordpress from '../assets/wordpress.png';

const Skill = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-white'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full text-center'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600 '>Osaamiseni</p>
                    <p className='py-4'>Näitä teknologioita olen enimmäkseen käyttänyt koulussa ja vapaa-ajallani.</p>
                </div>

                {/* Experiences */}
                <div className='w-full grid grid-cols-2 xxs:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="html icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="html icon" />
                        <p className='my-4'>TailWind</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactImg} alt="html icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Wordpress} alt="html icon" />
                        <p className='my-4'>Wordpress</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="html icon" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="html icon" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Blender} alt="html icon" />
                        <p className='my-4'>Blender</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Photoshop} alt="html icon" />
                        <p className='my-4'>Photoshop</p>
                    </div>
                    <div className='shadow-md shadow-[#ff6d33] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Premiere} alt="html icon" />
                        <p className='my-4'>Premiere</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skill
