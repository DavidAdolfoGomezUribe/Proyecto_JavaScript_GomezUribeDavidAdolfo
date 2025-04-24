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
  harisma: string;
}

function Page() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://67f854922466325443ec6b72.mockapi.io/characters');
        if (!response.ok) {
          throw new Error('Error al obtener los personajes');
        }
        const data = await response.json();
        setCharacters(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocurrió un error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

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
              <h2>Name: {character.name}</h2>
              <p><strong>Clase:</strong> {character.class}</p>
              <p><strong>Raza:</strong> {character.race}</p>
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
              <p><strong>Carisma:</strong> {character.harisma}</p>
              <hr />
            </div>
          ))}
        </div>
      )}

      <Link href={"../"}>Regresar al menu anterior</Link>
    </React.Fragment>
  );
}

export default Page;