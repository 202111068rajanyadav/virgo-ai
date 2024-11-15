import Image from "next/image";
export default function Home() {

  return (
    <>
    <div className="flex h-screen text-white ">
      <div className="w-80  bg-sidebar-bg p-4">

        SideBar
      <button>
        new Chat
      </button>
      </div>

      <div className="w-4/5  flex flex-col bg-chat-bg">
      
        <div className="p-4 flex items-center justify-between bg-[#1d1e1f]  text-white">
          <button className="bg-[#1d1e1f] text-white text-xl p-1.5 rounded-md flex items-center hover:bg-[#303030] transition-colors">
            Virgo
            <Image
            src="/arrow_drop_down.svg"
            alt="Dropdown Icon"
              width={25}
          height={25}
          className="ml-2"
            />
            </button>

            <div >
              <Image
            src="/user.svg"
            alt="Google Account Avator"
            width={32}
            height={32}
            className="rounded-full"
            />
            </div>
        
        </div>
        
        <div 
        className="h-full w-full flex flex-col"
        >

        <div className="flex-1 flex p-4 
        justify-center 
        items-center">
          <h1 className="text-[4rem] font-normal gradient-text overflow-visible">
            Hiiii...... Rajan 
            </h1> 
        </div>

        <div className="p-12 flex justify-center items-center">
          <input 
          type="text" 
          placeholder="Ask Virgo "
          className="w-[70%] p-4 border rounded-full bg-[#80868b1a]"
              />
          <Image
          src="/image.svg"
          alt="Image icon"
          width={24} 
          height={24} 
          />
              <Image
              src="/microphone.svg"
              alt="Microphone icon"
              width={24}
              height={24} 
              />
              
        </div>
        </div>

      </div>
    </div>
    </>
  );
}