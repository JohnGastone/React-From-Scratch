import { useState } from 'react'

export default function MyApp() { 
    return ( <div>
        <h1>
            Counters that update separately!
        </h1>
        <MyButton count={ count } onClick={handleClick} />
        <MyButton count={ count } onClick={handleClick} />
    </div>
    );
}
 
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>
               Clicked {count} times
            </button>
        </div>
    );
}