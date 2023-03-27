import { useEffect, useState } from "react"
import { mega } from "../functions/mega"
import NumeroDisplay from "./NumeroDisplay"

export default function Megasena() {
    const [qtde, setQtde] = useState(6);
    const [num, setNum] = useState([]);

    /**Mudança de um estado de um component  de uma forma segura */
    useEffect(()=>{
        setNum(mega());
    },[]);

  function render() {
    return num.map(numero => <NumeroDisplay key={numero} numero={numero} />)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Mega Sena</h1>
      <div style={{ display: "flex" , flexWrap: "wrap", justifyContent: "center"}}>
        {render()}
      </div>
      <div>
        <input type="number" min={6} max={10} value={qtde} onChange={(ev) => setQtde(ev.target.value)} />
        <button onClick={() => setNum(mega(qtde))}>Gerar aposta</button>
      </div>
    </div>
   
  )
}
