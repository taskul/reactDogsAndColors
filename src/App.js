import React from "react";
import whiskey from "./Dogs/whiskey.jpg"
import duke from "./Dogs/duke.jpg"
import perry from "./Dogs/perry.jpg"
import tubby from "./Dogs/tubby.jpg"
import Nav from "./Dogs/Nav";
import Routes from "./Dogs/Routes";
import Colors from "./Colors/Colors";

function App({dogs}) {
  return (
    <div>
      <Nav dogNames={dogs.dogs.map(dog => dog.name)} />
      <Routes dogs={dogs.dogs}/>
      {/* <Colors /> */}
    </div>
  );
}


export const dogs = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

App.defaultProps ={dogs}
export default App;
