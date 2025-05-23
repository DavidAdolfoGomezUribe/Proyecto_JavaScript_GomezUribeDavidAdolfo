import * as React from 'react';
import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SingleSelectProps {
  onFeatureChange: (feature: string) => void;
  selectedFeature?: string;
}

export default function SingleSelectFeatures({ onFeatureChange, selectedFeature = '' }: SingleSelectProps) {
  const [availableFeatures, setAvailableFeatures] = useState<string[]>([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const raw = localStorage.getItem('characterData');
        const data = raw ? JSON.parse(raw) : {};
        const characterClass = data.class?.toLowerCase(); // Asegurar minúsculas para la API
        
        if (!characterClass) return;

        const response = await fetch(`https://www.dnd5eapi.co/api/classes/${characterClass}/features`);
        const featuresData = await response.json();
        
        const features = featuresData.results.map((element: { name: string }) => element.name);
        
        setAvailableFeatures(features);
      } catch (error) {
        console.error(error);
        setAvailableFeatures([]);
      }
    };

    fetchFeatures();
  }, []); 

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    onFeatureChange(value);
  };

  return (
    <div>
      <FormControl sx={{ ml: "1%", mr: "1%", width: "98%" }}>
        <Select
          style={{ color: "white" }}
          displayEmpty
          value={selectedFeature}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Features</em>;
            }
            return selected;
          }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Features</em>
          </MenuItem>
          {availableFeatures.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}