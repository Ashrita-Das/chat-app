import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input bg-gray-100 rounded-full focus:outline-none focus:border-black' />
			<button type='submit' className='btn btn-circle bg-blue-400 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;