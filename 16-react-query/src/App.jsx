import React, { useState } from "react";
import { useQuery } from "react-query";

const Button = () => {
  const query = useQuery("query-key", () => { 
    // As soon as the component mounts it makes a request
    // and also after loosing the mouse focus again makes request to keep the data upto date.
    // then after successfull fetch it moves the query to stale state
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random());
      }, 2000);
    });
  });

  console.log(query);
  return <button>iam a button {query.data}</button>;
};

const App = () => {
  const [toggleButton, setToggleButton] = useState(true)

  return (
    <>
      App
      { toggleButton && <Button />}
      <button onClick={() => setToggleButton(!toggleButton)}>Toggle button</button>
    </>
  );
};

export default App;
