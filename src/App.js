
import './App.css';
import Project from './componet/Project';
import Projctheader from './componet/Projctheader';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Contact from './componet/Contact';
import About from './componet/About';
import Home from './componet/Home';
import Footer from './componet/Footer';
import User from './componet/User';
// function Mycomponet({nameForclass,name}){
//   return <>
//   <div  className={nameForclass}>{name}</div>
//   <hr/>
//   </>
// }



function App() {
  return (
      <BrowserRouter>
      
      <Projctheader></Projctheader>
        <Project></Project>
        <Routes>
        <Route path='/contact' element={ <Contact></Contact>}></Route>
        <Route path='/' element={<Home></Home>}></Route>

         <Route path='/about' element={<About> </About>}> </Route>
         <Route path='/user/:id' element={<User></User>}></Route>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
      
      
  );
}

export default App;
