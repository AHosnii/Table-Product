import { Route,  BrowserRouter, Routes } from 'react-router-dom';
// import MyNavbar from './components/navbar/MyNavbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar/MyNavbar';
import ViewProduct from './components/ViewProduct/ViewProduct';

const App = () => {
    return (
      <>
      
        <BrowserRouter>
          <MyNavbar />
          <div className="container">
            <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />
              <Route path="/view/:productId" element={<ViewProduct />} /> 
               {/* Add this route */}
            </Routes>
          </div>  
          
        </BrowserRouter>
      </>
    );
};

export default App;
