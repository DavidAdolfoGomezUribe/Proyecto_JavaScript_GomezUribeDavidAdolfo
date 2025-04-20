"use client"
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";


interface Race {
  name: string;
  alignment: string;
  url: string;
}

// Lista de imágenes disponibles
const ListaImagenes: string[] = [ 
  "Dragonborn.png", "Dwarf.png", "Elf.png", "Gnome.png", 
  "Half-Elf.png","Half-Orc.png", "Halfling.png", "Human.png", "Tiefling.png"
];

interface SingleRaceProps {
  onRaceChange: (race: string) => void;
  selectedRace?: string; // Opcional si quieres controlarlo desde el padre
}


export function RaceList({onRaceChange,selectedRace = ""}:SingleRaceProps ) {

  const [races, setRaces] = useState<Race[]>([]);
  const [hoveredRace, setHoveredRace] = useState<string | null>(null);
  const [selectedRaceLocal, setSelectedRaceLocal] = useState<string>(selectedRace);

  useEffect(() => {
    const fetchRacesData = async () => {
      try {
        const listResponse = await fetch("https://www.dnd5eapi.co/api/races");
        const raceList = await listResponse.json();
        
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

  const handleRaceSelect = (raceName: string) => {
    setSelectedRaceLocal(raceName);
    onRaceChange(raceName); // Notifica al padre
  };

  // Función para obtener la imagen correcta
  const getRaceImage = (raceName: string) => {
    const formattedName = `${raceName.replace(/\s+/g, '-')}.png`;
    return ListaImagenes.includes(formattedName) 
      ? `/img/${formattedName}`
      : '/img/Dragonborn.png';
  };

  return (
    <div>
      {races.map((race: Race) => (
        <div 
        
        key={race.url} 
        onClick={() => handleRaceSelect(race.name)}
        className={`race-card ${selectedRaceLocal === race.name ? 'selected' : ''}`}
        onMouseOver={() => setHoveredRace(race.url)}
        onMouseOut={() => setHoveredRace(null)}
        >
          <div className="race-info">
            <h2 
             
            >
              {race.name}
              {hoveredRace === race.url && (
                <Image 
                  alt={race.name}
                  src={getRaceImage(race.name)}
                  width={500} 
                  height={500}
                  onError={(e) => {
                    // Fallback por si hay error de carga
                    (e.target as HTMLImageElement).src = '/img/Dragonborn.png';
                  }}
                />
              )}
            </h2>
            <p className="alignment"><strong>Description: </strong>{race.alignment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}