import React, { useState } from 'react'
var ethers = require('ethers');

const WalletCard = () => {

    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const [defaultAccount, setDefaultAccount] = useState("0x0000000000000000000000000000");
    const [errorMessage, setErrorMessage] = useState(null);
    const connectwalletHandler = () => {
        if (window.ethereum) {
            provider.send("eth_requestAccounts", []).then(async () => {
                await accountChangedHandler(provider.getSigner());
            })
        } else {
            setErrorMessage("Please Install Metamask!!!");
        }
    }
    const accountChangedHandler = async (newAccount) => {
        const address = await newAccount.getAddress();
        setDefaultAccount(address);
    }


    return (
        <div className="h-auto w-full bg-white ">
            <div className='container flex flex-col w-full mx-auto'>
                <button className='mx-auto font-bold text-[#3772FF]  hover:text-white border-2 px-3 py-1 m-1 flex items-center hover:bg-[#3772FF]  border-[#3772FF]  ' onClick={connectwalletHandler}>Connect to metamask</button>
                <p className=' text-m text-center text-[#3772FF] '>{defaultAccount}</p>
                <p>{errorMessage}</p>
                <p>Hello</p>
            </div>
        </div>
    )
}

export default WalletCard