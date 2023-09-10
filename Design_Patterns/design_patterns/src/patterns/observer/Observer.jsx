import { useState } from "react";
import { store } from "./store";
import { useStore } from "./useStore";

const Observer = () => {
  const [count, setCount] = useState(store.count);
  store.subscribe(setCount)

  // by using custom hook
  const countByHook = useStore(store.count)

  return (
    <div>
      <p>Observer</p>
      <button onClick={() => store.increment()}>
        Subscriber count is {count}
      </button><br />

      <button onClick={() => store.increment()}>
        Subscriber count is {countByHook}
      </button>
    </div>
  );
};

export default Observer;
