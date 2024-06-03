import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contenedorContacto">
      <iframe
          title="Google Map"
          src= "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13141.760812190934!2d-58.4515826!3d-34.5677265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1671568901073!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">E-mail</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentario</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    </div>
  )
}

export default Contact