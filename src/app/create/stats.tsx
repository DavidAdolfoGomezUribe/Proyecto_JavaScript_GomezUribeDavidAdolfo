import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// 1. Define los tipos y constantes reutilizables
type StatKey = "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma";
type Stats = Record<StatKey, number>;

interface Props {
  onStatsChange: (stat: StatKey, value: number) => void;
}

const INITIAL_STATS: Stats = {
  strength: 8,
  dexterity: 8,
  constitution: 8,
  intelligence:8,
  wisdom:8,
  charisma:8,
};

// 2. Componente optimizado
export default function StatsSlider({ onStatsChange }: Props) {
  const [stats, setStats] = useState<Stats>(INITIAL_STATS);

  // Función genérica para manejar cualquier stat
  const handleStatChange = (stat: StatKey) => 
    (event: Event, newValue: number | number[]) => {
      const value = newValue as number;
      setStats(prev => ({ ...prev, [stat]: value }));
      onStatsChange(stat, value); // Notifica al padre
    };

  return (
    <Box sx={{ width: "100%" }}>
      {Object.entries(stats).map(([statKey, value]) => (
        <div key={statKey}>
          <h1>{statKey.charAt(0).toUpperCase() + statKey.slice(1)}: {value}</h1>
          <Slider
            value={value}
            onChange={handleStatChange(statKey as StatKey)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={20}
            
          />
        </div>
      ))}
    </Box>
  );
}