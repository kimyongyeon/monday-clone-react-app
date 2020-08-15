import React from 'react';

interface CounterProps {
    name: string;
    age: number;
}

const Counter: React.FC<CounterProps> = (props) => {

    const name = props.name;
    const age = props.age;

    return (
        <div>
            <h1>hello Counter name:{name}, age:{age}</h1>
        </div>
    )

}

export default Counter;