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
    });
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')

    }, []);
    useEffect(() => {
        console.log('useEffect first render and every counter changed')
    }, [counter]);

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>

}
export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    const [fakeTime, setFakeTime] = useState(1)


    console.log('SimpleExample')

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter]);

    useEffect(() => {
        setInterval(() => {
            setFakeTime((state) => state + 1)
        }, 1000)
    }, []);


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>count+</button>
        <button onClick={() => setFake(fake + 1)}> fake+</button>
        <div>{fakeTime}</div>


    </>
}