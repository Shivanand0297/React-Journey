import React, { useState, useContext } from 'react'
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap"

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom' 
import {toast} from "react-toastify"


const SignUp = () => {
  const navigate = useNavigate()
  const context = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = () =>{
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
    .then((res)=>{
      console.log(`Response: ${res}`);
      context.setUser({
        email: res.user.email,
        uid: res.user.uid
      })
    })
    .catch((error)=>{
      console.log(`Error: ${error.message}`);
      toast(error.message, {
        type: "error",
        position: "bottom-right"
      })
    })
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    handleSignUp()
  }

  // if user is logged in we dont want to show the signup form
  if(context.user?.uid){
    return navigate("/")
  }

  return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleFormSubmit}>
							<CardHeader className=''>SignIn here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
  
}

export default SignUp