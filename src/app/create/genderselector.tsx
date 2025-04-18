import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const names = [
  "Male", "Female", "Apache Helicopter"
];

export default function SingleSelect() {

  const [selectedName, setSelectedName] = React.useState<string>(''); 
  const handleChange = (event: SelectChangeEvent<string>) => { 
    setSelectedName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3}}>
        <Select
          displayEmpty
          value={selectedName}
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