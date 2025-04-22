"use client"
import React from "react";
import { useState, useEffect } from "react";
import { Sword } from 'lucide-react';


interface SingleSelecClassProps {
    onSelectClassChange:(selectedClass: string) => void;
    selectedClass?:string;
}

interface ClassItem {
    name: string;
    url: string;
}


export function SelectClass({onSelectClassChange,selectedClass=""}:SingleSelecClassProps) {
    const [classList, setClassList] = useState<ClassItem[]>([])
    const [selectedClassLocal,setSelectedClassLocal] = useState<string>(selectedClass)
    
    const handleSelectClass = (className:string) => {
        setSelectedClassLocal(className);
        onSelectClassChange(className);
    }

    
    
    useEffect (()=>{
    
        const fetchClassData = async()=>{
            try{
                const listResponse = await fetch("https://www.dnd5eapi.co/api/classes");
                const data = await listResponse.json();
                setClassList(data.results)
              

            }catch (error){
                console.error(error)
            }
        }

        fetchClassData();
    },[])
    
    
  return (
    <div className="class-selector-container">
    {classList.map((classItem:ClassItem) => (
        <div 
            key={classItem.url}
            className={`class-option ${selectedClassLocal === classItem.name ? 'selected' : ''}`}
            onClick={() => handleSelectClass(classItem.name)}
        >   
            
            <Sword style={{width:"5vw",height:"5vw"}}/>
            <div>
                <h2>{classItem.name}</h2>
                <p>Character class</p>
            </div>

        </div>
    ))}
    </div>

    );
}