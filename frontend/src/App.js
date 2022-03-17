
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <Router>

      <Navbar />
      { /* SideDrawer */}
      <Backdrop/>
      

      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    
    </Router>
  );
}

export default App;
