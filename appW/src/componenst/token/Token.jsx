import React, { useState } from 'react';
import axios from 'axios';

function Token() {
    const [accessToken, setAccessToken] = useState('');
    const apiUrl = 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token';

    // Datos de autenticación
    const data = {
        client_id: 'INT-12298804',
        client_secret: 'O0hFEPiIObDZQATf5TAAJDl846YNrHIH',
        grant_type: 'password',
        username: 'sistemas@wowdesarrollos.com',
        password: 'SmeXhuMzew8923AkEV2Uj!',
    };

    // Manejar la solicitud para obtener el token de acceso
    const getToken = async () => {
        try {
            const response = await axios.post(apiUrl, null, {
                params: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const accessToken = response.data.access_token;
            setAccessToken(accessToken);
        } catch (error) {
            console.error('Error al obtener el token:', error);
        }
    };

    return (
        <div>
            <button onClick={getToken}>Obtener Token</button>
            <div>
                <strong>Token de acceso:</strong>
            </div>
            <div>{accessToken}</div>
        </div>
    );
}

export default Token;
