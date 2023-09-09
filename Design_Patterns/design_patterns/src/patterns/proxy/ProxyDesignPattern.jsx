import { useState } from "react";

const ProxyDesignPattern = () => {
  const [counter, setCounter] = useState(0);

  const person = {  // from backend
    name: "shivanand",
    id: 1,
    balance: 100,
  };

  const proxyData = new Proxy(person, {
    set: (obj, prop, value) =>  {
      if(prop === "name"){
        obj[prop] = value;
      } else {
        throw new Error("You Can only change name property")
      }
    },
    get: (obj, prop) => {
      return obj[prop]; // You can get any property but can only set name property
    }
  })

  return (
    <>
    <p>proxy design pattern</p>
      <div>Name: {proxyData.name}</div>
      <div>id: {proxyData.id}</div>
      <div>balance: {proxyData.balance}</div>
      <button
        onClick={() => {
          setCounter((c) => c + 1);
          proxyData.id = 2 // Note: this should not be allowed to change the data from backend at client
          console.log(proxyData)

        }}
      >
        counter: {counter}
      </button>
    </>
  );
};

export default ProxyDesignPattern;
