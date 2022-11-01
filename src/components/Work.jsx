import React from 'react'
import Kotisivu from '../assets/kotisivu.PNG'
import Blender2 from '../assets/blendertyo.png'
import Weather from '../assets/weather.PNG'
import Ripan from '../assets/ripan.PNG'
import Kartta from '../assets/kartta.PNG'
import Joulu from '../assets/joulu.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-[#0a192f] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Työt</p>
                    <p className='py-4'></p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-black'>


                    {/* Work 1 */}
                    <div  style={{backgroundImage: `url(${Kotisivu})`}}
                     className='shadow-lg shadow-[#ff6d33] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Kotisivut, React & JS
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Koodi</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Work 2 */}
                    <div  style={{backgroundImage: `url(${Weather})`}}
                     className='shadow-lg shadow-[#ff6d33] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Sää App, JS
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://miskalait.github.io/Simple-Weather-App/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/miskalait/Simple-Weather-App">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Koodi</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Work 3 */}
                    <div  style={{backgroundImage: `url(${Ripan})`}}
                     className='shadow-lg shadow-[#ff6d33] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                               Verkkokauppa, HTML, JS
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://miskalait.github.io/Ripan-Renkaat-Verkkokauppa/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/miskalait/Ripan-Renkaat-Verkkokauppa">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Koodi</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Work 4 */}
                    <div  style={{backgroundImage: `url(${Kartta})`}}
                     className='shadow-lg shadow-[#ff6d33] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Karttapeli, HTML, JS
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://miskalait.github.io/Karttapeli/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/miskalait/Karttapeli">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Koodi</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Work 5 */}
                    <div  style={{backgroundImage: `url(${Joulu})`}}
                     className='shadow-lg shadow-[#ff6d33] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Verkkokauppa, Wordpress
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/miskalait/Joulu-verkkokauppa">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/miskalait/Joulu-verkkokauppa">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Koodi</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Work 6 */}
                    <div  style={{backgroundImage: `url(${Blender2})`}}
                     className='shadow-lg shadow-[#ff6d33] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                3D mallinnus, Blender
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/miskalait/Blender-Kitchen">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/miskalait/Blender-Kitchen">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Koodi</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Work
