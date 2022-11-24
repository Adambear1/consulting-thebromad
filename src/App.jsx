import 'mdb-ui-kit'; // lib
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

import "./utils/styles.css"

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
