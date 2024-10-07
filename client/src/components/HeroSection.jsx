import { Search} from 'lucide-react'
const HeroSection = () => {
  return (
  
      
    <div className="sm:w-[80vw] py-36 h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center ">
    
        <h1 className='mt-10 text-xl text-center text-gray-400 sm:text-2xl md:text-3xl md:mt-24 xl:mt-36 xl:text-4xl '>Shop the Latest, Discover the Coolest</h1>
      <form className="absolute flex items-center justify-center sm:mt-[30%] md:mt-[32%] xl:mt-[25%] mt-48" >
       
        <input type="search" id="search" name="search" className="py-5 px-5 w-[80vw] sm:w-[60vw] text-sm sm:text-3xl mx-auto outline-none border rounded-full bg-[#171616] font-['Monument'] " placeholder="Search your assets... "/>
          <Search className='absolute right-4' />
      </form>
    </div>

  )
}

export default HeroSection