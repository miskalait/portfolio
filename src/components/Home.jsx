import React from 'react'
import {HiArrowNarrowRigth} from 'react-icons/hi'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaAddressCard, FaAddressBook} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { IconContext } from "react-icons";
import Background from '../assets/forest.jpg';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        
        <div name='home' className='flex h-screen bg-[url("https://cdn.pixabay.com/photo/2022/08/23/17/47/forest-7406241_960_720.jpg")] xxs:w-auto w-max xs:w-auto bg-cover bg-center'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
                <p className=' text-white text-2xl font-bold' > Tervetuloa olen </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Miska Laitila</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'></h2>
                

                {/* Button */}
                <div>
                    <button className='font-bold text-white border-2 px-6 py-3 my-4 flex items-center hover:bg-[#ff6d33] hover:border-[#ff6d33]' >
                        <Link to="work" smooth={true} duration={500} >
                            Työt
                        </Link>
                    </button>
                </div>

                {/* Icons */}
                <div className='text-4xl flex justify-center gap-8 py-2 sm:text-7xl'>
                    <IconContext.Provider value={{ color: "#00A0DC", className: "global-class-name" }}><div><a href="https://www.linkedin.com/in/miska-laitila-6743a1199/"> <FaLinkedin /></a></div></IconContext.Provider>
                    <IconContext.Provider value={{ color: "#00A0DC", className: "global-class-name" }}><div> <a href="https://github.com/miskalait?tab=repositories"> <FaGithub /></a></div></IconContext.Provider>
                </div>

            </div>
        </div>
    )
}

export default Home
