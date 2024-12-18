import Navegacion from "../../../../components/ButtonsHome/Navegacion/Navegacion";
import './Contact.css'

export default function Contact(){
    return(
        <div>
       <Navegacion/>
       <main className=" d2 d-flex justify-content-center container">
        <div className=" organa container-contact d-flex flex-column justify-content-center aling-items-center">

            <div className="leia">

            <h2 className=" star text-1 text-center">Contact</h2>
            <h3 clasName="wars text-2 text-center">Leave us your information so we can contact you</h3>

            </div>

            <form className="ahsoka container-form justify-content-md-center p-4">

                <div className="div-1 d-flex flex-column">

                    <label className="label-form" htmlFor="name">Name</label>
                 <input className="input-text rounded-2 p-2 border border-0" id="name" />

                </div>
                 
            <div className="div-2 d-flex flex-column">

            <label className="label-form" htmlFor="email">Email</label>
                 <input className="input-text rounded-2 p-2 border border-0" id="email" />  

            </div>
                 
            <div className="han d-flex flex-column">

                 <label className="label-form" htmlFor="message">Message</label>
                 <textarea className="textarea rounded-2 border border-0 p-4" cols="30" rows="10" id="message"></textarea>

            </div>

            <div className="div-4">

               <input className="solo btn-form rounded-2 border border-0" type="submit" value={'Send'} /> 

            </div>
            

            </form>
       
        </div>
        </main>  
           
        </div> 
     )
      
        
}