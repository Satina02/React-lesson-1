import React, { useState } from 'react';

function getInitialState(){
    console.log('*********');
    return new Date().getDate()
}

const Counter = () => {

    const [counter, setCounter] = useState(() => getInitialState())
    const [person, setPerson] = useState({
        name: 'Jogn', 
        lastname: 'Snow'
    })

    function increment(){
        setCounter((prevstate) => prevstate +1)
        setCounter((prevstate) => prevstate +1)
    }

    function decriment(){
        setCounter(counter -1)
    } 

    function changePerson(){
        setPerson((prev) => {
            return {
                ...prev,
                name: 'Emily'
            }
        })
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className="btn btn-success">+</button>
            <button onClick={decriment} className="btn btn-danger">-</button>
            <button onClick={changePerson} className="btn btn-warning">Change name</button>            
            <p>{JSON.stringify(person)}</p>  
        </div>
    );
};

export default Counter;