import './App.css';
import React from 'react'

const useState = React.useState

function App() {

    // const[myStateVariable, setMyStateVariable]  = useState
    // ('Initial Value') 

    // let whatUseStateReturns = useState(false);
    // let myThing = whatUsesStateReturns [0];
    // let changeMyThing = whatUseStateReturns [1];
    // The old way 
    // <button onClick={()  => += 1}></button>

    //<button onClick = {() => setCount (count + 1)}>Click Me! </button>

    const [name, setName] = useState('Jeff')
    const [count, setCount] = useState(0)
    const [nameInput, setNameInput] = useState('')

    const handleClick = () =>{
        console.log("clicked");

        setCount(count + 1)
    }
        
    const handleSubmit = () => {
            setName(nameInput)
            setNameInput('')
        }
    

    const downClick = () => {
        console.log("clicked");

        setCount(count - 1)
    }


    
    
    return (
        <div className="App">
            {/* <input onChange={() => console.log(('name changed!'))} placeholder="name" /> */}
            {/* <input onChange={(event) => console.log(('name changed!' , event.target.value))} placeholder="name" /> */}
            <input value={nameInput} onChange={(event) => setNameInput(event.target.value)} placeholder="name" />
            <button onClick={handleSubmit}>Submit</button>
            <p>Hello! My name is {name}.</p>
            {/* <button  onClick={() => console.log('clicked!')}   >Click me!</button> */}
            <button  onClick= {handleClick}  >Click me!</button>
            <button  onClick= {downClick} >Click Down!</button>

            <p>I've clicked the button {count} times.</p>
        </div>
    );
} 

export default App;
