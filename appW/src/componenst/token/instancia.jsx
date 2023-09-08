import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/data');

        if (Array.isArray(response.data.data)) {
          // Verifica si los datos son un array
          setData(response.data.data);
        } else {
          // Los datos no son un array válido, maneja este caso según tus necesidades
          setError('Los datos no son un array válido');
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Lista de instancias:</h1>
      <ul>
        {data.map((instance) => (
          <li key={instance.instanceId}>{instance.name}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
