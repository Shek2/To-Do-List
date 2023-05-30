import React from "react";
import ItemsList from "./ItemsList";

const Content = ({ items, handleClick, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{marginTop:'2rem'}}
        >Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;







































/*
const [name, setName] = useState("Earn");

    const theme = () =>{
        const arrTheme = ["Earn","Goal","Give"]
        const int = Math.floor(Math.random()*3)
        setName (arrTheme[int])
    }

    const[count,setCount] = useState(0);

    const handleClick = (name) =>{
        alert(`Thanks for the support ${name}`);
    }

    const handleClick2 = (e) =>{
        alert(e.target.innerText);
    }

    function icrementFunction() {
        setCount(prev => prev + 1)
    }

    function decrementFunction() {
        setCount(prev => prev - 1)
    }

*/

/*
<p onDoubleClick={()=>handleClick("Chris")}>Let's {name} Money</p>
        <button onClick={theme}>Subscribe</button>
        <button onClick={icrementFunction}>+</button>
        <span>{count}</span>
        <button onClick={decrementFunction}>-</button>
*/
