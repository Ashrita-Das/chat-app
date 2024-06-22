// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] overflow-hidden bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0)]'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;