
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <>
      {/* <h1>Xup</h1> */}
      {/* <Layout/> */}
      <Routes>
        <Route path="/" element = {<Layout/>} />
        <Route index element = {<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
      
    </>
  );
}

export default App;
