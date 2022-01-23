import { ChangeEvent } from "react";
import { useState } from "react";
import { useForm } from "../hooks/userForm";

interface IFormData {
    email: string;
    name: string;
    edad: number
}

export const Formulario = () => {

    const {formulario, handleChange} = useForm<IFormData>({ // le paso entre <> el tipo IFormData para que sea mas facil la lectura
        email:'',
        name:'',
        edad: 21
    });

    const { email, name, edad} = formulario;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:  </label>
                <input type="emain"
                    name="email"
                    value = { email }
                    onChange={ handleChange }
                    className="form-control"
                />

            </div>

            <div className="mb-3">
                <label className="form-label">Name:  </label>
                <input type="emain"
                    name="name"
                    className="form-control"
                    value = { name }
                    onChange={ handleChange }
                />

            </div>
            <div className="mb-3">
                <label className="form-label">Edad:  </label>
                <input type="emain"
                    name="edad"
                    className="form-control"
                    value = { edad }
                    onChange={ handleChange }
                />

            </div>

            <pre> {JSON.stringify( formulario  ) } </pre>
        </form>

    );
};
