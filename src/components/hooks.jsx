import { useEffect, useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0)


    useEffect(() =>{
        console.log("hello");
    }, [count])

    const increment = () => {
        const result= count + 1
        setCount(result)
    }

    const decrement = () => {
        const result= count - 1
        setCount(result)
    }

    return(
        <div className="m-6">
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <p onClick={decrement}>-</p>
        </div>
    )
}

export default Hooks;



// 3button euta page ma red green blue bg-pink jab blue ma click garda bg-blue huna pareyo and viceversa with using usestate 