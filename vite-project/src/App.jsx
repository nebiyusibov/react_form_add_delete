
import './App.css'
import TodoList from './TododList'
import { useEffect,useState } from 'react';
function App() {
  const [name, setname] = useState([]);
  async function getProduct() {
      const res = await fetch('https://northwind.vercel.app/api/products');
      const data = await res.json();
      console.log(data)
      setname(data)
    
  }
  useEffect(()=>{
      getProduct()
  },[])

  return (
    <>
      <TodoList name={name} setname={setname } getProduct={getProduct} ></TodoList>
      

    </>
  )
}

export default App
