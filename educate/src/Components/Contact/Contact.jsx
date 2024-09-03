import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d8f073b-8050-4537-9b05-f9471bbba790");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envíanos un mensaje <img src={msg_icon} alt="" /></h3>
        <p>No dudes en ponerte en contacto con nosotros o consulta nuestra información de contacto más abajo. Tus comentarios, preguntas y sugerencias son importantes para nosotros, ya que nos esforzamos por ofrecer un servicio excepcional a nuestra comunidad universitaria.</p>
        <ul>
          <li><img src={mail_icon} alt="" />contacto@educante.com</li>
          <li><img src={phone_icon} alt="" />(1) 123-456-7890</li>
          <li><img src={location_icon} alt="" />Calle 51 bis 78 Sur, <br />Bogotá, Colombia</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Tu nombre</label>
          <input type="text" name='name' placeholder='Ingresa tu nombre' required/>
          <label>Número celular</label>
          <input type="tel" name='phone' placeholder='Ingresa tu número celular' required/>
          <label>Escribe tus mensaje aquí</label>
          <textarea name="message" rows="6" placeholder='Ingresa tu mensaje' required></textarea>
          <button type='submit' className='btn dark-btn'>Enviar ahora <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
