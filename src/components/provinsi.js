
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

      <Card.Header ><div className = "row justify-content-center"> <h5>{Item.provinsi}</h5></div> </Card.Header>

      <ListGroup.Item><font color = {'red'}>Positif : {Item.kasusPosi}</font></ListGroup.Item>

      <ListGroup.Item><font color = {'green'}>Sembuh : {Item.kasusSemb}</font></ListGroup.Item>

      <ListGroup.Item><font color = {'black'}>Meninggal : {Item.kasusMeni}</font></ListGroup.Item>

     </ListGroup>
   </Card>
      )
    } )}
    
    </div>
  );
}

export default Provinsi;
