
import { Col, Container, Row } from "react-bootstrap"
import DashHeader from "../DashHeader"
import { Link } from "react-router-dom"



const Layout=(props)=>{
    const token=localStorage.getItem('token')
    return(
        <>
            <DashHeader/>
            {
                props.sidebar ?
                <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/product'}>Products</Link></li>
                            <li><Link to={'/order'}>Orders</Link></li>
                            <li><Link to={'/category'}>Categories</Link></li>
                           
                        </ul>
                        </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}> 
                    {props.children}
                    </Col>
                </Row>
            </Container>
            :props.children
            }
            
        </>
    )
}

export default Layout