import type { RecensioniPosition } from "../type";
import Stars from "../utils/Stars";

const Slide = ({titolo, img, recensione, voto, positionClass}:RecensioniPosition) => {

  return (
    <article className={`slide ${positionClass}`}>
        <div className="review">
            <img src={img} alt={titolo} className="img"></img>
        <div style={{marginLeft: "20px", marginRight:"20px"}}>
            <h4 style={{color: "#fca903", marginBottom:"10px"}}>{titolo}</h4>
            <p style={{marginBottom:"10px"}}>{recensione}</p>
        
            <div className="star-container">{Stars(voto)}</div>
        </div>
        </div>
    </article>
  )
}

export default Slide;