import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { IoMdPhotos } from 'react-icons/io'
import { ChartPie, Heart, House, LogOut } from 'lucide-react'
import { setTab } from '../../store/slices/navSlice.js'
import { logout } from '../../store/slices/authSlice.js'

const DashboardSidebar = () => {
  const dispatch = useDispatch()

  const sidebar = useSelector((state) => state.nav.sidebar)
  const tab = useSelector((state) => state.nav.tab)
  const author = useSelector((state) => state.auth.author)
  const { pathname } = useLocation()

  return (
    <nav className={`fixed ${!sidebar ? '-translate-x-[500px] sm:translate-x-0' : 'translate-x-0'} top-0 left-0 flex h-full text-lg  bg-[#404145] w-fit`}>
      <div>
        {/* Circle with author initial */}
        <div className='px-6 py-4 my-5 bg-black rounded-full w-fit'>
          {author? author.charAt(0).toUpperCase():'A'}
        </div>

        {/* List items */}
        <div className='flex flex-col gap-5'>
          {
            pathname === "/seller/profile" ? (
              <Link
                onClick={() => dispatch(setTab("photos-management"))}
                className={`flex items-center justify-center w-full gap-2 px-2 py-2 transition-all duration-300 ease-linear rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-100 ${tab === "photos-management" && 'bg-black text-white'}`}
              >
                <IoMdPhotos /> Photo Management
              </Link>
            ) : (
              <Link
                onClick={() => dispatch(setTab("photos-purchased"))}
                className={`flex items-center justify-center w-full gap-2 px-2 py-2  transition-all duration-300 ease-linear rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-100 ${tab === "photos-purchased" && 'bg-black text-white'}`}
              >
                <IoMdPhotos /> Photo Purchased
              </Link>
            )
          }

          <Link
            className={`flex items-center justify-start w-full px-2 gap-2 py-2  transition-all duration-300 ease-linear rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-100 ${tab === "analytics" && 'text-white bg-black'}`}
            onClick={() => dispatch(setTab("analytics"))}
          >
            <ChartPie /> Analytics
          </Link>

          <Link
            className={`flex items-center justify-start w-full gap-2 px-2 py-2  transition-all duration-300 ease-linear rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-100 ${tab === "orders" && 'text-white bg-black'}`}
            onClick={() => dispatch(setTab("orders"))}
          >
            <ChartPie /> Orders
          </Link>

          <Link
            className={`flex items-center justify-start w-full gap-2 px-2 py-2  transition-all duration-300 ease-linear rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-100 ${tab === "favourites" && 'text-white bg-black'}`}
            onClick={() => dispatch(setTab("favourites"))}
          >
            <Heart /> Favourites
          </Link>

          <Link
            className={`flex items-center justify-start w-full gap-2 px-2 py-2  transition-all duration-300 ease-linear rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-100 ${tab === "home" && 'text-white bg-black'}`}
            onClick={() => dispatch(setTab("home"))}
          >
            <House /> Home
          </Link>

          <Link
            className='flex items-center justify-start w-full gap-2 px-2 py-2 transition-all duration-300 ease-linear rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-100'
            onClick={() => {dispatch(logout())}}
          >
            <LogOut /> Logout
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default DashboardSidebar
