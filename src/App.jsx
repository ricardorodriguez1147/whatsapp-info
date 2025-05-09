import { useRef, useState } from 'react';
import { users } from "./libs/users";
import { regalos } from "./libs/gifts";
import './App.css'

function App() {

  const inputRefNumRegalo = useRef(1);
  const inputRefNumEnvio = useRef(null);

  const Enviar = (event) => {
    event.preventDefault();



    const usuarios = users;
    const jsonregalos = regalos;

    const valor = jsonregalos.filter(ele => {
      if (ele.id == inputRefNumRegalo.current.value) {
        return ele;
      } else {
        return;
      }
    });

    const { nombre: regalo, tipo } = valor[0];

    const userWon = usuarios.filter(ele => {
      if (ele.id == inputRefNumEnvio.current.value) {
        return ele;
      } else {
        return;
      }
    });

    const { id: numeroselecc, nombre: nameuser, celular } = userWon[0];

    // const phoneNumber = `57${celular}`;
    const phoneNumber = `${celular}`;

    inputRefNumRegalo.current.value = (Number(Number(inputRefNumRegalo.current.value) + 1));
    inputRefNumEnvio.current.value = (null);

    const message = `
     🚀 *¡Ganaste!* 🚀

     ${nameuser}:

     🌟 Luz y Sal BookStore 🌟

     📌 *Información de tú premio:*

     - Titulo : ${regalo}.
     - Tipo :  ${tipo}
     - Número seleccionado: ${numeroselecc}

     🌟 *¡Mil gracias por participar en el sorteo Luz y Sal!* 🌟

    Desde el lunes 12 de mayo te puedes recoger

    Lunes a viernes de 9 am a 6:30 pm
    Sábados 9:30 am a 6:00 pm

    FUSCIA ACCESORIOS
    Carrera 9 # 21 - 93

     `;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);


    // Abrir WhatsApp con el mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');


  };



  return (
    <>
      <div>
        <form onSubmit={Enviar}>
          <div className='form'>
            <input type="number" maxLength={3} ref={inputRefNumRegalo} />
            <input type="number" ref={inputRefNumEnvio} />
          </div>
          <div className='container-button'>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
