import React from 'react'

import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import FireBase from '../assets/firebase.png'
import Tailwind from '../assets/tailwind.png'
import Solidity from '../assets/solidity.png'
import Java from '../assets/java.png'

const Skills = () => {
    return (
        <div name='skills' className='chapter text-gray-300 '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#3772FF]'>Experience</p>
                    <p className='py-4'>These are the technologies I'have worked with</p>


                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 '>
                    <div className=' shadow-md shadow-gray-300 hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto my-3' src={Solidity} alt="HTML icon" />
                        <p className='my-4'>Solidity</p>
                    </div>

                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto my-3' src={Java} alt="HTML icon" />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto my-3' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className=' shadow-md shadow-gray-300 hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto my-3' src={FireBase} alt="HTML icon" />
                        <p className='my-4'>Firebase</p>
                    </div>

                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto my-3' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TailWind</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto my-3' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>


                </div>



            </div>

        </div >
    )
}

export default Skills