import React, { useReducer, useEffect } from "react";

import { Container, Col, Row } from "reactstrap";

// react-router-dom3
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

// react toastify stuffs
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// firebase stuffs
//import firebase config and firebase database
import {firebaseConfig} from "./utils/Config"
import firebase from "firebase/app";
import "firebase/database"
import "firebase/storage"

// components
import AddContact from "./pages/AddContact";
import Contacts from "./components/Contact";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ViewContact from "./pages/ViewContact";
import PageNotFound from "./pages/PageNotFound";

// context api stuffs
// import reducers and contexts
import reducer from "./context/reducer"
import { ContactContext } from "./context/Context";
import {SET_CONTACT, SET_LOADING} from "./context/action"

//initlizeing firebase app with the firebase config which are in ./utils/firebaseConfig
//initialize FIREBASE
firebase.initializeApp(firebaseConfig)

// first state to provide in react reducer
const initialState = {
  contacts: [],
  contact: {},
  contactToUpdate: null,
  contactToUpdateKey: null,
  isLoading: false
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // will get contacts from firebase and set it on state contacts array
  const getContacts = async () => {
    //load existing data, loading icon
    dispatch({
      type: SET_LOADING,
      payload: true
    })

    const contactsRef = await firebase.database().ref("/contacts")
    contactsRef.on("value", snapshot=>{ //value will look for all the values in the database 
                                        //and spanshot to get all the data in snapshot
      dispatch({
        type: SET_CONTACT,
        payload: snapshot.val()
      })
      dispatch({
        type: SET_LOADING,
        payload: false
      })


    }) 



  };
  

  // getting contact  when component did mount
  useEffect(() => {
    getContacts()
  }, []);

  return (
    <Router>
      <ContactContext.Provider value={{state, dispatch}} >
        <ToastContainer />
        <Header />
        <Container>
          <Routes>
            <Route path="/contact/add" element={AddContact} />
            <Route path="/contact/view" element={ViewContact} />
            <Route path="/" element={Contacts} />
            <Route path="*" element={PageNotFound} />
          </Routes>
        </Container>

        <Footer />
      </ContactContext.Provider>
    </Router>
  );
};

export default App;
