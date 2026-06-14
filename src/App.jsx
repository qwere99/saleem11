import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Order, Auth } from './pages/index.js';
import Header from './components/shared/Header.jsx'; 

function App() {
  return (
    <Router>
      {/* الهيدر يظهر هنا بشكل ثابت في أعلى كل الصفحات */}
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;