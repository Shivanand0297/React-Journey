import CounterHOC from "./CounterHOC";

const CounterTwo = ({ value, setValue, name }) => {
  return (
    <button onMouseOver={setValue}>
      {name}: {value}
    </button>
  );
};

export default CounterHOC(CounterTwo, 2);
