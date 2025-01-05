import './App.css'
import CustomNavbar from './navbar/CustomNavbar';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <CustomNavbar />
        <div style={{ marginTop: '80px', padding: '20px' }}>
          <AnimatedRoutes />
        </div>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App
