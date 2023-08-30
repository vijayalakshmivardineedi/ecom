import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../actions/user.actions";
import Layout from '../../components/Layout';
const Signup = (props) => {
    
    const [firstName,setFirtsName]=useState('')
    const [secondName,setSecondName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const auth=useSelector(state=>state.auth)
    const dispatch =useDispatch()
    const user=useSelector(state=>state.user);
   
   
   
    const userSignup=(e)=>{
        e.preventDefault()
        const user={
           firstName,secondName,email,password 
        }
        dispatch(signup(user));

    }
    if (auth.authenticate){
        return navigate('/')
    }
    if(user.loading){
        return <p>Loading.....!</p>
    }
   



    return (
       
            <Layout>
        
        <Container>
            {user.message}
            <Row style={{ marginTop: "50px" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={userSignup}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="First Name"  
                                    value={firstName}
                                    onChange={(e)=>setFirtsName(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicSecondName">
                                    <Form.Label>Second Name </Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Second Name" 
                                    value={secondName}
                                    onChange={(e)=>setSecondName(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </Layout>
    );

}



export default Signup;