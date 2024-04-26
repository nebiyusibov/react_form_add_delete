import { useState } from "react";

function Form({getProduct}) {
   const [inpName,setInpName]=useState("")
   const [inpPrice,setInpPrice]=useState("")
    async function addProduct() {

        const newProduct={
            name:inpName,
            unitPrice:inpPrice
        }
    
          fetch('https://northwind.vercel.app/api/products' ,{
            method: 'POST',
            body: JSON.stringify({
                name:inpName,
                unitPrice:inpPrice
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then(res=>console.log(res))
       


    }
  return (
    <div>
        <input type="text"
        value={inpName}
        onChange={(e)=>setInpName(e.target.value)}/>
        <input type="text"
         value={inpPrice}
         onChange={(e)=>setInpPrice(e.target.value)}/> 
        <button onClick={addProduct}>Add</button>
    </div>
  )
}

export default Form