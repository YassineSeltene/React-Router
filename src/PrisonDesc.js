import React from "react";
import {useHistory} from "react-router-dom";

function PrisonDesc () {
        let history = useHistory ();
    return (
        <div>
<h1> Description:</h1>
<p> Michael Scofield s'engage dans une véritable lutte contre la montre : son frère Lincoln est dans le couloir de la mort, en attente de son exécution. Persuadé de son innocence mais à court de solutions, Michael décide de se faire incarcérer à son tour dans le pénitencier d'état de Fox River pour organiser leur évasion...
</p>
<p><button className="btn" onClick={()=>history.push('/')}> Revenir aux films </button></p>
<iframe className="video" width="900" height="600" src="https://www.youtube.com/embed/VoW8RvUQdUM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        )
}
export default PrisonDesc;