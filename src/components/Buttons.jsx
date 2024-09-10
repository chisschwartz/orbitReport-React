import satData from "./satData";
import React from "react";
import './styling.css';

// class Buttons extends React.Component{
// render() {
//   const { filterByType , setSat , displaySats } = this.props; 
  
function Buttons ({filterByType , setSat , displaySats}) {

  const orbitClick = () => {
    setSat(satData);
  };

//const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div id="flex-container">
    {displaySats.map((sat , id) => {
      return (
      <button onClick = {() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
      );
      })}
      <button onClick = {orbitClick}> All Orbits </button>
    </div>
);
};



export default Buttons;