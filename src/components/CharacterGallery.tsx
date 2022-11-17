import "./CharacterCardComponent"
import "./CharacterGallery.css"
import CharacterCardComponent from "./CharacterCardComponent";
import "./CharacterFilter";
import {ChangeEvent, useState} from "react";

type CharacterGalleryProps = {
    characterList: {
        name: string,
        id:number,
        image: string,
        status: string
    }[]
}


export default function CharacterGallery(props: CharacterGalleryProps) {

    const [searchText, setSearchText] = useState("");
    //const [charList, setCharList] = useState(props.characterList);
    const [filteredCharacters, setFilteredCharacters] = useState(props.characterList)


    const characterComponents = filteredCharacters.filter((chars) => {
        if (chars.name.toLowerCase().includes(searchText.toLowerCase()) ||
            chars.status.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        }
        return false
        }).map((character) => {
        return <CharacterCardComponent characterName={character.name} characterId={character.id} characterImage={character.image}
                                       characterStatus={character.status} deleteCharacter={deleteCharacter}/>
    })

    function saveSearchText(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)

        setSearchText(event.target.value)

    }

    // Delete
    function deleteCharacter(id:number){
        const characters = filteredCharacters.filter((character) => character.id !== id)
        setFilteredCharacters(characters)

    }




    return (
        <div>
            <div></div>
            <div className={"searchLine"}>Search for Characters: &ensp;
                <input className={"searchField"} onChange={saveSearchText}/>
            </div>
            <div className={"gallery"}>
                {characterComponents}
            </div>
        </div>
    )
}
