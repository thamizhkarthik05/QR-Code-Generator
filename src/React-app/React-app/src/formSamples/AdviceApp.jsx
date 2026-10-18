import { useState } from "react"



export const AdviceApp = () => {

    const [advice,setAdvice] = useState("Hit the button to get Motivation!");
    const [count,setCount] = useState(0);

    async function getAdvice()
    {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
        setCount((c) => c+1);
        
    }
  return (

    <>
      <div>
          <h3>{advice}</h3>
          <button onClick={getAdvice} >Generate Quote</button>
          <p>You have read <b>{count}</b> qoutes!</p>
      </div>

      <div className="foot">
            <h2>Developed By M Kaarthik</h2>
      </div>

    </>
  )
}
