import './App.css';
import Navbar from './components/Navbar';
import BodySite from './components/BodySite';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <> 
    <Router>
    <Navbar/>
     {/* <Route path="/footer" component={Footer}></Route> */}
     <BodySite/>
     <Menu/>
     <Footer/>
    </Router>
    </>
  
  );
}

export default App;
