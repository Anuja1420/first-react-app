//import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
//import Vehicles from "./Components/Vehicles";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";
import {Routes, Route} from "react-router-dom";
import VehicleList from "./Components/VehicleList";




function App(){
  
 return(
  <>
  <Menu/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Contacts" element={<Contacts/>}/>
    <Route path="/vehicle-list" element={<VehicleList/>}/>

  </Routes>
  <Footer/>
  </>
    
 )
}


export default App;

