import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SingleSelectProps {
  onGenderChange: (gender: string) => void;
  selectedGender?: string; // Opcional si quieres controlarlo desde el padre
}

const names = [
  "Male", "Female", "Apache Helicopter"
];

export default function SingleSelect({ onGenderChange, selectedGender = '' }: SingleSelectProps) {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    onGenderChange(value); // Notifica al padre
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3}}>
        <Select
          displayEmpty
          value={selectedGender}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Gender</em>;
            }
            return selected;
          }}
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Gender</em>
          </MenuItem>
          {names.map((name) => (
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