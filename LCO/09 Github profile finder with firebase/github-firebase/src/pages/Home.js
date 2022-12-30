import React, { useState, useContext } from "react";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";


  const Home = () => {

    // based on context we will allow the user to access the page
    const context = useContext(UserContext)

    // to take search data
    const [search, setSearch] = useState("")

    // to store the response
    const [user, setUser] = useState(null)

    // we need to design a method which can make a web request 
    // and store all the data in the state

    const fetchDetails = async() =>{
      try {
        const {data} = await axios.get(`https://api.github.com/users/${search}`)
        console.log(data);
        setUser(data)

      } catch (error) {
        console.log(error.messagr);
        toast("User not found", {
          type: "error",
          position: "bottom-right"
        })
      }

    }

     const navigate = useNavigate()

    // to put anything behind login
    if(!context.user?.uid){
      return navigate('/signin')
    }


    return (
      <Container>
        <Row className=" mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                value={search}
                placeholder="Please provide the username"
                onChange={(e)=>{setSearch(e.target.value)}}
              />
                <Button 
                color="primary"
                onClick={fetchDetails}
                >Fetch User</Button>
            </InputGroup>
            { user ? <UserCard user={user} /> : null }
          </Col>
          <Col md="7">
            { user ? (<Repos repos_url={user.repos_url} />) : null }
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Home