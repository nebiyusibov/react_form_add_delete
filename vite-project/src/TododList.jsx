import Card from "./Card"



function TodoList({name,setname,getProduct}) {

   
  return (
  <>
<div>
   <Card name={name} setname={setname} getProduct={getProduct}></Card>
</div>
  </>
  )
}

export default TodoList