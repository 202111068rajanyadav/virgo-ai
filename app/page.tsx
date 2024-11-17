import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex h-screen text-white ">
        <div className="w-80  bg-sidebar-bg p-2 m-0 flex flex-col items-start ">
          <div className="p-2 m-2">
            <Image
              src="/menu.svg"
              alt="Hamberger Icon"
              width={25}
              height={25}
            />
          </div>

          <div className="flex justify-start mt-5">
            <button className="text-sm rounded-full px-3 py-2  bg-[#1d1ef] flex items-center hover:bg-[#303030] transition-colors mt-4">
              <div className=" flex  mr-2">
                <Image
                  src="/add.svg"
                  alt="Add Icon"
                  width={25}
                  height={25}
                  className="mr-2"
                />
              </div>
              New Chat
            </button>
          </div>
          <div className="mt-[11px] p-[11px] mb-[400px]">
            Recent
            <div>
              <button className="text-sm rounded-full px-3 py-2  bg-[#1d1ef] flex items-center hover:bg-[#303030] transition-colors relative w-full">
                <Image
                  src="/chat.svg"
                  alt="Chat Bubble Icon"
                  width={20}
                  height={20}
                  className="mr-[20px]"
                />
                You are in the chat
                <Image
                  src="/vertical.svg"
                  alt="Chat Bubble Icon"
                  width={20}
                  height={20}
                  className="ml-[5px]"
                />
              </button>
            </div>
          </div>

          <button className="text-sm rounded-full px-3 py-2  bg-[#1d1ef] flex items-center hover:bg-[#303030] transition-colors relative w-full">
            <Image
              src="/activity.svg"
              alt="Activity Icon"
              width={20}
              height={20}
              className="mr-[20px]"
            />
            Activity
          </button>
          <button className="text-sm rounded-full px-3 py-2  bg-[#1d1ef] flex items-center hover:bg-[#303030] transition-colors relative w-full">
            <Image
              src="/setting.svg"
              alt="Activity Icon"
              width={20}
              height={20}
              className="mr-[20px]"
            />
            Setting
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

            <div>
              <Image
                src="/user.svg"
                alt="Google Account Avator"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="h-full w-full flex flex-col relative overflow-hidden">
            <div
              className="flex-1 flex h-full 
    justify-center 
    items-center z-[1] overflow-y-auto"
            >
              <div className="w-full h-full flex justify-center items-center text-center">
                <h1 className="text-[4rem] font-normal gradient-text mb-16">
                  Hiiii...... Rajan
                </h1>
              </div>
            </div>

            <div
              className="p-12 pt-0  bg-chat-bg flex justify-center items-center bottom-0 left-0 right-0 absolute z-20
            gradient-bg"
            >
              <div className="w-2/3  p-3 flex border rounded-full overflow-hidden border-none bg-[#80868b1a] justify-between">
                <textarea
                  placeholder="Ask Virgo "
                  className="w-4/5 bg-transparent border-r-transparent p-2 outline-none resize-none overflow-hidden text-base h-[40px] flex items-center "
                />

                <div className="flex items-center gap-4 p-0">
                  <Image
                    src="/image.svg"
                    alt="Image icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/microphone.svg"
                    alt="Microphone icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/send.svg"
                    alt="Send icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
