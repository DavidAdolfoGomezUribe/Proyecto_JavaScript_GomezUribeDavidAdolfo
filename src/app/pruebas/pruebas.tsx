//Este archivo esta creado para poder hacer experimentos de funcionalidad
//Debido a que la sintaxis es nueva, este es un mero borrador que permitira salir de dudas en el futuro


"use client"; //esto es para decirle a next.js que redenderice esto del lado del cliente, es necesario para los componentes de react
import { Dispatch, SetStateAction, useState } from "react"; //asi se importa en ts



// esta funcion lo que hace es crear un nuevo elemento div cuando el cursor pasa por arriba del contenedor
export function NewDiv() { 

const [mostrarMensaje, setMostrarMensaje] = useState(false); //useState es un hook(funcion especial) que permite usar carateristicas de react
//por lo tanto debe primero declararse como esta arriba, useState(false) es el estado inicial
  return (
    <div>
      <h1
        onMouseOver={() => setMostrarMensaje(true)}//cuando el mause esta sobre el elemento 
        onMouseOut={() => setMostrarMensaje(false)}//cuando el mause esta afuera del elemento
      >
        pasa el mouse por aqui
      </h1>
      
      {mostrarMensaje && <p>Hola a todos</p>}{/*“Si mostrarMensaje es verdadero, entonces muestra el <p>Hola a todos</p>”.Declaracion de ternarios */}
    </div>
  );
}

// Props del botón //los props son como los parámetros de una función, pero para componentes.
type ButtonProps = {
  setCount: Dispatch<SetStateAction<number>>; //esto es para declarar una funcion que despacha un nuevo estado
  count: number;
};

// Componente Button
export function Button({ setCount, count }: ButtonProps) { //parametros de la funcion en este caso count se le ingresa del lado donde c exporta
  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}






// import Link from "next/link";  //para revisar pruebas, descomentar o http://localhost:3000/pruebas

//utilizacion del componente Tab, como implementarlo

import React from "react";
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}



function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box style={{ background: "blue" }} sx={{ width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Three" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        Item four
      </TabPanel>

    </Box>
  );
}

// array.map((elemento, índice, arrayOriginal) => { ... })
const MapElements = ["arroz", "papa","yuca"]

export function HowToMap (){
  return ( 

    <React.Fragment>
      <h1>hola</h1>
      {MapElements.map((elements , index) => (
        <div key={index}>{elements}</div>
      )
      )}

    </React.Fragment>
 
  )
}


// /my-next-app
//   ├─ /app                # Carpeta principal de Next.js 13+ (App Router)
//   │   ├─ /home           # Página de inicio
//   │   │   └─ page.tsx    # Componente de la página dðe inicio
//   │   ├─ /pruebas        # Otra página de ejemplo
//   │   │   └─ page.tsx
//   │   └─ layout.tsx      # Layout global
//   ├─ /components         # Componentes reutilizables
//   │   ├─ Header.tsx      # Componente de Header
//   │   ├─ Footer.tsx      # Componente de Footer
//   │   ├─ Main.tsx        # Componente de Main
//   │   └─ Button.tsx      # Otro componente, ejemplo
//   ├─ /public             # Archivos estáticos (imágenes, favicon, etc.)
//   │   └─ fonts           # Fuentes
//   ├─ /styles             # Archivos de CSS o Tailwind
//   ├─ /types              # Archivos de tipos TypeScript
//   ├─ /node_modules       # Dependencias
//   ├─ tsconfig.json       # Configuración de TypeScript
//   └─ package.json        # Configuración del proyecto