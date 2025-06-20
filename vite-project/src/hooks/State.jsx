import { useState } from "react";
import './State.css'; // Ensure you have a CSS file for styling

const State = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    return (
        <div className="button-container">
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment❤️</button>
            <button onClick={()=>setCount(count-1)}>Decrement😕</button>
            <button onClick={()=>setCount(0)}>Reset🔄️</button>





                </div>
            )
        }
export default State;