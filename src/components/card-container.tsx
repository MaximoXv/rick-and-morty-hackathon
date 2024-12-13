import React, { useEffect, useState } from 'react'
import { Card } from './card'
import axios from 'axios';

interface Character{
    id: string;
    name: string;
    species: string;
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

    if (loading) {
        return <div className="text-center text-xl font-bold">Cargando...</div>;
      }

  return (
    <div className='flex justify-center m-auto w-5/6 flex-wrap gap-2'>
        {characters?characters.map((character)=>{
            return <Card key={character.id} name={character.name} specie={character.species} image={character.image}/>
        }):[]}

    </div>
  )
}
