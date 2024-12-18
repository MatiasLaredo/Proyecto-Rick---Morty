import './nav.css'
import { Link } from 'react-router'

export default function Navegacion() {
    return(
       <nav className='container-nav navbar navbar-expand-lg w-100 fixed-top' >
        <div className='tech container-fluid justify-content-between aling-items-center'>
            <h1 className='c3 '><Link to="/"className='fiet'>Rick & Morty </Link></h1>


            <div className=' navbar-toggler' data-bs-target='#menu' data-bs-toggle="collapse" > 

            <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6ECCAF" className=" bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>

            </div>
           
                <div id='menu' className='collapse navbar-collapse justify-content-end'>
                    <ul className='align-items-center container-items nav nav-pills gap-3 navbar-nav'>

                        <li className='nav-item '><Link to="/Characters" className='tier nav-link text-decoration-none bc-hover'>Character</Link></li>

                        <li className='nav-item'><Link to="/Contact" className='tier  nav-link text-decoration-none bc-hover'>Contact</Link></li>
                    </ul>
                
                </div>

                
        </div>
        
        

        
        
       </nav> 
    )
}