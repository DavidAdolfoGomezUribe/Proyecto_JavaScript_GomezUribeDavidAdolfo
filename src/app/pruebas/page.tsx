"use client" 

import { useState } from "react"

import {NewDiv ,Button } from "./pruebas"

import { FullWidthTabs } from "./pruebas";


function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <Button setCount={setCount} count={count} />
      <NewDiv />
      <FullWidthTabs />
    </div>
  );
}

export default Page;

