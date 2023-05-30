import React, { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const [items, setItems] = useState([
    {
        id:1,
        checked:true,
        item:"Django Unchained"
    },
    {
        id:2,
        checked:false,
        item:"Wall Street"
    },
    {
        id:3,
        checked:true,
        item:"God Father"
    }
])

const handleClick = (id) =>{
    const listItems = items.map((item)=>item.id===id ? {
        ...item,checked : !item.checked}:item)
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleDelete = (id) =>{
    const listItems = items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}


  return (
   <div className="App">
    <Header
    title="To Do List"
     />
    <Content 
    items={items}
    handleClick={handleClick}
    handleDelete={handleDelete}
    />
    <Footer
    length={items.length}
     />
   </div>
  );
}

export default App;
