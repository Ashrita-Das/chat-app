/* eslint-disable no-unused-vars */
import { useState} from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 bg-white rounded-lg shadow-[10px_10px_0px_0px_rgba(0,0,0)] '>
      <h1 className='text-3xl font-semibold text-center text-black'>Login</h1>
                <form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-black'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input h-10 bg-gray-100 text-black focus:border-black focus:outline-none'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
                </div>
                <div>
						<label className='label'>
							<span className='text-base label-text text-black'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input h-10 bg-gray-100 text-black focus:border-black focus:outline-none'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
                    <Link to='/signup' className='text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 bg-white text-black hover:bg-blue-400' 
                        disabled={loading}
                        >
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
            </form>
        </div>
    </div>
  )
}

export default Login;
