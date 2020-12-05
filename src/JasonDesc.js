import React from "react";
import {useHistory} from "react-router-dom";

function JasonDesc () {
        let history = useHistory ();
    return (
        <div>
<h1> Description:</h1>
<p><button className="btn" onClick={()=>history.push('/')}> Revenir aux films </button></p>
<p> On croyait tout connaître de l'histoire de Jason Bourne et de son passé d’agent tueur malgré lui. Mais l’essentiel restait à découvrir. Le programme Treadstone dont Jason était le cobaye n’était que la partie émergée d’une conspiration plus ténébreuse, ourdie par d’autres branches du gouvernement et mettant en jeu d’autres agences de renseignement, d’autres programmes militaires, d’autres laboratoires secrets…
De Treadstone est né "Outcome", dont Aaron Cross est un des six agents. Sa finalité n’est plus de fabriquer des tueurs, mais des hommes capables d’assurer isolément des missions à haut risque. En dévoilant une partie de cette organisation, Jason laissait derrière lui un "héritage" explosif : compromis, les agents "Outcome" sont désormais promis à une liquidation brutale. Effacés à jamais pour que le "père" du programme, le Colonel Byer puisse poursuivre ses sinistres activités.
Une gigantesque chasse à l’homme commence, et Cross, devenue sa première cible, n’a d’autre recours que de retrouver et gagner la confiance de la biochimiste d’"Outcome", Marta Shearing, elle-même menacée de mort…
</p>
<iframe className="video" width="900" height="600" src="https://www.youtube.com/embed/euya1zwQ6U0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        )
}
export default JasonDesc;