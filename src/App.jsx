import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import FilterDogDetails from './FilterDogDetails';

function App() {
  const sampleDogs = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: "duke",
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: "perry",
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby",
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }

  return (
    <div>
      <h1>Dogfinder App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dogs" element={<Homepage dogs={sampleDogs.dogs}/>}/>
          <Route path="/" element={<Navigate to="/dogs"/>}/>
          <Route path="/dogs/:name" element={<FilterDogDetails dogs={sampleDogs.dogs}/>}/>
          <Route path="/*" element={<Navigate to="/dogs"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
