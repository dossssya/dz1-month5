import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/reducer";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    return (
        <div className="counter">
            <h1>Счетчик</h1>
            <h2>{count}</h2>
            <div className="button-container">
                <button onClick={() => dispatch(increment(1))} className="button">+1</button>
                <button onClick={() => dispatch(decrement(1))} className="button">-1</button>
                <button onClick={() => dispatch(increment(10))} className="button">+10</button>
                <button onClick={() => dispatch(decrement(10))} className="button">-10</button>
                <button onClick={() => dispatch(reset())} className="button">Reset</button>
            </div>
        </div>
    );
}

export default Counter;
