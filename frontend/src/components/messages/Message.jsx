import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
   const {authUser} = useAuthContext();
   const { selectedConversation } = useConversation();
   const sent = message.senderId === authUser._id;
   const formattedTime = extractTime(message.createdAt);
   const chatClassName = sent ? "chat-end" : "chat-start";
   const profilePic = sent ? authUser.profilePic : selectedConversation?.profilePic;
   const bubbleBgColor = sent ? "bg-blue-400" : "";

   const shakeClass = message.shouldShake ? "shake" : "";

   return (
    <div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component'  
                    src={profilePic} 

                    />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer text-xs flex gap-1 items-center text-black'>{formattedTime}</div>
		</div>
  )
}

export default Message
