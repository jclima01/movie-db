import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Reseña from "../Reseña/Reseña";

const Reseñas = () => {
  return (
    <div>
    <Card style={{width:"50%"}}className="d-flex gap-4 border">
        <h1>Deja tu reseña:</h1>
        <textarea style={{width:"80%"}} name="" id="" cols="30" rows="4"></textarea>
        <Button style={{width:"auto"}} >Reseña</Button>
      <Reseña/>
      <Reseña/>

    </Card>
    </div>
  );
};

export default Reseñas;
