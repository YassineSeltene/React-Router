import React from "react";
import {useHistory} from "react-router-dom";

function AvatarDesc () {
        let history = useHistory ();
    return (
        <div>
<h1> Description:</h1>
<p> Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des " pilotes " humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora.
Sous sa forme d'avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration auprès des Na'vi, devenus un obstacle trop conséquent à l'exploitation du précieux minerai. Mais tout va changer lorsque Neytiri, une très belle Na'vi, sauve la vie de Jake...</p>
<p><button className="btn" onClick={()=>history.push('/')}> Revenir aux films </button></p>
<iframe className="video" width="900px" height="600px" src="https://www.youtube.com/embed/1Sq_YW9_S5w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        )
}
export default AvatarDesc;