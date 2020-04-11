import React from "react";
import { Carousel } from "react-responsive-carousel";
import '../resources/styles/grid.css'

const imgSTyle= {
  height: "300px",
  width: "80%",
  margin: "auto"
}
export default () => (
  <Carousel className = "carousel"
   autoPlay>
    <div >
      <img 
      style={imgSTyle}
      src="https://images.alphacoders.com/213/thumb-1920-213821.jpg"
      />
      <p className="legend">Naranja informática: 1° Lugar copa de campeones UDEC</p>
    </div>
    <div>
      <img
      style={imgSTyle} 
      src="https://images.alphacoders.com/268/thumb-1920-268521.jpg" 
      />
      <p className="legend">Niupi Fc: Tri-campeones Copa Galáctica</p>
    </div>
    <div>
      <img
      style={imgSTyle} 
      src="https://wallpaperaccess.com/full/563082.jpg" 
      />
      <p className="legend">Pinche rodilla Fc: Premio al fair play por 5 años seguidos</p>
    </div>

  </Carousel>
);
