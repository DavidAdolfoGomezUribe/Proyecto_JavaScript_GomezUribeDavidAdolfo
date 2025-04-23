import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'; 



export default function Review() {

  const router = useRouter(); 

  function getLocalStorageInfo() {
    const data = localStorage.getItem("characterData");
    return data ? JSON.parse(data) : null;
  }

  const character = getLocalStorageInfo();

  const ListaImagenes: string[] = [ 
    "Dragonborn.png", "Dwarf.png", "Elf.png", "Gnome.png", 
    "Half-Elf.png","Half-Orc.png", "Halfling.png", "Human.png", "Tiefling.png"
  ];
  
  const getRaceImage = (raceName: string) => {
    const formattedName = `${raceName.replace(/\s+/g, '-')}.png`;
    return ListaImagenes.includes(formattedName) 
      ? `/img/${formattedName}`
      : '/img/Dragonborn.png';
  };

  const handleSave = async () => {
    
    if (!character || 
        !character.name || 
        !character.gender || 
        !character.class || 
        !character.race || 
        !character.armor || 
        !character.weapon || 
        !character.feature || 
        !character.spell || 
        !character.strength || 
        !character.dexterity || 
        !character.constitution || 
        !character.intelligence || 
        !character.wisdom || 
        !character.charisma) {
      alert("Campos por completar");
      return;
    }

    try {
      const response = await fetch('https://67f854922466325443ec6b72.mockapi.io/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character),
      });

      if (response.ok) {
        localStorage.removeItem("characterData");
        alert("Personaje guardado exitosamente");
        router.push('../');
      } else {
        throw new Error('Error al guardar el personaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Ocurrió un error al guardar el personaje");
    }
  };

  return (
    <React.Fragment>
      
      <div>
        <h1>Review Your Character</h1>
        <p>Review your character details before saving.</p>
      </div>
      
      <Image alt="hero" src={getRaceImage(character.class)} width={50} height={50} />

      <div>
        <h1>Basic Information</h1>

        <p>Name: {character.name}</p>
        <p>Gender: {character.gender}</p>
        <p>Clase: {character.class}</p>
        <p>Race: {character.race}</p>
        
        <h1>Equiment</h1>
        <p>Armor: {character.armor}</p>
        <p>Weapon: {character.weapon}</p>
        <p>Feature: {character.feature}</p>
        <p>Spell: {character.spell}</p>
        
        <h1>Character Stats</h1>
        <p>Strength: {character.strength}</p>
        <p>Dexterity: {character.dexterity}</p>
        <p>Constitution: {character.constitution}</p>
        <p>Intelligence: {character.intelligence}</p>
        <p>Wisdom: {character.wisdom}</p>
        <p>Charisma: {character.charisma}</p>
      </div>
      
      <button onClick={handleSave}>Save</button>

    </React.Fragment>
  );
}