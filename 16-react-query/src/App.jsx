import React, { useState } from "react";
import { useQuery } from "react-query";
import DependentQuery from "./DependentQuery";
import Posts from "./Post";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";

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

  // useQuery(["key1", "key2", userid]) // will work same as useEffect dependencies -> will make network call when userid changes

  console.log(query);
  return <button>iam a button {query.data}</button>;
};

const App = () => {
  const [toggleButton, setToggleButton] = useState(true)

  return (
    <>
      {/* { toggleButton && <Button />}
      <button onClick={() => setToggleButton(!toggleButton)}>Toggle button</button> */}
      {/* <DependentQuery/> */}
      <Routes>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<PostDetail/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
      </Routes>
    </>
  );
};

export default App;
