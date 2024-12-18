
import './button.css'
import { Link } from 'react-router'
export default function ButtonsHome({contenido}) {
    
    return(
        <Link to={contenido} className=" text-decoration-none col-4 botonHome gp-4">{contenido} </Link>
    )
}