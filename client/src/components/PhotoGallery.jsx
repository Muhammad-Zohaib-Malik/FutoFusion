
import { FaShoppingCart } from "react-icons/fa";
import ImageCard from "./ImageCard";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 sm:my-10">
      <h1 className="my-10 text-2xl font-semibold tracking-widest sm:text-3xl ">PhotoGallery</h1>
      
      {/*  */}
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Image Card */}

        <ImageCard title="The Beach" author="@Zohaibaay" img="https://images.pexels.com/photos/28217963/pexels-photo-28217963/free-photo-of-a-mountain-range-with-a-road-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load " price={10} icon1={ <FaShoppingCart className="text-2xl text-black transition-all duration-300 ease-linear cursor-pointer hover:scale-100"/>} icon2={
            <IoIosHeart className="text-2xl text-red-600 transition-all duration-300 ease-linear cursor-pointer hover:scale-100"/>
          
        }/>

        <ImageCard title="The Sunlight" author="@Zohaibaay" img="https://images.pexels.com/photos/1654698/pexels-photo-1654698.jpeg?auto=compress&cs=tinysrgb&w=600" price={20} icon1={ <FaShoppingCart className="text-2xl text-black transition-all duration-300 ease-linear cursor-pointer hover:scale-100"/>} icon2={
            <IoIosHeart className="text-2xl text-red-600 transition-all duration-300 ease-linear cursor-pointer hover:scale-100"/>
          
        }/>
       


        
       </div>
    </div>
  )
}

export default PhotoGallery