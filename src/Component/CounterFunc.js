import React from "react";

export default function CounterFunc() {
    const [counter, setCounter] = React.useState(0);

    return (
        <button className="btn btn-danger" onClick={() => setCounter(counter + 1)}>
            Counter : {counter}
        </button>
    )
}