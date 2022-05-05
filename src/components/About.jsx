import INSA from '../assets/insa-toulouse.jpg'
import React from 'react'

const About = () => {
    return (
        <div name='about' className='chapter'>

            <div className=' flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#3772FF]'>
                            About
                        </p>
                    </div>
                </div>
                <div>
                </div>
                <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi. I'm Rémi, Nice to meet you, Please take a look around</p>
                    </div>
                    <div>
                        <p className='sm:py-2'> I graduated Engineer from INSA Toulouse.
                            I have also achieved a double degree in Innovative Management at TSM.
                            Passionate about blockchain technology, I want to develop my
                            career in this field. I am actually looking for a position in this environment as a Smart Contract Engineer Jr.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About