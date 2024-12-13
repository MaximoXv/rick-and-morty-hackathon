
import { useEffect, useState } from 'react';
import { Card } from './card'
import axios from 'axios';

export interface Character{
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

export const CardContainer = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setCharacters(response.data.results);
                setLoading(false);
              } catch (error) {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
              }  
        };
        fetchCharacters();
    }, []);

    const orderToAZ = ()=>{
        const sortedCharacters = [...characters].sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          console.log(sortedCharacters);
          setCharacters(sortedCharacters);

    }
    const orderToZA = ()=>{
        const sortedCharacters = [...characters].sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
      
          setCharacters(sortedCharacters);
    }

    if (loading) {
        return <div className="text-center text-xl font-bold">Cargando...</div>;
      }

  return (
    <div className='flex flex-col gap-2'>
    <div className='flex justify-center gap-2 items-center'>
        <button className='px-3 py-1 rounded-md bg-black text-white' onClick={orderToAZ}>A-Z</button>
        <button className='px-3 py-1 rounded-md bg-white text-black border-black border-2' onClick={orderToZA}>Z-A</button>
    </div>
    <div className='flex justify-center m-auto w-5/6 flex-wrap gap-2 relative'>
        {characters?characters.map((character)=>{
            return <Card key={character.id} character={character}/>
        }):[]}

    </div>
    </div>
  )
}
