//import MessageInput from "./MessageInput";
//import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            <>
            <NoChatSelected />
                {/* Header
                <div className='bg-blue-400 px-4 py-2 mb-2'>
                    <span className='label-text text-white'>To:</span> <span className='text-black font-bold'>John doe</span>
                </div>

                <Messages />
                <MessageInput /> */}
            </>
        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 user</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};