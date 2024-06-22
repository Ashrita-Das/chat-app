// eslint-disable-next-line no-unused-vars
import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto text-black'>
			<div className='w-full p-6 rounded-lg bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0)]'>
				<h1 className='text-3xl font-semibold text-center text-black'>Sign Up </h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-black'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' className='w-full input h-10 bg-gray-100 focus:border-black focus:outline-none' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-black'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' className='w-full input h-10 bg-gray-100 focus:border-black focus:outline-none' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input h-10 bg-gray-100 focus:border-black focus:outline-none'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input h-10 bg-gray-100 focus:border-black focus:outline-none'
						/>
					</div>

					<GenderCheckbox />

					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 border bg-white text-black hover:bg-yellow-300'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;