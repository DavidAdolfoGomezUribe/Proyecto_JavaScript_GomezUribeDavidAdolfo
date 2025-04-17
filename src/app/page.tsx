"use client"

// import Link from "next/link";  //para revisar pruebas, descomentar o http://localhost:3000/pruebas
import React from "react";
import { HeaderMain } from "./components/headermain";
import { MainMain } from "./components/mainmain";





function Page() {

  return (
    
    //headermain
    <React.Fragment> 
      {/* <Link  href={"/pruebas"}>enlace para entrar en pruebas  </Link>  */}
      
      <HeaderMain /> 
      
      {/* //mainmain */}
      
      <MainMain />
      
      {/* //footer */}
    </React.Fragment>

  );
}

export default Page;