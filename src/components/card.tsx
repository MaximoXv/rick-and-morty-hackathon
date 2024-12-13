
interface CardProps{
    name: string;
    specie: string;
    image: string;
}

export const Card = ({image,name, specie}: CardProps) => {



  return (
    <div className='flex flex-col items-center min-w-24 max-w-40 border-2 border-black rounded-md'>
        <img className='w-full' src={image} alt="" />
        <div className='flex justify-between items-center gap-1'>
            <span className='text-base'>{name}</span>
            <span className={`text-sm px-2 py-1 rounded-lg ${specie=="Human"?"bg-blue-500 text-white":"bg-green-500 text-white"}`}>{specie}</span>
        </div>
    </div>
  )
}
