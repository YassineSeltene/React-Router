import React from "react";
import {useHistory} from "react-router-dom";

function ZwarDesc () {
    let history = useHistory ();
    return (
        <div>
<h1> Description:</h1>
<p> Gerry Lane se lance dans une course contre la montre 
    pour aider le monde à surmonter ses divisions et faire 
    face à l'apocalypse. Dans tous les pays, par tous les 
    moyens, l'humanité n'aura plus qu'un seul espoir de 
    survie : la guerre.
</p>
<p><button className="btn" onClick={()=>history.push('/')}> Revenir aux films </button></p>
 <iframe className="video" width="900" height="600" src="https://www.youtube.com/embed/jTrmqThqpK8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
        )
}
export default ZwarDesc;