import './App.css';
import React, { useState } from "react";
import AmbilNilai from './AmbilNilai'

function App() {
  var [panjang, setNama] = useState("")
    var [lebar, setAlamat] = useState("")
    var rubahNama = (event) => {
      setNama(event.target.value)
    }

    var rubahAlamat = (event) => {
        setAlamat(event.target.value)
    }

  return (
    
    <div className="App">
 
    
      <p>Menghitung Luas dan Keliling Persegi Panjang  </p>

      <p> Masukkan Panjang : </p>
      <input type="text"
             onChange={rubahNama}>
      </input>
    <p> Masukkan Lebar : </p>
    <input type="text"
           onChange={rubahAlamat}>
    </input>
        <AmbilNilai
            
            LUAS = {panjang*lebar}
            KELILING = {panjang*2 + lebar*2}
        />
      
    </div>
  );
}

export default App;