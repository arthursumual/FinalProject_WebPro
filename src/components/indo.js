
import React, { useState, useEffect } from "react";
import axios from "axios";
import {ListGroup, Card} from 'react-bootstrap'

const Indo =()=> {
  const [indonesia, setIndonesia] = useState({ positif: NaN, meninggal: NaN, sembuh: NaN })

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIndonesia(
          {
            positif: res.data.jumlahKasus,
            meninggal: res.data.meninggal,
            sembuh: res.data.sembuh
          })
      })
      .catch((err) => console.log(err))
  })
  return (
    <Card bg = "secondary" style={{ width: '20rem', paddingRight: '0.25rem', paddingLeft: '0.25rem', paddingTop: '0.10rem' }}>
      <ListGroup variant="flush">
      <div className = "row justify-content-center">
      
      <h1>INDONESIA</h1>
      
    </div>
      
      <ListGroup.Item>Positif : {indonesia.positif}</ListGroup.Item>

      <ListGroup.Item>Sembuh : {indonesia.sembuh}</ListGroup.Item>

      <ListGroup.Item>Meninggal : {indonesia.meninggal}</ListGroup.Item>
     </ListGroup>
   </Card>
    
  );
}

export default Indo;
