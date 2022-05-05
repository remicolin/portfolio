import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'
import Nako from '../assets/nako.png'
import Dex from '../assets/dex.png'
import TokenVendor from '../assets/token-vendor.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-white'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-[#3772FF]'>Work</p>
                    <p className='py-6'>Check out of my recent projects</p>
                </div>
                {/* Container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    <div style={{ backgroundImage: `url(${Dex})` }} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 items-center justify-center'>
                            <span className='text-2xl font-bold text-white text-center tracking-wider'>
                                <p className='text-white'>Dex</p>
                                <div className='pt-8 text-center'>
                                    <a href="https://fluttering-design.surge.sh/"><button className='button-card'>Demo</button></a>
                                    <a href="https://github.com/remicolin/yarn-dex"><button className='button-card'>Code</button></a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${TokenVendor})` }} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white text-center tracking-wider'>
                                <p className='text-white'>Token Vendor</p>

                                <div className='pt-8 text-center'>
                                    <a href="https://useless-art.surge.sh/"><button className='button-card'>Demo</button></a>
                                    <a href="https://github.com/remicolin/yarn-token-vendor"><button className='button-card'>Code</button></a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Nako})` }} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'> Nako - social network
                                <div className='pt-8 text-center'>
                                    <a href="https://play.google.com/store/apps/details?id=com.kfa.kefa"><button className='button-card'>Demo</button></a>
                                    <a href="https://github.com/remicolin/NAKO/tree/master/app/src/main"><button className='button-card'>Code</button></a>
                                </div>
                            </span>
                        </div>
                    </div>



                </div>




            </div>

        </div>
    )
}

export default Work