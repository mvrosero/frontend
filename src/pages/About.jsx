import * as React from "react";

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
 
 
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
 }
 

function About() {

  return (
    <div>
          <h1>Welcome to my app</h1>
             <MyButton />
          </div>
  );

}



export default About;
