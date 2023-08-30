import { Container,Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import './index.css';
import { signout } from "../../actions/auth.actions";

const DashHeader = (props) => {
   
     const auth=useSelector(state=>state.auth)
     const dispatch=useDispatch()
     
     const logOut=()=>{
        dispatch(signout());
     }

     
    const renderLoginLibnks=()=>{
        
        return (
            <Nav>
                    <li className="nav-item">
                            <span className="nav-link" onClick={logOut}>SignOut</span> 
                            </li>
                           </Nav>
        )
    }
    const renderUnLOggedLinks=()=>{
        return (
            <Nav>
                        <li className="nav-item">
                            <Link to='/admin/signin' className="nav-link">SignIn</Link> 
                            </li>
                            <li className="nav-item">
                            <Link to='/admin/signup' className="nav-link">SignUp</Link> 
                            </li>
                    </Nav>
        )
    }
    return (
        <Navbar className="header-nav-style"  collapseOnSelect expand="lg" bg="dark" variant="dark"  style={{zIndex:1}}>

            <Container >

                <Link to='/' className="navbar-brand">Admin DashBoard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="header-container-style">
                    <Nav className="mr-auto">
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                    <Nav>
                    {auth.authenticate? renderLoginLibnks():renderUnLOggedLinks()} 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
};
export default DashHeader;