import { useState } from "react"

const CountUp = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-減らす</button>
            <button onClick={() => setCount(0)}>リセット</button>
            <button onClick={increment}>+増やす</button>
            <button>count: number = {count}</button>
        </div>
    )
}

export default CountUp;