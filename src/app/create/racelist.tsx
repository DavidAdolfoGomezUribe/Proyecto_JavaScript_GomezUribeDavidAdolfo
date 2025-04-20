"use client"

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Race {
  name: string;
  alignment: string;  // Nueva propiedad
  url: string;        // Para hacer fetch de cada raza individual
}

export function RaceList() {
  const [races, setRaces] = useState<Race[]>([]);
  const [mostrarImagen, setMostrarImagen] = useState(false); //useState es un hook(funcion especial) que permite usar carateristicas de react
  
  useEffect(() => {
    const fetchRacesData = async () => {
      try {
        // Primero obtenemos la lista de razas
        const listResponse = await fetch("https://www.dnd5eapi.co/api/races");
        const raceList = await listResponse.json();
        
        // Hacemos fetch de los detalles de cada raza individualmente
        const racesWithDetails = await Promise.all(
          raceList.results.map(async (race: { url: string }) => {
            const detailResponse = await fetch(`https://www.dnd5eapi.co${race.url}`);
            const raceDetails = await detailResponse.json();
            return {
              name: raceDetails.name,
              alignment: raceDetails.alignment,
              url: raceDetails.url
            };
          })
        );
        
        setRaces(racesWithDetails);
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    };

    fetchRacesData();
  }, []);

  return (
    <div>
      {races.map((race: Race) => (
        <div key={race.url} className="race-card">
       
          <div className="race-info">
            <h2 
                onMouseOver={() => setMostrarImagen(true)}//cuando el mause esta sobre el elemento 
                onMouseOut={() => setMostrarImagen(false)}//cuando el mause esta afuera del elemento
             >{race.name}</h2>
             {mostrarImagen && <Image alt="logo" src={"/img/dragonemblem.png"} width={25} height={25}/>}
            <p className="alignment"><strong>Description: </strong>  {race.alignment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}