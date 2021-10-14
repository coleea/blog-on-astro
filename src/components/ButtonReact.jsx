import React from 'react'
/* jsxImportSource: react */
import {useEffect, useState} from 'react' 
// import {createSignal, onCleanup} from 'solid-js' 

const app = () => {

    const [count, setCount] = useState(0) ;

    useEffect(_ => {
        setInterval(_=>{setCount(prev => prev + 1)},1000) 
    }, [])


    return (
        <button >
            i am react button {count}
        </button>
    )
}

export default app