import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { appService } from './services/appService' // Certifique-se de que o caminho está correto

function App() {
  const [mensagem, setMensagem] = useState('Carregando mensagem do servidor...');

  useEffect(() => {
    appService.getHello()
      .then((res) => {
        setMensagem(res);
      })
      .catch((err) => {
        console.error("Erro na conexão:", err);
        setMensagem("Ops! O frontend não conseguiu falar com o backend.");
      });
  }, []);

  return (
    <React.StrictMode>
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h1>GlobalCodePassport - Frontend Running!</h1>
        <div style={{ 
          padding: '20px', 
          border: '2px solid #007bff', 
          borderRadius: '10px', 
          display: 'inline-block',
          backgroundColor: '#f0f7ff' 
        }}>
          <h3>Mensagem do Backend:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>
            {mensagem}
          </p>
        </div>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)