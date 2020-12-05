import React from "react";
import {useHistory} from "react-router-dom";

function TerminatorDesc () {
        let history = useHistory ();
    return (
        <div>
<h1> Description:</h1>
<p> De nos jours à Mexico. Dani Ramos, 21 ans, 
travaille sur une chaîne de montage dans une usine automobile. Celle-ci voit sa vie bouleversée quand elle se retrouve soudainement confrontée à 2 inconnus : d’un côté Gabriel, une machine Terminator des plus évoluées, indestructible et protéiforme, un « Rev-9 », venue du futur pour la tuer ; de l’autre Grace, un super-soldat génétiquement augmenté, envoyée pour la protéger. Embarquées dans une haletante course-poursuite à travers la ville, Dani et Grace ne doivent leur salut qu’à l’intervention de la redoutable Sarah Connor, qui, avec l’aide d’une source mystérieuse, traque les Terminators depuis des décennies. Déterminées à rejoindre cet allié inconnu au Texas, elles se mettent en route, mais le Terminator Rev-9 les poursuit sans relâche, de même que la police, les drones et les patrouilles frontalières… L’enjeu est d’autant plus grand que sauver Dani, 
c’est sauver l’avenir de l’humanité.</p>
<p><button className="btn" onClick={()=>history.push('/')}> Revenir aux films </button></p>
<iframe className="video" width="900" height="600" src="https://www.youtube.com/embed/XU-QNqEIt5I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        )
}
export default TerminatorDesc;