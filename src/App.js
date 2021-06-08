import { useState, useEffect } from 'react'
import './App.css';

function App() {
    let [count, setCount] = useState(0);

    // 2 argumenten
    // 1e: callback -> wat wil je doen
    // 2e: dependency array: -> wanneer wil je dit doen
    // lege dependency rendert alleen op mount. useEffect(() => {}, []), bijvoorbeeld data fetching
    useEffect(() => {
        console.log("Leeg dependency array");
    }, []);

    useEffect(() => {
        console.log("Voer dit uit wanneer count veranderd!")
        if (count >= 10) {
            setCount(0);
        }
    }, [count]);

    function addOne() {
        setCount(count + 1)
    }

    function setTo0(){
        setCount(0);
    }

  return (
     <div className="App">
         <header className="App-header">
             <p>{count}</p>
             <button onClick={addOne}>+</button>
             <button onClick={setTo0}>0</button>
         </header>
     </div>
  );
}

export default App;
