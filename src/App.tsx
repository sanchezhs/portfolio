import './App.css'
import CustomNavbar from './navbar/CustomNavbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <div style={{ marginTop: '80px', padding: '20px' }}>
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
      {/* <Router> */}
      {/*   <CustomNavbar /> */}
      {/*   <div style={{ marginTop: '80px', padding: '20px' }} > */}
      {/*     <Routes location={location}> */}
      {/*       {/* Route for Home */}
      {/*       <Route index path="/" element={<Home />} /> */}
      {/*       <Route path="/projects" element={<Projects />} /> */}
      {/*     </Routes> */}
      {/*   </div> */}
      {/*   <Footer /> */}
      {/* </Router > */}
    </>
  );
}

export default App
