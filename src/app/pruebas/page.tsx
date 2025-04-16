"use client" 

import { useState } from "react"

import {NewDiv ,Button } from "../pruebas"


function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <Button setCount={setCount} count={count} />
      <NewDiv />
    </div>
  );
}

export default Page;