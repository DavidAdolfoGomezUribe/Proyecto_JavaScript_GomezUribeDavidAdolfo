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

export function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment> 
      <Box style={{ background: "#111111",width:"100%" }} >
        <AppBar position="static" style={{background:"black"}}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Race" {...a11yProps(0)} />
            <Tab label="Class" {...a11yProps(1)} />
            <Tab label="Equipment" {...a11yProps(2)} />
            <Tab label="Stats" {...a11yProps(3)} />
            <Tab label="Review" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item four
        </TabPanel>


      </Box>
    </React.Fragment>
  );
}




function Page() {

  return (
    
    //headermain
    <React.Fragment> 
      <body className="createbodycontainer">
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
      </body>
    </React.Fragment>

  );
}

export default Page;