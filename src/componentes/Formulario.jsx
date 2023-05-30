import React, {useState} from "react";

const Formulario = ({newLocation}) => {
    const [ciudad,setCiudad] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log({ciudad});
        if({ciudad}==="" || !ciudad){
            alert("Escribe la ciudad");
            return
        }
        newLocation(ciudad);
    }

    return(
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text"  className="form-control" placeholder="Ciudad" onChange={(e)=>setCiudad(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario;