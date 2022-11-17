import React from 'react';
import "./AppCss.css"

import "./CharacterGallery";
import {RICK_AND_MORTY_CHARACTERS} from "./rick_and_morty_characters";
import CharacterGallery from "./CharacterGallery";
import CharacterFilter from "./CharacterFilter";
const characters = RICK_AND_MORTY_CHARACTERS
function App() {

  return (

    <div className="App">
        <h1>Rick and Morty Characters</h1>

      <CharacterGallery characterList={characters}/>
    </div>
  );
}

export default App;
