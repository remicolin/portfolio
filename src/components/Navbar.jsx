import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Git from '../assets/github.png';
import { Link } from 'react-scroll';

var ethers = require('ethers');



const Navbar = () => {
    const network = 'kovan'
    const provider = ethers.getDefaultProvider(network)

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [balanceAccount, setBalanceAccount] = useState("0 eth");
    const test2 = () => setBalanceAccount(new ethers.Contract("0x289F763AB8DBCA73912cBC518DdF7ab68c0B16A0", ['function balanceOf'], provider));

    const test = () => provider.getBalance("0x289F763AB8DBCA73912cBC518DdF7ab68c0B16A0").then(function (balance) {
        // balance is a BigNumber (in wei); format is as a sting (in ether)
        var etherString = ethers.utils.formatEther(balance);
        console.log(`balance: ${etherString} ETH`);
        setBalanceAccount(etherString);
    });
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white shadow-lg shadow-gray-100'>
            <div>
                <a className=' ml-3 flex justify-between items-center w-full text-black' href="https://github.com/remicolin">
                    <FaGithub size={30} />
                </a>
            </div>


            {/* menu */}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li>
                        <a href="/101010110" className='hover:text-green-600'>101010110</a>
                    </li>
                    <li>
                        <Link className='hover:text-my-blue' to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li><Link className='hover:text-my-blue' to="about" smooth={true} duration={500} >
                        About
                    </Link></li>
                    <li><Link className='hover:text-my-blue' to="skills" smooth={true} duration={500} >
                        Skills
                    </Link></li>
                    <li><Link className='hover:text-my-blue' to="work" smooth={true} duration={500} >
                        Work
                    </Link></li>
                    <li><Link className='hover:text-my-blue' to="education" smooth={true} duration={500} >
                        Education
                    </Link></li>
                    <li><Link className='hover:text-my-blue' to="contact" smooth={true} duration={500} >
                        Contact
                    </Link></li>
                </ul>
            </div>



            {/* Hambuger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>



            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl' >
                    <Link to="home" smooth={true} duration={500} onClick={handleClick} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link to="about" smooth={true} duration={500} onClick={handleClick} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link to="skills" smooth={true} duration={500} onClick={handleClick} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link to="work" smooth={true} duration={500} onClick={handleClick} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link to="education" smooth={true} duration={500} onClick={handleClick} >
                        Education
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link to="contact" smooth={true} duration={500} onClick={handleClick} >
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:hidden fixed flex-col top-[35%] left-0'>

                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-white' href="https://github.com/remicolin">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] text-white'>
                        <Link className='' to="contact" smooth={true} duration={500} >
                            Mail
                        </Link> <HiOutlineMail size={30} />

                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar