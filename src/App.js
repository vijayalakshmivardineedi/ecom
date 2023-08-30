
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import ProtectRoute from './components/HOC/ProtectRoute';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import DashBoard from './components/DashBoard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Products from './containers/Products';





const App = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  }, []);
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/product' element={<Products/>}/>
        <Route exact path='/order' element={()=><p>orders</p>}/>
        <Route element={<ProtectRoute />} />
        <Route path='/admin/signin' element={<Signin />} />
        <Route path='/admin/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
