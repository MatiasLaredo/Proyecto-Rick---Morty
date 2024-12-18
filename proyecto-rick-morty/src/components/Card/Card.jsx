import { useState } from "react"
import './Card.css'

export default function Card({personaje}) {
//el objeto personaje contiene la info de cada personaje que me dio la API
let [ocultar,setOcultar]=useState(true)

    return( <div className="helado card container-card d-flex flex-row justify-content-between col-xs-12 col-md-6 col-sm-12">
        <div className="botella">

            <img src={personaje.image}/>
        <h2 className="t-title  text-center martin">{personaje.name}</h2>
        <div className="charly"><button onClick={()=>setOcultar(false)} className={ocultar?"monu b-card btn btn-active btn-x-md  btn ":"d-none"}>Know More...</button></div>

        </div>
        {ocultar ===true ?''
        : 
        <div>

            <div className="soda"><button className="stereo  btn-list border border-0 m-2 rounded-3 d-flex justify-content-end" onClick={()=>setOcultar(true)} >X</button></div>
            <ul className="list list-group">
                <li className="pescado container-item p-3 d-flex flex-column list-group-item fw-bold">Status: {personaje.status}</li>
                <li className="pescado container-item p-3 d-flex flex-column list-group-item fw-bold">Species: {personaje.species}</li>
                <li className="pescado container-item p-3 d-flex flex-column list-group-item fw-bold">Origin: {personaje.origin.name}</li>
                <li className="pescado container-item p-3 d-flex flex-column list-group-item fw-bold">Gender: {personaje.gender}</li>
            </ul>
        </div>} 


        
       
        
    </div>
    )
}