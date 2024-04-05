import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='fixed w-full z-10'><Navbar /></div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
