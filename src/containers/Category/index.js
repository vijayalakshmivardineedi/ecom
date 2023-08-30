import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../actions/";



const Categtory=(props)=>{

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllCategory());
    },[])
    return (
                <Layout sidebar>
                   <Container>
                    <Row>
                        <Col md={12}>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h1>category</h1>
                            <button>add</button>
                            </div>
                            
                        </Col>
                    </Row>
                    </Container> 
                </Layout>
    )
}
export default Categtory;