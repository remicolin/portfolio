import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
var ethers = require('ethers');
// Var for Web3
var provider
var contract
// Setting up web3
const contract_address = '0x1B16D49CD225Ca1014cd4C167CFC456b2F329A33'
const contract_abi = [
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "subscriptionId",
                "type": "uint64"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "have",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "want",
                "type": "address"
            }
        ],
        "name": "OnlyCoordinatorCanFulfill",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_requestId",
                "type": "uint256"
            }
        ],
        "name": "Play",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_requestId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "_win",
                "type": "bool"
            }
        ],
        "name": "Result",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "amount_bet",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "balance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "bettor",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "history",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "play",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_requestId",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "randomWords",
                "type": "uint256[]"
            }
        ],
        "name": "rawFulfillRandomWords",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rdm",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "request_completed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "s_randomWords",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "s_requestId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]
// RequestID usefull for linkVRF
var requestID

const Home = () => {
    var [i, setI] = useState(0);
    var [u, setU] = useState([0]);
    var [mod, setMod] = useState([]);
    var [amount, setAmount] = useState(0);
    var [waitingForResult, setWainting] = useState(true)
    var [lastGameIsWin, setLastGameIsWin] = useState(false)
    var [stringOntheRock, setStringOTR] = useState("")
    var [step, setStep] = useState(0)
    function play() {
        if (i < 5) {
            setI(i + 1)
            setU(u.concat(0))
            mod = setMod(u.map((map, number) => {
                if (number == 4) {
                    setStep(1)
                    return <div className='w-[68px] h-[32px] font-bold ml-2 mt-1 bg-blue-600 text-center text-black'>Win</div>
                }

                return element
            }))
        }
    }

    function incrementStep() {
        setStep(step + 1)
    }

    const element = <div className='w-[68px] h-[32px] ml-2 mt-1 bg-green-600'></div>
    // handle input for the amount of eth
    const handleInput = event => {
        setAmount((event.target.value));
    };
    //Web3 Interface
    const [defaultAccount, setDefaultAccount] = useState("0xAnon");
    const [errorMessage, setErrorMessage] = useState(null);

    // Connect to Web3
    const connectwalletHandler = () => {
        if (window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum)

            provider.send("eth_requestAccounts", []).then(async () => {
                await accountChangedHandler(provider.getSigner());
            })
            // Set up listener on contract's events
            contract = new ethers.Contract(contract_address, contract_abi, provider.getSigner())
            contract.on('Result', (player, amount, requestId, win) => {
                console.log(`Result event, player: ${player}`);
                console.log(`Result event, amount: ${amount}`);
                console.log(`Result event, requestId: ${requestId}`);
                console.log(`Result event, win: ${win}`);

                setWainting(false)
                if (win) {
                    setStringOTR("You Win")
                    setLastGameIsWin(true)
                }
                else {
                    setStringOTR("You Loose")
                    setLastGameIsWin(false)
                }


            });
        } else {
            setErrorMessage("Please Install Metamask !");
            console.log('Please install Metamask')
        }

    }
    // Get Account Address
    const accountChangedHandler = async (newAccount) => {
        const address = await newAccount.getAddress()
        setDefaultAccount(address);
    }
    // Bet Some Eth, what could be more fun (please fake eth)
    async function bet() {
        if (provider) {
            const { chainId } = await provider.getNetwork()
            console.log(chainId)
            if (chainId === 4) {

                setStringOTR("Wait...")
                setWainting(true)
                const amount_eth = ethers.utils.parseEther(amount.toString())
                const tx = await contract.play({ "value": amount_eth })
                const receipt = await tx.wait()
                const event = receipt.events.find(x => x.event === "Play");
                requestID = event.args[2]
                console.log(`RequestId: ${event.args[2]}`)
                setStringOTR("Keep Waiting...")
            }
            else {
                setStringOTR("Please connect to rinkeby")

            }

        }
        else {
            setStringOTR("Connect to Metamask")

        }

    }


    return (
        <div name="home" className='bg-black min-h-screen h-full w-full hack ' >
            <div className='pt-8 w-max-[200px] mx-32 flex  justify-end '>
                <div className='grid grid-raws-2 justify-items-end'>
                    <p className='text-center max-w-max text-my-green'>
                        Hello again {defaultAccount}, wanna play a game ?
                    </p>
                    <button className='hbutton text-lg max-w-max mt-4' onClick={connectwalletHandler}>Connect to Metamask</button>
                </div>

            </div>

            <div className='flex  pt-8 w-max-[200px] mx-32 '>
                <button className='hbutton ' onClick={play}>Play</button>
                <div id="test" className='flex w-[800px]'>{mod}
                </div>
            </div>

            <div className={step < 1 ? 'hidden' : 'pt-3 w-max-[200px] mx-32 '}>
                <p className='text-right text-my-green '>Wanna play a funnny one ?</p>
                <div className='flex items-center justify-center mt-6'>
                    <button className='hbutton mx-8 w-[60px]' onClick={step === 1 ? incrementStep : undefined}>Yes</button>
                    <button className='hbutton mx-8 w-[60px]' onClick={step === 1 ? incrementStep : undefined}>No</button>
                </div>
            </div>

            <div className={step < 2 ? 'hidden' : 'pt-3 w-max-[200px] mx-32 '}>
                <p className='text-right text-my-green'>Alright, head or tail ?</p>
                <div className='flex items-center justify-center mt-6'>
                    <button className='hbutton mx-8' onClick={step === 2 ? incrementStep : undefined}>Head</button>
                    <button className='hbutton mx-8' onClick={step === 2 ? incrementStep : undefined}>Tail</button>
                </div>
            </div>

            <div className={step < 3 ? 'hidden' : 'pt-3 w-max-[200px] mx-32 '}>
                <p className='text-right text-my-green'>You Loose</p>
                <div className='flex items-center justify-center mt-6'>
                    <button className='hbutton mx-8' onClick={step === 3 ? incrementStep : undefined}>That's not fair</button>
                </div>
            </div>

            <div className={step < 4 ? 'hidden' : 'pt-3 w-max-[200px] mx-32 '}>
                <p className='text-right text-my-green'>Really ? Let's use blockchain</p>
                <div className='flex items-center justify-center mt-6'>
                    <button className='hbutton mx-8' onClick={step === 4 ? incrementStep : undefined}>Thanks</button>
                    <a href="https://rinkeby.etherscan.io/address/0x1b16d49cd225ca1014cd4c167cfc456b2f329a33#code"><button className='hbutton mx-8' >Let me see the contract</button></a>
                </div>
            </div>


            <div className={step < 5 ? 'hidden' : 'pt-4 w-max-[200px] mx-32  '}>
                <p className='text-right text-my-green'>How much fake eth do you want to bet ?</p>
                <div className='flex items-center justify-center mt-6'>
                    <input type="number" onChange={handleInput} className='bg-black border-2 border-green-600 ml-8 px-2 h-full' />
                    <button className='hbutton my-0 mt-0 mb-0 mx-2 h-[37px] ' onClick={bet}>Bet</button>
                </div>
                <div className='flex items-center justify-center mt-2 pb-8 mr-2 '>
                    <p className={waitingForResult ? 'font-bold text-my-green ' : lastGameIsWin ? ' font-bold text-black bg-blue-600 px-2 py-1' : 'font-bold text-black bg-red-600 px-2 py-1'}>{stringOntheRock}</p>
                </div>
            </div>



        </div>
    )
}

export default Home