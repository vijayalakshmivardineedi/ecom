/*import { Outlet, useNavigate } from "react-router-dom";




const useAuth=()=>{
    const user={loggedIn:false};
    return user && user.loggedIn
}

const ProtectRoute=()=>{
     const navigate=useNavigate();
    const isAuth=useAuth();

   
    return (
        isAuth?<Outlet/>:navigate('/')
    )
}
export default ProtectRoute;*/


import { Route, useNavigate } from "react-router-dom";


const ProtectRoute=({component:Component,...rest})=>{
   
    const navigate=useNavigate();
    return <Route {...rest} component={(props)=>{
        const token=window.localStorage.getItem('token');
        if(token){
            return <Component {...props}/>
        }else{
            return navigate(' /signin')
        }
    }} />
}

export default ProtectRoute