import React from "react";


function PhotoGrid(){
    const images = [
        {
            name: "Fins",
            imageUrl: require("./photos/Fins_Pokemon.png")
        },
        {
            name: "Charmander",
            imageUrl: require("./photos/Charmander_Pokemon.png")
        },
        {
            name: "Bulbasaur",
            imageUrl: require("./photos/Bulbasaur_Pokemon.png")
        },
        {
            name: "Eevee",
            imageUrl: require("./photos/Eevee_Pokemon.png")
        },
        {
            name: "Jigglypuff",
            imageUrl: require("./photos/Jigglypuff_Pokemon.png")
        },
        {
            name: "Kirlia",
            imageUrl: require("./photos/Kirlia_Pokemon.png")
        },
        {
            name: "Marill",
            imageUrl: require("./photos/Marill_Pokemon.png")
        },
        {
            name: "Pachirisu",
            imageUrl: require("./photos/Pachirisu_Pokemon.png")
        },
        {
            name: "Pidgey",
            imageUrl: require("./photos/Pidgey_Pokemon.png")
        },
        {
            name: "Pika",
            imageUrl: require("./photos/Pika_Pokemon.png")
        },
        {
            name: "Piplup",
            imageUrl: require("./photos/Charmander_Pokemon.png")
        },
        {
            name: "Spike",
            imageUrl: require("./photos/Spike_Pokemon.png")
        }
    ]
  
    
    const displayImages = images.map((image, index) =>
        <li>
        <div key={image.name + index}>
            <h1>{image.name}</h1>
            <img src={image.imageUrl} alt={`${image.name}`} width="100"/>
            <hr/>
        </div>
        </li>
    )
    return(
    <div>
        <ul> 
            {displayImages}
        </ul> 
    </div>
    )
}
export default PhotoGrid;