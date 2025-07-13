const Card = ({image, title, description, price}) => {
    return (
 <div className="border border-slate-300 rounded-xl cursor-pointer p-4 shadow-md hover:bg-slate-100 transition duration-300 bg-white">
    <img className='w-32 h-48 object-contain mx-auto mb-3 transition-transform duration-300 hover:scale-105 ' src={image} />
    <h1 className="text-xl font-semibold mt-2 text-green-500 text-center">{title}</h1>
    <p className="p-2 text-base font-normal text-black text-justify">{description}</p>
     <h4 className="text-xl font-bold mt-3">{price}</h4>
     <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm">
          Buy Now
        </button>
 </div>


    )
}


export default Card;