import React, { useState } from 'react'
import avatar from '../../assets/logo1.png'
import send from '../../assets/Send(2).svg'
import vector from '../../assets/Vector(13).svg'
import call from '../../assets/call.svg'
import burger from '../../assets/hamburger-menu-dots-svgrepo-com.svg'

const PhoneUI = ({ file, name }) => {


    const nanocodes = {
        image: file,
        name: name,
        message: "Hello, welcome to nanocodes, please customize your chat widget to your taste, put in your name, the theme of your chat widget, your avatar and the language of preference",
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    }

    const [chat, addChat] = useState("");
    const [chatList, addChatList] = useState([nanocodes]);


    // const [showChat, setShowChat] = useState(false);

    const data = {
        image: { avatar },
        name: name
    }

    const sendMessage = () => {
        if (chat !== "") {
            const messageData = {
                image: file,
                name: name,
                message: chat,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            addChatList(oldArray => [...oldArray, messageData]);
            addChat("")
        }
    }

    return (
        <div className="relative h-[40%] w-full flex justify-center items-center mt-32">
            {/* <div className="relative top-4/5 h-4/4 w-[50%] flex justify-end items-center overflow-hidden"> */}
            <div className="bg-white relative overflow-hidden box-border border-[8px] border-solid border-black shadow-[0_0_0_0_#333] w-[30vw] max-w-[300px] h-[80vh] rounded-[40px]">
                <div className="absolute bg-[#000] top-0 h-6 w-24 z-[100] left-[50%] translate-x-[-50%] rounded-br-[10px] rounded-bl-[10px] before:content-[''] before:absolute before:h-1 before:w-8 before:top-[7px] before:left-[10px] before:rounded-[10px] before:border-[0.03em] before:border-solid before:border-[rgba(51,51,51, 0.479)] before:shadow-inner-[0_0_0_0_rgba(51,51,51,0.712)] after:content-[''] after:absolute after:h-[7px] after:w-[7px] after:top-[5px] after:right-[20px] after:rounded-[50%] after:bg-[#333]"></div>
                <div className="flex flex-col h-[80%] w-full">


                    <div className="flex flex-col h-34">
                        <div className="h-20 w-full bg-[color:var(--bg-color)] py-6">
                            <div className="flex flex-row h-14 w-full items-center justify-around">
                                <div className="w-10 h-10 border-[2px] border-[#fff] bg-[rgba(0,0,0,1)] rounded-full overflow-hidden">
                                    <img src={file} alt="" className='' />
                                </div>
                                <div className="flex flex-col justify-between h-[80%] items-start">
                                    <p className="text-[#fff] text-xs">you're chatting with</p>
                                    <h2 className="text-[#fff] text-md font-black">{data.name}</h2>
                                </div>
                                <div className="w-4 h-4"><img src={call} alt="" /></div>
                                <div className="w-4 h-4"><img src={burger} alt="" /></div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--bg-color)" fill-opacity="0.17" d="M0,224L80,224C160,224,320,224,480,192C640,160,800,96,960,69.3C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                        </svg>
                    </div>
                    <div className="w-full relative min-h-[300px] flex flex-col content-start overflow-y-[scroll]">
                        {chatList.map((chatContent, index) => {
                            if (index === 0) {
                                return (
                                    <div className="ml-[8px]">
                                        <div className="flex flex-row gap-[1px] self-start w-[100%]">
                                            <div className="w-6 h-6 border-[2px] border-[#fff] bg-[rgba(0,0,0,1)] rounded-full overflow-hidden"><img src={file} alt="" /></div>
                                            <div className="max-w-[85%] flex flex-col gap-y-[2px] items-start text-left font-semibold text-xs">
                                                <div className="max-w-[85%] bg-[var(--bg-color)] rounded-[6px] font-semibold p-[5px]">
                                                    <p>{chatContent.message}</p>
                                                </div>
                                                <p>{chatContent.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="mr-[15px]">
                                        <div className="flex flex-col gap-y-[2px] items-end text-left font-bold self-end text-sm">
                                            <div className="max-w-[85%] bg-[green]  rounded-[6px] font-bold p-[5px]">
                                                <p>{chatContent.message}</p>
                                            </div>
                                            <p>{chatContent.time}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="z-[110] bg-[#fff] w-full height-[20px] flex flex-row items-center justify-center px-[15px] pb-[10px] self-end justify-self-end">
                        <div className="flex flex-row w-[100%] bg-[#DAEBFF] rounded-md pr-2">
                            <input
                                type="text"
                                value={chat}
                                onChange={(e) => {
                                    addChat(e.target.value)
                                }}
                                onKeyDown={(e) => {

                                    e.key === "Enter" && sendMessage();

                                }}
                                className="bg-[#DAEBFF] rounded-tl-[10px] rounded-bl-[10px] h-10 w-[100%] pl-2"
                            />
                            <div className="bg-[#DAEBFF] rounded-tr-[10px] rounded-br-[10px] w-[15px] h-10 py-2"><img src={vector} alt="" className='w-[14px]' /></div>
                        </div>
                        <button className="" onClick={sendMessage}><img src={send} alt="" /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PhoneUI
