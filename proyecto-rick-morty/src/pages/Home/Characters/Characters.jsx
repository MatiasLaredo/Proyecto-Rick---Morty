import { useState, useEffect,  } from "react";


import Navegacion from "../../../components/ButtonsHome/Navegacion/Navegacion";
import Card from "../../../components/Card/Card";
import Filter from "../../../components/Filter/Filter";
import "./Characters.css"
export default function Character (){

let [data,setData]=useState ([])

let filterName=["Character Alive", "Character Dead", "Female","Male", "Origin Unknown"]

let [dataCompleta,setDataCompleta]=useState([])


 let [filtrosAplicados,setFiltrosAplicados]=useState([])

let [show,setShow] =useState(true)


const mostrarData=async()=>{
    let infoAPI=await fetch("https://rickandmortyapi.com/api/character") 
    .then((resp)=>{return resp.json()})
.then((resp2)=>{return resp2;})
.catch((error)=>console.log("error" +error));

setDataCompleta(infoAPI.results);
setData(infoAPI.results)

console.log(infoAPI)
}

const filtrar=(inputData)=>{
    console.dir(inputData);

    let pulsado= inputData.checked;

    let filtroPulsado=inputData.value
 console.log(pulsado);
 console.log(filtroPulsado);
 
 



    if(pulsado === true){
       
        

        setFiltrosAplicados([...filtrosAplicados,filtroPulsado])

        let nuevaLista;

       
        
  
    }else{
        setData(dataCompleta)
let filtrosActualizados=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
        setFiltrosAplicados(filtrosActualizados)
    }
  
   
  
}

useEffect(()=>{
    filtrosAplicados.forEach((fil)=>{
    let nuevaLista;

    switch (fil) {
        case "Character Alive":
           nuevaLista= data.filter((personaje)=>{return personaje.status === "Alive" })
            break;

            case "Character Dead":
                nuevaLista=data.filter((personaje)=>{return  personaje.status === "Dead"})
            break;

            case "Female":
               nuevaLista= data.filter((personaje)=>{return  personaje.gender === "Female"})
            break;

            case "Male":
               nuevaLista= data.filter((personaje)=>{return personaje.gender ===  "Male"})
            break;

            case "Origin Unknown":
                nuevaLista=data.filter((personaje)=>{return personaje.origin.name === "unknown"}) 
            break;
      
           
    }
    setData(nuevaLista)})
    
},[filtrosAplicados])

useEffect(()=>{
    mostrarData();
},[])

    return(
        <div>
            <Navegacion />

        
<section className="darth section-filters">

<div className="container-full">

            <div className="  container-filter p-4">

        <h2 className="azul" >Filters</h2>

                    <div className="container-filter p-4  d-flex aling-items-center gap-2 rounded-2 pepe">
                        
                        <h2 className="arco">Filters</h2> 

                    <div className="mobile-filters  "onClick={()=>{setShow(!show)}}>

                        
                        <svg className="pastor" width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="3.5" x2="40" y2="3.5" stroke="#6ECCAF"/>
                <line y1="14.5" x2="40" y2="14.5" stroke="#6ECCAF"/>
                <line y1="26.5" x2="40" y2="26.5" stroke="#6ECCAF"/>
                <circle cx="33.5" cy="3.5" r="3" fill="#344D67" stroke="#6ECCAF"/>
                <circle cx="20.5" cy="26.5" r="3" fill="#344D67" stroke="#6ECCAF"/>
                <circle cx="7.5" cy="14.5" r="3" fill="#344D67" stroke="#6ECCAF"/>
                </svg>

                    </div>
                    </div>

    

            </div>

 </div>
 
       <form className={show?"aire":"aire d-flex container-full-2 p-2 pt-0"}>
           
         {
            filterName.map((filter)=>{
                return <Filter key={filter} title={filter} filtrar={filtrar}/>
            })
         } 
        </form>

      

        

        

</section>
        <main className="section-cards aling-items-center m-0 row justify-content-center w-100 pt-5 ">
           {
            
            data.length !== 0? 

            data.map((personaje)=>{

                return <Card key={personaje.id} personaje={personaje}/>

            }):
            <div className="container-alert alert d-flex aling-items-center gap-2 rounded-2 dogo"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOklEQVR4nNXaO2sVQRTA8f+msFdQiWBhIRhQCyEhjRZKzE3SqfkKfgJ7U+apEl/xmhCUNEoaH50fxyaCEIhGTSwMA6c4LFfd3Tlnd+bAwM7cO3P3x8zdO48LfjEGvAd2gD25vkRmcQc4BP6U0nfgOpnEbYVYBU4BZ4DXUrafA+aWQsyXXiuAxwpzg0RjBvglN7rwl/ckj5mugEgeM60QixXrJIeZUoilmnWTwUxFIJLB9BRiObKtzjA94KcRojNMTyFWjNtuDTPpiGgNM6kQD/CNwgsTM5xW1ITxXk3MM8u52U2FeNig/nMFmeuqZyaAHxGIWIgJRiMeSYNdQKIwGrEWgbCCNMJck1VcqPAiEmEJqYXRiL4BwhpSCXMV+GaM8ID8E3NZ9cRTQ4QXpPw7E+79Yij8KAWbxghPCHKvr6Ttd0j3hMxJ7MMTEmJY2t4NmS+SOU1+kHPS9teQ+aD2oHKCDAHb0vbbUDCq9qLmMoEMARvSbnjaXtBbnL8dPlBD7jsg9gfNjD0w54FZSWfbQAzaty1veXYdherhSvOtFDFFaaFVeQZsNcyuAHcljUQMp/WY1aIFRn/Zw3UTxEuLJW/sMIuBFE2Hk0fPrCpImLHW6Ym+x8FQU8wx4LikcF21J/qep1ttPM0KWUq47zZ6YlpDeGJaR3hgOkNYYjpHWGCSQcRgkkM0wQTEkxQRdTDJI6pgskEMms6E44gTsjrcyulPNRpzoCaMWf7NCYlx4JMcUXwG3kQsrv4bR9KdS07AHTObAAAAAElFTkSuQmCC" alt="high-priority"></img> <p className="pelota fm-bold">Sorry! There are no characters width all those properties.</p></div>
           
           }
        </main>
        </div>
        
    )
}



