import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container} from "reactstrap";
import Cards from "./components/Cards";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchUserDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    console.log("responce :", data);
    const detail = data.results[0];
    setDetails(detail);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <Container>
      <Cards details={details} />
    </Container>
  );
};

export default App;
