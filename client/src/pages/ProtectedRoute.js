import React from 'react';
import { Route,Navigate,Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({component,...rest}) {
    const {loggedIn} = useAuth();
  return <Route {...rest} render={(props)=>{
    if(loggedIn){
        return (<Outlet {...props}/>)
    }
        return <Navigate to={{ pathname:"/"}}/>
  }}>

  </Route>;
}

export default ProtectedRoute;
