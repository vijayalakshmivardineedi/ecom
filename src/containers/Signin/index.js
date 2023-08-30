import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap'
import {/*isUserLoggedIn,*/ login} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import { /* useEffect,*/ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout';



const Signin = (props) => {
	
	
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('');
	const auth=useSelector(state=>state.auth)
	const navigate =useNavigate()
	//const [error,setError]=useState('');
	//const naviagate=useNavigate()
	const dispatch=useDispatch();
	/*useEffect(()=>{
		if(!auth.authenticate){
			dispatch(isUserLoggedIn());
		}
		
	},[]);*/

	const userLogin=(e)=>{
		
		e.preventDefault();
		const user={
			email,password
		}
		
		dispatch(login(user));
 
	}
	if(auth.authenticate){
		return navigate('/')
	}

	return (
		
		<Layout>
		<Container>
			
			<Row style={{ marginTop: "50px" }}>
				<Col md={{ span: 6, offset: 3 }}>
					<Form onSubmit={userLogin}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control 
							type="email" 
							value={email} 
							placeholder="Enter email"
							onChange={(e)=>setEmail(e.target.value)}/>
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
export default Signin;


