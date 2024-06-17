import React from 'react';
import ReactPlayer from 'react-player';

export default function Contactos() {
  
  const videoprueba = 'https://www.youtube.com/watch?v=KVf6AQir2D4';
  const videoprueba2 = 'https://www.youtube.com/watch?v=gvFOPHa2-YQ';
  
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Correo Electronico a Contactar:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentarios</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <h4 style={{ fontFamily: 'Comic Sans MS', color: '#ffffff' }}>Algunos videos que te pueden interesar..</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      
        <ReactPlayer
          url={videoprueba}
          playing={true}
          volume={0.5}
          controls
          width='48%'
          height='260px'
        />
         
        <ReactPlayer
          url={videoprueba2}
          playing={true}
          volume={0.5}
          controls
          width='48%'
          height='260px'
        />
      </div>
    </div>
  );
}
