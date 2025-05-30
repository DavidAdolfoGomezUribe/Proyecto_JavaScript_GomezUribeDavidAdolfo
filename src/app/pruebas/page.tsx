"use client" 

import { useState } from "react"

import {NewDiv ,Button } from "./pruebas"

import { FullWidthTabs } from "./pruebas";

import { HowToMap } from "./pruebas";

import { SelectClass } from "./pruebas";

import StatsSlider from "./pruebas";

import React from "react";


function Saludar (){
  const [hola] = useState<string>("hola")
  
  return(
    <p>{hola}</p>
  )
  
}

function Page() {
  const [count, setCount] = useState(0);

  return (
    
    <React.Fragment>

      <Saludar />

      <h1>{count}</h1>
      <Button setCount={setCount} count={count} />
      <NewDiv />
      <FullWidthTabs />
      <HowToMap />
      <SelectClass />
      <StatsSlider 
        onStrengthChange={(value: number) => console.log("Strength changed:", value)} 
        onDexterityChange={(value: number) => console.log("Dexterity changed:", value)} 
      />

    </React.Fragment>
  );
}

export default Page;

