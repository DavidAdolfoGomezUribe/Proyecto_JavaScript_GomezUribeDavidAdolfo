"use client"
import { Swords,ShieldPlus ,Castle  } from 'lucide-react';

// import Image from "next/image"

export function MainMain (){
    return(
        <main className="mainmaincontainer">
            <section>
                <article>
                    <h1>Forge Your Legend in the World of Fantasy</h1>
                    
                    <p>Create and customize your own Dungeons & Dragons character with our advanced character generator. Choose your race, class, equipment, and more.</p>
                    
                    <div>
                        <button>Start Creating</button>
                        
                        <button>View My Characters</button>
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <div>
                        <h1>Endless Possibilities</h1>
                        
                        <p>Customize every aspect of your character from race and class to equipment and special abilities.</p>
                    </div>

                    <div>
                        
                        <div>
                            <Swords style={ {width: "5vw",height:"5vw",background:"#252525",padding:"1vw",borderRadius:"1vw" }} />
                            <h1>Choose Your Race</h1>
                            <p>Select from a variety of fantasy races including Humans, Elves, Dwarves, and more.</p>
                       
                        </div>
                        
                        <div>
                            <ShieldPlus  style={ {width: "5vw",height:"5vw",background:"#252525",padding:"1vw",borderRadius:"1vw" }} />
                            <h1>Define Your Class</h1>
                            <p>Become a mighty Warrior, a cunning Rogue, a wise Wizard, or any other class that fits your playstyle.</p>
                        </div>
                        
                        <div>
                            <Castle  style={ {width: "5vw",height:"5vw",background:"#252525",padding:"1vw",borderRadius:"1vw" }} />
                            <h1>Customize Abilities</h1>
                            <p>Tailor your character s strengths and weaknesses with customizable stats and special abilities.</p>    
                        </div>


                    </div>

                </article>
            </section>



        </main>
    )
    
}