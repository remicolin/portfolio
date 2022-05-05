import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
var ethers = require('ethers');

const Home = () => {

    const [defaultAccount, setDefaultAccount] = useState("0xAnon");
    const [errorMessage, setErrorMessage] = useState(null);
    const connectwalletHandler = () => {
        if (window.ethereum) {
            var provider = new ethers.providers.Web3Provider(window.ethereum);

            provider.send("eth_requestAccounts", []).then(async () => {
                await accountChangedHandler(provider.getSigner());
            })
        } else {
            setErrorMessage("Please Install Metamask !");
        }
    }
    const accountChangedHandler = async (newAccount) => {
        const address = await newAccount.getAddress();
        setDefaultAccount(address);
    }
    return (
        <div name='home' className='chapter'>


            {/* Container*/}

            <div className='max-w-[800px] mx-auto px-8 h-full justify-center flex flex-col'>


                <div className=''>
                    <div className=''>
                        <p className='text-4xl max-w-[700px]'>Hi, <span className='
                         text-2xl text-my-blue'> {defaultAccount}</span> my name is <span className='text-my-blue'>Rémi Colin </span></p>
                        <p className='text-4xl'>I am a Smart Contract Engineer Jr</p>
                    </div>
                </div>

                <div>
                    <p className='mt-8 font-bold'>{errorMessage}</p>
                    <button className=' font-bold text-[#3772FF]  hover:text-white border-2 px-3 py-1 mt-1 mb-2 items-center hover:bg-[#3772FF]  border-[#3772FF]  ' onClick={connectwalletHandler}>Connect to Metamask</button>

                    <button className='font-bold text-my-blue group border-2 px-4 py-1 mt-0 flex items-center hover:text-white  hover:bg-[#3772FF]  border-[#3772FF] '>
                        <Link to="work" smooth={true} duration={500} >
                            View work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 '>
                            <HiArrowNarrowRight className='ml-2 ' />


                        </span>
                    </button>

                </div>


            </div>


        </div >
    )
}

export default Home