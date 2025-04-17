"use client"

// import Link from "next/link";  //para revisar pruebas, descomentar o http://localhost:3000/pruebas
import React from "react";
import { HeaderMain } from "./components/headermain";
import { MainMain } from "./components/mainmain";
import { FooterMain } from "./components/footermain";




function Page() {

  return (
    
    //headermain
    <React.Fragment> 
      {/* <Link  href={"/pruebas"}>enlace para entrar en pruebas  </Link>  */}
      
      <HeaderMain /> 
      
      {/* //mainmain */}
      
      <MainMain />
      
      {/* //footer */}

      <FooterMain />
    
    </React.Fragment>

  );
}

export default Page;