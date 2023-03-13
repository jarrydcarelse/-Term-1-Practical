// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Compare from './pages/compare';
import Timeline from './pages/timeline';
import BasicNavbar from './components/navbar';

function App() {
  return (

    <div className='App'>
      <BasicNavbar />
      <Routes>
       <Route path='/' element= {<Home />} />
       <Route path='/com' element= {<Compare />} />
       <Route path='/time' element= {< Timeline/>} />
     </Routes>
    </div>



    // <Routes>
    //   <Route path='/' element= { <ApiCall />  } />
    // </Routes>
  );
}

export default App;
