
import './App.css'
import Course from './components/Course'
import Home from './components/Home/Home'
import {Route,Routes} from "react-router-dom"
import Courses from './components/courses/Courses'
import Signup from './components/Signup'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Course' element={<Courses/>}/>
      <Route path='/Signup' element={<Signup/>}/>
     
    </Routes>
      
    </>
  )
}

export default App
