
import React, { useState, useEffect } from "react";
import axios from "axios";
import {ListGroup, Card} from 'react-bootstrap'

const Global = () => {
  const [corona, setCorona] = useState({ positif: NaN, meninggal: NaN, sembuh: NaN })

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setCorona({
          positif: res.data.confirmed.value,
          meninggal: res.data.deaths.value,
          sembuh: res.data.recovered.value
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    

    <Card bg = "secondary" style={{ width: '20rem', paddingRight: '0.25rem', paddingLeft: '0.25rem', paddingTop: '0.10rem' }}>
      <ListGroup variant="flush">
      <div className = "row justify-content-center" >
      
      <h1 >DUNIA</h1>
      
      </div>
      <ListGroup.Item><font color = {'red'}>Positif : {corona.positif}</font></ListGroup.Item>

      <ListGroup.Item><font color = {'green'}>Sembuh : {corona.sembuh}</font></ListGroup.Item>

      <ListGroup.Item>Meninggal : {corona.meninggal}</ListGroup.Item>
     </ListGroup>
   </Card>
  );
}

export default Global;
