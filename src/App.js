import React,{useState} from "react";
import './App.css';

function App(){

  const[panjang, setpanjang] = useState("") 
  const[lebar, setlebar] = useState("")
  const[hasil, sethasil] = useState("")

  console.log(`panjang : ${panjang}`)
  console.log(`lebar : ${lebar}`)

  function luas(){
    sethasil(panjang * lebar)
  }

  return(
    <div class = "App">
      <p>
        Masukan panjang
      </p>
      <input type = "text" value = {panjang} onChange = {e=> setpanjang(+e.target.value)}></input>

      <p>
        Masukan lebar
      </p>
      <input type = "text" value = {lebar} onChange = {e=> setlebar(+e.target.value)}></input>

      <p>
        <button onClick = {luas}>hasil</button>
      </p>

      <p>
        {hasil}
      </p>

    </div>
  );



}
export default App;