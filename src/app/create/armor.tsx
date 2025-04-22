import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SingleSelectProps {
  onArmorChange: (armor: string) => void;
  selectedArmor?: string; // Para darle una opcion por defecto desde page.tsx
}


function getAvailableArmors() {
  const raw = localStorage.getItem('characterData');
  const data = raw ? JSON.parse(raw) : {};

  const armorMap = {
    Barbarian: ['Light armor', 'Medium armor', 'Shields'],
    Bard: ['Light armor'],
    Cleric: ['Light armor', 'Medium armor', 'Shields'],
    Druid: ['Light armor', 'Medium armor', 'Shields'], 
    Fighter: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    Monk: ["no armor"],
    Paladin: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    Ranger: ['Light armor', 'Medium armor', 'Shields'],
    Rogue: ['Light armor'],
    Sorcerer: ["no armor"],
    Warlock: ['Light armor'],
    Wizard: ["no armor"]
  };

  const cls = data.class;
  return armorMap[cls as keyof typeof armorMap] || [];
}




export default function SingleSelectArmor({ onArmorChange, selectedArmor= '' }: SingleSelectProps) {

  
  const avalibebleArmors = getAvailableArmors();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    onArmorChange(value); // Notifica al padre
  };

  return (
    <div>
      <FormControl sx={{ ml:"1%",mr:"1%", width: "98%"}}>
        <Select 
          style={{color:"white"}}
          displayEmpty
          value={selectedArmor}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Armor</em>;
            }
            return selected;
          }}
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Armor</em>
          </MenuItem>
          {avalibebleArmors.map((name) => (
            <MenuItem
              key={name}
              value={name}
              >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}