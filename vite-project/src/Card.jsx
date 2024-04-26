import React from 'react'
import Form from './Form';

function Card({name,setname,getProduct}) {
    async function deleteProduct(id) {
        const res = await fetch('https://northwind.vercel.app/api/products/'+id ,{method:"DELETE"});
        const data = await res.json()
        await getProduct()
        return data

    }
  return (
    <div>
        <Form name={name} setname={setname} getProduct={getProduct}></Form>
        {name&&name.map((x) => (
       <h2 key={x.id} setname={setname} >{x.name} 
       <button onClick={()=>deleteProduct(x.id)}>Delete</button>
       </h2>
      ))}
    </div>
  )
}

export default Card