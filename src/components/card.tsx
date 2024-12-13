import { useState } from "react";
import { Character } from "./card-container";

interface CardProps{
    character: Character;
}

export const Card = ({character}: CardProps) => {
    const [modal,setModal]= useState(false);
  


  return (
    <>
    <div onClick={() => setModal(!modal)} className='flex flex-col items-center min-w-24 max-w-40 border-2 border-black rounded-md'>
        <img className='w-full' src={character.image} alt="" />
        <div className='flex justify-between items-center gap-1'>
            <span className='text-base'>{character.name}</span>
            <span className={`text-sm px-2 py-1 rounded-lg ${character.species=="Human"?"bg-blue-500 text-white":"bg-green-500 text-white"}`}>{character.species}</span>
        </div>
    </div>
    {modal?
        <div className="absolute z-10 w-full h-full bg-black bg-opacity-85 flex justify-center items-center">
            <div className='flex flex-col items-center min-w-24 max-w-40 border-2 border-black rounded-md'>
        <img className='w-full' src={character.image} alt="" />
        <div className='flex justify-between items-center gap-1'>
            <span className='text-base'>{character.name}</span>
            <span className={`text-sm px-2 py-1 rounded-lg ${character.species=="Human"?"bg-blue-500 text-white":"bg-green-500 text-white"}`}>{character.species}</span>
        </div>
    </div>
        </div>
    : ""}
    </>
  )
}
