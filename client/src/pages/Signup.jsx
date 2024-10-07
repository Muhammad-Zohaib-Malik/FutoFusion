import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] mt-8">
      <div className="w-[80vw] px-6 py-8  border border-gray-500 text-white rounded-3xl sm:w-[30vw] md:w-[50vw] lg:w-[30vw] xl:w-[35vw] shadow-lg">
        <h1 className="mb-6 text-3xl font-semibold tracking-widest text-center">Let's Connect</h1>
        <form>
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                className="w-full px-4 py-2 tracking-wide text-white placeholder-gray-400 bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                id="name"
                placeholder="John"
                required
                autoComplete="off"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                className="w-full px-4 py-2 tracking-wide text-white placeholder-gray-400 bg-gray-800 border-none rounded-lg focus:ring-2 "
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
                autoComplete="off"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                className="w-full px-4 py-2 tracking-wide text-white bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-blue-500"
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                required
                autoComplete="off"
              />
            </div>

            {/* Account Type Dropdown */}
            <div className="mt-4">
              <label htmlFor="accountType" className="block mb-2 text-sm font-medium">
                Account Type
              </label>
              <select 
                className="w-full px-4 py-2 tracking-wide text-white bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-zinc-500"
                name="accountType"
                id="accountType"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 font-medium tracking-wide transition-all duration-200 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-950"
          >
            Sign Up
          </button>
          <Link to={'/login'} className='text-[13px] mt-3 flex justify-end text-gray-500'>Login</Link>
        </form>
        
      </div>
    </div>
  );
}

export default Signup;
