import React from 'react';
import "./CharacterCard.css"


type CharacterCardProps ={
    characterName:string,
    characterId:number,
    characterImage:string,
    characterStatus:string,
    deleteCharacter(id:number):void
}



export default function CharacterCardComponent(props:CharacterCardProps) {

    function onClick(){
        props.deleteCharacter(props.characterId)
    }

    return (
        <div className={"characterComponent"}>
            <h2>{props.characterName}</h2>
            <img src={props.characterImage} alt={"Character Picture"}/>
            <p className={props.characterStatus}>Status: {props.characterStatus}</p>
            <div className={"button"}>
            <button onClick={onClick}> Delete </button>
            </div>
        </div>
    );
}