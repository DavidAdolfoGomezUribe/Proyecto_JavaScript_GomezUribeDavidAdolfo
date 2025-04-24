"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";

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
    if (!confirm('¿Estás seguro de que quieres eliminar este personaje?')) {
      return;
    }

    try {
      const response = await fetch(`https://67f854922466325443ec6b72.mockapi.io/characters/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCharacters(prev => prev.filter(character => character.id !== id));
        alert('Personaje eliminado correctamente');
      } else {
        throw new Error('Error al eliminar el personaje');
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
      <h1>Lista de Personajes</h1>
      {characters.length === 0 ? (
        <p>No hay personajes guardados</p>
      ) : (
        <div className="character-list">
          {characters.map((character) => (
            <div key={character.id} className="character-card">
              <div className="character-basic-info">
                <h2>{character.name}</h2>
                <p><strong>Raza:</strong> {character.race}</p>
                <p><strong>Clase:</strong> {character.class}</p>
              </div>
              
              <div className="character-actions">
                <button 
                  onClick={() => toggleDetails(character.id)}
                  className="details-button"
                >
                  {expandedCards[character.id] ? 'Ocultar' : 'Detalles'}
                </button>
                <button 
                  onClick={() => handleDelete(character.id)}
                  className="delete-button"
                >
                  Eliminar
                </button>
              </div>

              {expandedCards[character.id] && (
                <div className="character-details">
                  <p><strong>Género:</strong> {character.gender}</p>
                  
                  <h3>Equipo</h3>
                  <p><strong>Armadura:</strong> {character.armor}</p>
                  <p><strong>Arma:</strong> {character.weapon}</p>
                  <p><strong>Habilidad:</strong> {character.feature}</p>
                  <p><strong>Hechizo:</strong> {character.spell}</p>
                  
                  <h3>Atributos</h3>
                  <p><strong>Fuerza:</strong> {character.strength}</p>
                  <p><strong>Destreza:</strong> {character.dexterity}</p>
                  <p><strong>Constitución:</strong> {character.constitution}</p>
                  <p><strong>Inteligencia:</strong> {character.intelligence}</p>
                  <p><strong>Sabiduría:</strong> {character.wisdom}</p>
                  <p><strong>Carisma:</strong> {character.charisma}</p>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      )} 

      <Link href={"../"}>Regresar al menu anterior</Link>

      <style jsx>{`
      

        .character-list {
          color:black
          display: grid;
          gap: 20px;
          margin-top: 20px;
          }
          
          .character-card {
            color:black
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            background-color: #252525;
            
        }
        
        .character-basic-info {
          margin-bottom: 10px;
          color:black
        }
        
        .character-actions {
          color:black
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        
        .details-button {
          background-color: #4CAF50;
          color:black
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .details-button:hover {
          background-color: #45a049;
        }
        
        .delete-button {

          background-color: #f44336;
          color:black
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .delete-button:hover {
          color:black
          background-color: #d32f2f;
        }
        
        .character-details {
          color:black
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #eee;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Page;