"use client"
import React from "react";
import { useState, useEffect } from "react";


export function SelectClass() {

    const [classList, setClassList] = useState<{ name: string }[]>([])
    
    useEffect (()=>{
    
        const fetchClassData = async()=>{
            try{
                const listResponse = await fetch("https://www.dnd5eapi.co/api/classes");
                const data = await listResponse.json();
                setClassList(data.results as { name: string }[])
              

            }catch (error){
                console.error(error)
            }

        }

        fetchClassData();
    },[])
    
    
  return (
    <React.Fragment>
        {classList.map((value,index)=>(
            <>
                <div>
                    <p>Character Class</p>
                    <h1 key={index}>{value.name}</h1>
                </div>

            </>
        ))
        }
    </React.Fragment>

    );
}