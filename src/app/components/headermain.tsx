"use client"
import Image from "next/image"
import Link from "next/link"


export function HeaderMain(){
    return (
        <header className="headermaincontainer">
            
            <div>
                <div>
                    <Image alt="logo" src={"/img/dragonemblem.png"}  width={100} height={100}></Image> 
                    <h1>D&D Character Forge</h1>
                </div>

                <div>
                    
                    <Link  href={"/create"}>Create Character</Link>
                    <Link href={"/mycharacters"}>My Characters</Link>

                    
                </div>
                

            </div>
        
        </header>


    )
}