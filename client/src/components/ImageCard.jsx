

const ImageCard = ({id,img,title,price,author,icon1,icon2}) => {
  return (
     <div className="p-2 mb-3 shadow-lg rounded-2xl bg-zinc-800">
              
        <div className="w-full h-[200px] overflow-hidden rounded-2xl">
          <img className="w-full h-full transition-all duration-500 ease-linear transform cursor-pointer hover:scale-105" src={img} alt={title} />
        </div>
        <p className="px-4 py-1 mt-2 tracking-wider text-gray-300 bg-black rounded-full w-fit">
         {author}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="mt-2 text-xs font-normal tracking-wider">
            <h3 className="">{title}</h3>
            <p className="">Price :${price}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
           {icon1}
           {icon2}
          
          </div>
        </div>  
          </div>

  )
}

export default ImageCard