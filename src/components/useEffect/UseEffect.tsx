import {useEffect, useState} from "react";

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        //api
        //setInterval
        //indexDB
        //document.getElementById
        //document.title = 'User'
    } );
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')

    },[] );
    useEffect(() => {
        console.log('useEffect first render and every counter changed')
    },[counter] );

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>


}