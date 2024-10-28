import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link to move to register page

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Hesabınıza daxil oldunuz!');
      navigate('/'); // If login is successful, go to the dashboard
    } else {
      alert('Belə bir hesab yoxdur!');
    }
  };

  return (
    <div className='flex justify-center py-20'>
      <div className="bg-slate-800 border-slate-400 rounded p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
      <h2 className="text-4xl text-white font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin}>
        <div className='relative my-4'>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className=" block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
          />
          <label className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username:</label>
        </div>
        <div className='relative my-6'>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=" block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
          />
          <label className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Password:</label>
        </div>
        <button style={{borderRadius:"20px", padding:"5px"}}type="submit" className=" bg-cyan-400 font-bold text-white my-4 w-full">Login</button>
      </form>

      {/* Link to the register page */}
      <p>Dont have an account? <Link to="/Register">Register</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
