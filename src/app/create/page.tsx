"use client"

// import Link from "next/link";  //para revisar pruebas, descomentar o http://localhost:3000/pruebas
import React from "react";
import Link from "next/link";
import { ChevronLeft } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SingleSelectGender from "./genderselector";
import { RaceList } from "./racelist";
import { useState } from "react";
import { SelectClass } from "./selectclass";
import SingleSelectArmor from "./armor";
import SingleSelectWeapon from "./weapon";
import StatsSlider from "./stats";
import SingleSelectFeatures from "./features";
import SingleSelectSpells from "./spells";
import Review from "./review";



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

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

  };

const [characterName, setCharacterName] = useState<string>('');
const [selectedGender, setSelectedGender] = useState<string>('');
const [selectedRace, setSelectedRace] = useState<string>('');
const [selectedClass, setSelectedClass] = useState<string>('');
const [selectedArmor, setSelectedArmor] = useState<string>('');
const [selectedWeapon,setSelectedWeapon] =useState<string>('');
const [selectedFeature,setSelectedFeature] =useState<string>('');
const [selectedSpell,setSelectedSpell] =useState<string>('');

interface Stats {
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
}

const INITIAL_STATS: Stats = {
  strength: 8,
  dexterity: 8,
  intelligence: 8,
  charisma: 8,
};

const [characterStats, setCharacterStats] = useState<Stats>(INITIAL_STATS);

// funcion pa guadar en el localStorage
const handleNext = () => {

  localStorage.setItem('characterData', JSON.stringify({
    name: characterName,
    gender: selectedGender,
    race: selectedRace,
    class: selectedClass,
    armor: selectedArmor,
    weapon:selectedWeapon,
    feature:selectedFeature,
    spell:selectedSpell,
    ...characterStats,

  }));

  if (value < 4) { // 4 es el índice máximo (por las 5 pestañas)
    setValue(prev => prev + 1);
  }


}



  return (
    <React.Fragment> 
      <Box style={{ background: "#111111",width:"100%",borderRadius:"1vw" }} >
        <AppBar position="static" style={{background:"black",borderRadius:"1vw"}}>
          <Tabs
            
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            
          >
            <Tab  label="Race" {...a11yProps(0)} />
            <Tab label="Class" {...a11yProps(1)} />
            <Tab label="Equipment" {...a11yProps(2)} />
            <Tab label="Stats" {...a11yProps(3)} />
            <Tab label="Review" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        
        <TabPanel value={value} index={0} dir={theme.direction}>
    
          <div className="racecreatecontainer">
            <div>
              <h1>Choose Your Race</h1>

              <p>Select a race for your character. Each race provides unique abilities and traits.</p>
          
            </div>
            
            <div>
              <h2>Character Name</h2>

              <input 
              type="text" 
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
               />
            </div>

            <div>
              <h2>Gender</h2>

              <SingleSelectGender  
                onGenderChange={setSelectedGender} 
                selectedGender={selectedGender} />
            </div>

            <div>

              <h2>Select a Race</h2>

              <RaceList 
                onRaceChange={setSelectedRace}
                selectedRace={selectedRace}
                />
              
            </div>

            <button onClick={handleNext}>Next</button>

          </div>



        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="classcreatecontainer">
              <div>
                
                <h1>Choose Your Class</h1>
                <p>Select a class for your character. Your class determines your abilities and playstyle.</p>
              </div>
                
              
              <SelectClass
              onSelectClassChange={setSelectedClass}
              selectedClass={selectedClass}
              />

              <button onClick={handleNext}>Next</button>
          </div>

        </TabPanel>
        
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="equipementcreatecontainer">
              
              <div>
                <h1>Choose Your Equipment</h1>
                <p>Select armor and weapons for your character.</p>
              </div>
                

              <div>
                <h1>Armor</h1>
                <SingleSelectArmor  
                  onArmorChange={setSelectedArmor}
                  selectedArmor={selectedArmor}
                  />
              </div>
                
              <div>
                <h1>Weapon</h1>
                <SingleSelectWeapon  
                  onWeaponChange={setSelectedWeapon}
                  selectedWeapon={selectedWeapon}
                  />
              </div>

              <div>
                <h1>Features</h1>
                <SingleSelectFeatures  
                  onFeatureChange={setSelectedFeature}
                  selectedFeature={selectedFeature}
                  />
              </div>

              <div>
                <h1>Spells</h1>
                <SingleSelectSpells  
                  onSpellChange={setSelectedSpell}
                  selectedSpell={selectedSpell}
                  />
              </div>

            <button onClick={handleNext}>Next</button>

          </div>

        </TabPanel>
        

        <TabPanel value={value} index={3} dir={theme.direction}>
          
          <div className="statscreatecontainer">
            <div>
              <h1>Customize Your Stats</h1>
              <p>Adjust your character s attributes to define their strengths and weaknesses.</p>
            </div>


            <StatsSlider 
              onStatsChange={(stat, value) => 
                setCharacterStats(prev => ({ ...prev, [stat]: value }))
              }/>


            <button onClick={handleNext}>Next</button>
          </div>



        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <div>
            <Review />

          </div>
        </TabPanel>


      </Box>
    </React.Fragment>
  );
}




function Page() {

  return (
    
    //headermain
    <React.Fragment> 
      <div className="createbodycontainer">
        <main className="createmaincontainer">
          <section>
            <Link  href={"../"}>
              <ChevronLeft className="chevronLeftcreate" />
            </Link>
            <h1>Create Your Character</h1>
          </section>
          
          <section>
            <FullWidthTabs />
          </section>

          
        </main>
      </div>
    </React.Fragment>

  );
}

export default Page;