import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Carrier from "./pages/Carrier"
import NotFound from "../src/pages/NotFound"
import AddUser from "../src/Componant/users/AddUser";
import EditUser from "../src/Componant/users/EditUser";
import User from "../src/Componant/users/User";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route  exact path='/carrier' element={<Carrier/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route  path="*" element={<NotFound/>} />
        <Route exact path="/users/add" component={AddUser} />
<Route exact path="/users/edit/:id" component={EditUser} />
<Route exact path="/users/:id" component={User} />
      </Routes>
     
    </div>
  );
}

export default App;



