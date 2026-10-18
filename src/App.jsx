import { useDebugValue, useState } from 'react'
import { LearnComponents } from './Components/learnComponents';
import { Practice } from './Components/Practice';
import { Student } from './Components/Student';
import { Developer } from './Components/Developer';
import { FunctionSample } from './Components/FunctionSample';
import { ChildComponent } from './Components/ChildComponent';

import { ArraySample } from './Components/ArraySample';
import { OneOfSample } from './Components/OneOfSample';
import { MutiValueTypes } from './Components/MutiValueTypes';

function App() {

    const items = 
    [
      {id :1 ,name: "Radio Jockey"},
      {id :2 ,name: "Video Jockey"},
      {id :3 ,name: "Disc Jockey"},
    ];

    const handleClick = () =>
      {
        alert("Button Clicked!");
      }

  return (
      <>
        <div>Kaarthik React Learning</div>
        <LearnComponents /> 

         <Practice /> 

        <Student name="Kaarthik" age={19} marital={false}/>
        <Student name="Lekha" age={25} marital={true}/>
        <Student name="Priya" age={18} marital={false}/>
        <Student />

          <ChildComponent>
              <p>This is your RJ Kaarthik</p>
              <p>VIT Community Radio 90.8</p>
          </ChildComponent> 

         <ArraySample items = {items}/>   

         <OneOfSample color= "grey"/> 
        
        
        <MutiValueTypes value = "Kaarthik"/>
        <MutiValueTypes value = {9.70}/>
        <MutiValueTypes value = {true} /> 

        <div>
          <h1>Function Call</h1>
          <FunctionSample handleClick={handleClick}/>
        </div>





        <Developer />
        
      </>
  );
}

export default App
