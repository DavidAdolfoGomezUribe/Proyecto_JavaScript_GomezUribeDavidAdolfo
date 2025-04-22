import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SingleSelectProps {
  onWeaponChange: (armor: string) => void;
  selectedWeapon?: string; // Para darle una opcion por defecto desde page.tsx
}



function getAvailableWeapons() {
  const raw = localStorage.getItem('characterData');
  const data = raw ? JSON.parse(raw) : {};

  const weaponMap = {
    Barbarian: ['Simple weapons', 'Martial weapons'],
    Bard: ['Simple weapons', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
    Cleric: ['Simple weapons'],
    Druid: ['Clubs', 'Daggers', 'Darts', 'Javelins', 'Maces', 'Quarterstaffs', 'Scimitars', 'Slings', 'Spears'],
    Fighter: ['Simple weapons', 'Martial weapons'],
    Monk: ['Simple weapons', 'Shortswords'],
    Paladin: ['Simple weapons', 'Martial weapons'],
    Ranger: ['Simple weapons', 'Martial weapons'],
    Rogue: ['Simple weapons', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
    Sorcerer: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
    Warlock: ['Simple weapons'],
    Wizard: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows']
  };


  const cls = data.class;
  return weaponMap[cls as keyof typeof weaponMap] || [];
}


export default function SingleSelectWeapon({ onWeaponChange, selectedWeapon= '' }: SingleSelectProps) {

  
  const avalibebleWeapons = getAvailableWeapons();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    onWeaponChange(value); // Notifica al padre
  };

  return (
    <div>
      <FormControl sx={{ ml:"1%",mr:"1%", width: "98%"}}>
        <Select 
          style={{color:"white"}}
          displayEmpty
          value={selectedWeapon}
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
          {avalibebleWeapons.map((name) => (
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