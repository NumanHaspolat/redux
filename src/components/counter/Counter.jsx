import React from "react";
import "../counter/counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  //! dispatach({ type: "INC" }) icine 2 value alir , type ve payload , payload zorunlu degildir.
  const dispatach = useDispatch();

  // const counter = useSelector((state) => state.counter);
  // const counter = useSelector((state) => state.count.counter);
  const { counter } = useSelector((state) => state.count); //? index.jsx de count keyini kullandik .
  //!useSelector((icine {state} propu alir) => state.counter) buradaki counter initialState(index.jsx) icinde verdigimiz state.

  const dis = (type) => {
    return { type: type }; //? Isimi kolaylastirmak icin olusturdugum func , Noah sacmaladi ben yaptim
  };

  return (
    <div className="app">
      <h2>Counter With Redux</h2>
      <h1>Counter = {counter} </h1>

      <div className="pro">
        <button
          className="counter-btn inc"
          onClick={() => dispatach(dis("INC"))}
        >
          INC
        </button>
        <button
          className="counter-btn res"
          onClick={() => dispatach(dis("RES"))}
        >
          RES
        </button>
        <button
          className="counter-btn dec"
          onClick={() => dispatach(dis("DEC"))}
        >
          DEC
        </button>
      </div>
    </div>
  );
};

export default Counter;
