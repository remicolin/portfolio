import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='chapter flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/a9dc8d8f-d44f-4f54-898f-ac33a9a265ad" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#3772FF] '>Contact</p>
                    <p className='mt-4 py-4 '>Submit the form below or shoot me an email at remi.colin.contact@gmail.com </p>

                </div>
                <input className='p-2 bg-gray-200' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-gray-200' type="text" placeholder='Email' name='email' />
                <textarea className='p-2 bg-gray-200' name="message" rows="10" placeholder='Message'></textarea>
                <button className='font-bold text-my-blue  border-2 hover:text-white  hover:bg-[#3772FF]  border-[#3772FF] px-4 py-3 my-8 mx-auto'>Let's Collaborate</button>
            </form>


        </div>
    )
}

export default Contact