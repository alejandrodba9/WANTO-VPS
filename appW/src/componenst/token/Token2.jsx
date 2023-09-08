import React, { useState, useEffect } from 'react';
import axios from 'axios';
const MiComponente = () => {
    
    // Estado para almacenar el token de acceso
    const [AccessToken, setAccessToken] = useState('');

    // Función para autenticar
    const autenticar = async () => {
        try {
            const url = 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token';
            const data = new URLSearchParams();
            data.append('grant_type', 'password');
            data.append('client_id', 'INT-12298804');
            data.append('username', 'sistemas@wowdesarrollos.com');
            data.append('password', 'SmeXhuMzew8923AkEV2Uj!');
            data.append('client_secret', 'O0hFEPiIObDZQATf5TAAJDl846YNrHIH');

            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const newAccessToken = response.data.access_token;
            console.log('Token de acceso:', newAccessToken);

            // Almacena el token de acceso en el estado
            setAccessToken(newAccessToken);
        } catch (error) {
            console.error('Error al autenticar:', error);
        }
    };

    // Manejador de clic para el botón de autenticación
    const handleAutenticarClick = () => {
        autenticar();
    };

    return (
        <div >
            {/* Botón para iniciar la autenticación */}
            <button onClick={handleAutenticarClick}>Autenticar</button>

            {/* Muestra el token de acceso */}
            <p>Token de acceso: {AccessToken}</p>
        </div>
    );

};
export default MiComponente;


