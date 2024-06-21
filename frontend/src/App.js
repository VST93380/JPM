import './styles/App.css';
import './styles/login.css';
import Home from './components/Home';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

    useEffect(() => {
      const originalTitle = document.title;
      const handleBlur = () => {
        document.title = "Come back 😢";
      };
  
      const handleFocus = () => {
        document.title = originalTitle;
      };
  
      window.addEventListener('blur', handleBlur);
      window.addEventListener('focus', handleFocus);
  
      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener('blur', handleBlur);
        window.removeEventListener('focus', handleFocus);
      };
    }, []);
  
  return (
    <>

      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Home />
    </>
  );
}

export default App;