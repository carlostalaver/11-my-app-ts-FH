
import React, { useState } from 'react';

interface IUser {
    uid: string;
    name: string;
}

export const Usuario = () => {
    const [user, setUser] = useState<IUser>();

    const handleLogin = () => {
        setUser({
            uid:'123',
            name:'Carlos Talavera'
        })
    };

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button onClick = { handleLogin }
                className="btn btn-outline-primary"
            >
                Login
            </button>

            {
                (!user)
                    ? <pre>  No hay usuario </pre>
                    : <pre>  { JSON.stringify( user ) } </pre>

            }   
        </div>
    )
};
