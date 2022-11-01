import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo_miska_1.png';
import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState (false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#000000] bg-opacity-60 text-white'>
            {/* Logo */}
            <div>
                <img src={Logo} alt='Logo image' style={{width: '85px'}} />
            </div>

            {/* Menu */}
            
                <ul className='hidden md:flex grid-col-5'>
                    <div>
                        <li className='hover:scale-110 duration-100 inline hover:border-b-4 border-orange-600'>
                            <Link to="home" smooth={true} duration={500} >
                                Etusivu
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li className='hover:scale-110 duration-100 inline hover:border-b-4 border-orange-600'>
                            <Link to="about" smooth={true} duration={500} >
                                Minusta
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li className='hover:scale-110 duration-100 inline hover:border-b-4 border-orange-600'>
                            <Link to="skills" smooth={true} duration={500} >
                                Osaamiseni
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li className='hover:scale-110 duration-100 inline hover:border-b-4 border-orange-600'>
                            <Link to="work" smooth={true} duration={500} >
                                Työt
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li className='hover:scale-110 duration-100 inline hover:border-b-4 border-orange-600'>
                            <Link to="contact" smooth={true} duration={500} >
                                Ota yhteyttä
                            </Link>
                        </li>
                    </div>
                </ul>
            

            {/* hamburge menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Etusivu
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        Minusta
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Osaamiseni
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Työt
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Ota yhteyttä
                    </Link>
                </li>
            </ul>


        </div>
    )
}

export default Navbar
