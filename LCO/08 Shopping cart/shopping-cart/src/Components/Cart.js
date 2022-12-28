import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Row,
    Col
} from "reactstrap"


const Cart = ({buyNow, removeItem, cartItem}) => {

    let amount = 0;
    cartItem.forEach(item=>{
        amount = parseFloat(amount) + parseFloat(item.productPrice) //since api data will be in string formate
    })

  return (
    <Container fluid>
        <h1 className='text-success'>Your Cart</h1>
        <ListGroup>
            {cartItem.map(item=>(
                <ListGroupItem key={item.id}>
                    <Row>
                        <Col>
                            <img
                            src={item.tinyImage}
                            width={80}
                            />
                        </Col>
                        <Col className='text-center'>
                            <div className='text-primary'>
                                {item.productName}
                            </div>
                            <span>
                                price: Rs {item.productPrice}
                            </span>
                            <Button 
                            color='danger'
                            onClick={()=>{removeItem(item)}}
                            >Remove
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))}
        </ListGroup>
        {
            cartItem.length >=1 ? (
                <Card className='text-center mt-3'>
                    <CardHeader>Grand Total</CardHeader>
                    <CardBody>
                        Your amount for {cartItem.length} items is Rs {amount}
                    </CardBody>
                    <CardFooter>
                        <Button color='success'
                        onClick={buyNow}
                        >Pay Now</Button>
                    </CardFooter>
                </Card>
            ) : (
                <h1 className='text-warning'>Your cart is empty</h1>
            )
        }
    </Container>
  )
}

export default Cart