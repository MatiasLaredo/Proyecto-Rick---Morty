import "./Filter.css" 
export default function Filter({title, filtrar}) {
    return(
        <div className="x">
            <div className=" polo filter-2 rounded-3 form-check form-switch">
             <input className="yoda form-check-input" id={title}type="checkbox" onClick={(event)=>filtrar(event.target)} value={title}/>
        <label className="form-check-label" htmlFor={title} > {title}</label>
        </div>
       
    </div>)
}
