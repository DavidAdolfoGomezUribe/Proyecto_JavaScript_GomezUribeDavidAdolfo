import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'; 



export default function Review() {

  const router = useRouter(); 

  function getLocalStorageInfo(){
    const data = localStorage.getItem("characterData");
    return data ? JSON.parse(data) : null;
  }

  const character = getLocalStorageInfo();

  const ListaImagenes: string[] = [ 
    "Dragonborn.png", "Dwarf.png", "Elf.png", "Gnome.png", 
    "Half-Elf.png","Half-Orc.png", "Halfling.png", "Human.png", "Tiefling.png"
  ];
  
const getRaceImage = (raceName: string) => {
  const formattedName = `${raceName}.png`;  

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
    
      
    <Image alt="hero" src={getRaceImage(character.race)} width={500} height={500} />
      
    <div>
        <h1>Basic Information</h1>
        <div>
            <div> 
                <p><strong>Name:</strong></p>
                <p><strong>Gender:</strong> </p>
                <p><strong>Class:</strong> </p>
                <p><strong>Race:</strong> </p>
            </div>
            <div>
                <p>{character.name}</p>
                <p>{character.gender}</p>
                <p>{character.class}</p>
                <p>{character.race}</p>
            </div>

        </div>
    </div>
      
    <div>
      <h1>Equiment</h1>
      <div>
        <div>
            <p><strong>Armor:</strong></p>
            <p><strong>Weapon:</strong></p>
            <p><strong>Feature:</strong></p>
            <p><strong>Spell:</strong></p>
        </div>
        <div>
            <p>{character.armor}</p>
            <p>{character.weapon}</p>
            <p>{character.feature}</p>
            <p>{character.spell}</p>
        </div>
        
      </div>
    </div>    
    
    <div>
      <h1>Character Stats</h1>
      <div>
        <div> 
            <h1>Str</h1>
            <p>{character.strength}</p>
        </div>
        <div>
            <h1>Dex</h1>
            <p>{character.dexterity}</p>
        </div>
        <div>
          <h1>Cons</h1>
          <p>{character.constitution}</p>
        </div>
        <div>
          <h1>Int</h1>
          <p>{character.intelligence}</p>
        </div>
        <div>
          <h1>Wis</h1>
          <p>{character.wisdom}</p>
        </div>
        <div>
          <h1>Cha</h1>
          <p>{character.charisma}</p>
        </div>
      </div>  
    </div>
      
      <button onClick={handleSave}>Save</button>

    </React.Fragment>
  );
}