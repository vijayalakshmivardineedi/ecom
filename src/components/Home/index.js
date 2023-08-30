import DashHeader from "../DashHeader";
import { Row, Col, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import './index.css'
const Home = () => {
    return (
        <div>
            <DashHeader />
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                        <ul>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/product'}>products</NavLink></li>
                            <li><NavLink to={'/order'}>oders</NavLink></li>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                        </ul>
                        </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}> container</Col>
                </Row>
            </Container>

        </div>

    )
}
export default Home;