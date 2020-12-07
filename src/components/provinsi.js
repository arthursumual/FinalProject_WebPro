
import React, { useState, useEffect } from "react";
import axios from "axios";
import {ListGroup, Card} from 'react-bootstrap'


const Provinsi =()=> {
  const [prov, setProv] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProv(res.data.data);
      });
  }, []);

  return (
    <div className = "row justify-content-center">
    
    {prov.map((Item) => {
      return(
    <Card bg = "secondary" style={{ width: '20rem', paddingRight: '0.25rem', paddingLeft: '0.25rem', paddingTop: '0.10rem' }}>
      <ListGroup variant="flush">

      <ListGroup.Item ><div className = "row justify-content-center"> <h5>{Item.provinsi}</h5></div> </ListGroup.Item>

      <ListGroup.Item>Positif : {Item.kasusPosi}</ListGroup.Item>

      <ListGroup.Item>Sembuh : {Item.kasusSemb}</ListGroup.Item>

      <ListGroup.Item>Meninggal : {Item.kasusMeni}</ListGroup.Item>

     </ListGroup>
   </Card>
      )
    } )}
    
    </div>
  );
}

export default Provinsi;
