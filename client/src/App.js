
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import { Fragment } from 'react';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';


function App() {
  return (
    <Router>
      <Fragment>
      <div>
       <Navbar/>
       <div id='content'>
       <Routes>
          <Route path="/" exact element={<Products/>}/>
          <Route path="/product/:product_id" element={<ProductDetail/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/basket" element={<Basket/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path = "*" element={<Error404/>}></Route> 
          {/* <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/> */}
  
          
          
        </Routes>
       </div>
        
      </div>
      </Fragment>
    </Router>
  );
}



export default App;
