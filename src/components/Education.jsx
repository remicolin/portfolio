import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'
import INSA from '../assets/insa-toulouse.jpg'
import TSM from '../assets/tsm.jpg'
import Arwu from '../assets/arwu.png'

const Education = () => {
    return (
        <div name='education' className=' chapter'>
            <div className='max-w-[1000px] pb-4 mx-auto flex flex-col w-full h-full p-4 '>

                <div className='pb-8'>
                    <p className='text-4xl inline  font-bold border-b-4 border-[#3772FF] '>Education</p>
                    <p className='mt-4 py-4 '> Here is where I graduated from </p>


                </div>

                <div className='grid sm:grid-cols-2 gap-4 h-auto'>
                    <div style={{ backgroundImage: `url(${INSA})` }} className='shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                <div className='pt-8 text-center items-center justify-center '>
                                    <p className='w-auto text-center -mt-6 mb-14 text-white '>Engineer Degree</p>
                                    <img src={Arwu} alt="" className="r w-21 h-14 -mt-8 mb-2 mx-12 " />
                                    <a href="https://www.insa-toulouse.fr/en/index.html"><button className='button-card mt-4'>INSA Toulouse Website</button></a>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${TSM})` }} className='shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                <div className='pt-8 text-center'>
                                    <p className='w-auto text-center mb-14 text-white'>Manager Degree</p>
                                    <a href="https://tsm-education.fr/en"><button className='button-card'>TSM Website</button></a>
                                </div>
                            </span>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Education