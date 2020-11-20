import React, {Fragment, useState} from 'react'
import {useForm} from 'react-hook-form'

const Formulario = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
       
        console.log(data)

        setEntradas([ ...Entradas , data])
    }

    const [Entradas, setEntradas] = useState([])

    return (
        <Fragment>
            <h2>Hola Formulario</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="titulo"
                    placeholder= "Escriba un título"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true , message: "Campo Obligatorio" },
                            minLength: {value: 2 , message: "Mínimo 2 letras"}
                        })
                    }
                />
                {errors.titulo && 
                <span className="text-danger text-small d-block mb-2">{errors.titulo.message}</span>}

                <input name="descripcion"
                    placeholder= "Escriba una descripción"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true , message: "Campo Obligatorio" },
                            minLength: {value: 2 , message: "Mínimo 2 letras"}
                        })
                    }
                />
                {errors.descripcion && 
                <span className="text-danger text-small d-block mb-2">{errors.descripcion.message}</span>}
                <button className="btn btn-primary">Agregar</button>
            </form>

            <ul>
                {
                    Entradas.map( item => <li>{item.titulo} - {item.descripcion}</li>)
                }
            </ul>

        </Fragment>

    );
}

export default Formulario;