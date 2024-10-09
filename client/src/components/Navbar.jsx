import { Link ,useLocation} from "react-router-dom"

const Navbar = () => {

  const {pathname}=useLocation()

  return (
    <nav className={`flex flex-col items-start justify-between gap-1 p-5 font-semibold sm:flex-row sm:items-center sm:gap-0 ${pathname==="/seller/profile" || pathname==="/buyer/profile" ? 'hidden' : ""}`}>
      <div className="flex items-center justify-between">
      <Link to="/" className="text-3xl font-bold font-[Monument] tracking-wider leading-4">FutoFusion</Link>
      </div>
      <ul className="flex gap-5 text-lg font-semibold text-gray-400 ">
        
        <Link to="/login" className="cursor-pointer sm:p-2">Log In</Link>
        <Link to="/signup" className="cursor-pointer sm:p-2">Sign Up</Link>

      </ul>
    </nav>
  )
}

export default Navbar