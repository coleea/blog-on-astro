/* jsxImportSource: solid */
import {render} from 'solid-js/web' 
import {createSignal, onCleanup} from 'solid-js' 

const app = () => {

    const [count, setCount] = createSignal(0) ;
    const id = setInterval( _ => setCount(count() +1), 1000) ;

    return (
        <button >
            i am solid button {count()}
        </button>
    )
}

export default app