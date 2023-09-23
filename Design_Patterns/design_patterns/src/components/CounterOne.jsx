import CounterHOC from "./CounterHOC";

const CounterOne = ({ value, setValue, name }) => {
  return (
    <button onClick={setValue}>
      {name}: {value}
    </button>
  );
};

export default CounterHOC(CounterOne, 1);
