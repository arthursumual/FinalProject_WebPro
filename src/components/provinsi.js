
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      provinsi
    </div>
  );
}

export default Provinsi;
