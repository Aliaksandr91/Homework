import {useEffect, useState} from "react";

export const ResetEffect = () => {
    const [counter, setCounter] = useState(1)
    console.log('component rendered')
    useEffect(() => {
        console.log('effect occurred')
        return () => {
            console.log('reset effect')
        }
    }, [counter]);
    const increase = () => setCounter(counter + 1)
    return <>
        Hello counter: {counter}
        <button onClick={increase}>+</button>
    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('component rendered' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((text) => text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text]);

    return <>
        Typed text: {text}

    </>
}