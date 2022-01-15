
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div>
       <Navbar/>
       <div id='content'>
       <Routes>
          <Route path="/" exact element={<Products/>}/>
          <Route path="/product/:product_id" element={<ProductDetail/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
       </div>
        
      </div>
    </Router>
  );
}



export default App;