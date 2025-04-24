"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Character {
  id: string;
  name: string;
  gender: string;
  class: string;
  race: string;
  armor: string;
  weapon: string;
  feature: string;
  spell: string;
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
}



function Page() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const ListaImagenes: string[] = [ 
    "Dragonborn.png", "Dwarf.png", "Elf.png", "Gnome.png", 
    "Half-Elf.png","Half-Orc.png", "Halfling.png", "Human.png", "Tiefling.png"
  ];
  
  const getRaceImage = (raceName: string) => {
    const formattedName = `${raceName}.png`;  

    return ListaImagenes.includes(formattedName) 
      ? `/img/${formattedName}`
      : '/img/apachehelicopter.png';
  };


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://67f854922466325443ec6b72.mockapi.io/characters');
        if (!response.ok) {
          throw new Error('Error al obtener los personajes');
        }
        const data = await response.json();
        setCharacters(data);
        // Inicializar todos los cards como colapsados
        const initialExpandedState = data.reduce((acc: Record<string, boolean>, character: Character) => {
          acc[character.id] = false;
          return acc;
        }, {});
        setExpandedCards(initialExpandedState);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocurrió un error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const toggleDetails = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this character?')) {
      return;
    }

    try {
      const response = await fetch(`https://67f854922466325443ec6b72.mockapi.io/characters/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCharacters(prev => prev.filter(character => character.id !== id));
        alert('Successfully removed character');
      } else {
        throw new Error('Error deleting character');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Ocurrió un error al eliminar el personaje');
    }
  };

  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <React.Fragment>
      <main className="mycharactersmaincontainer"> 
        <h1>Character List</h1>
        {characters.length === 0 ? (
          <p>There are no saved characters</p>
        ) : (
          <div className="character-list">
            {characters.map((character) => (
              <div key={character.id} className="character-card">
                <div className="character-basic-info">
                  <h2>{character.name}</h2>
                   <Image alt="hero"
                        src={character?.race ? getRaceImage(character.race) : '/img/apachehelicopter.png'}
                        width={500} 
                        height={500} />
                  <p><strong>Race:</strong> {character.race}</p>
                  <p><strong>Clase:</strong> {character.class}</p>
                  <p><strong>Gender:</strong> {character.gender}</p>
                </div>
                
                <div className="character-actions">
                  <button 
                    onClick={() => toggleDetails(character.id)}
                    className="details-button"
                  >
                    {expandedCards[character.id] ? 'Hide' : 'View'}
                  </button>
                  
                  <button 
                    onClick={() => handleDelete(character.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>

                {expandedCards[character.id] && (
                  <div className="character-details">
                    <div>
                      

                      <h2>Equipment</h2>
                      <p><strong>Armor:</strong> {character.armor}</p>
                      <p><strong>Weapon:</strong> {character.weapon}</p>
                      <p><strong>Feature:</strong> {character.feature}</p>
                      <p><strong>Spell:</strong> {character.spell}</p>
                    </div>
                    <div>

                      <h2>Stats</h2>
                      <p><strong>Strength:</strong> {character.strength}</p>
                      <p><strong>Dexterity:</strong> {character.dexterity}</p>
                      <p><strong>Constitution:</strong> {character.constitution}</p>
                      <p><strong>Intelligence:</strong> {character.intelligence}</p>
                      <p><strong>Wisdom:</strong> {character.wisdom}</p>
                      <p><strong>Charisma:</strong> {character.charisma}</p>
                    </div>
                  </div>
                )}
                <hr />
              </div>
            ))}
          </div>
          
        )} 

        <Link  href={"../"}>Back to main menu</Link>

        </main>
    </React.Fragment>
  );
}

export default Page;