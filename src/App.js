
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import ProtectRoute from './components/HOC/ProtectRoute';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import DashBoard from './components/DashBoard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Products from './containers/Products';
import Home from './containers/Home';
import Orders from './containers/Orders';
import Categtory from './containers/Category';





const App = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  },[]);
  return (

    <BrowserRouter>
      <Routes>
      <Route path='/admin/signin' element={<Signin />} />
        <Route path='/admin/signup' element={<Signup />} />
        <Route element={<ProtectRoute/>}/>

        <Route exact path='/' element={<Home />}/>
        <Route exact path='/product' element={<Products/>}/>
        <Route exact path='/order' element={<Orders/>}/>
        <Route exact path='/category' element={<Categtory/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
