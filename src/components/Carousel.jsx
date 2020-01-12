import React from "react";
import { Carousel } from "react-responsive-carousel";
import '../resources/styles/grid.css'


export default () => (
  <Carousel className = "carousel"
   autoPlay>
    <div >
      <img src="https://images.alphacoders.com/213/thumb-1920-213821.jpg"/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://images.alphacoders.com/268/thumb-1920-268521.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://wallpaperaccess.com/full/563082.jpg" />
      <p className="legend">Legend 3</p>
    </div>

  </Carousel>
);
