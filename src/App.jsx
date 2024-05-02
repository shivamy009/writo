
 import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Forgotpassword from './Pages/Forgotpassword'
import Signup from './Pages/Signup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CoursesDetailed from './Pages/CoursesDetailed'
import DoutclearingDe from './Pages/DoutclearingDe'
 
 function App() {

 
  return (
     <>
     <ToastContainer />
     <BrowserRouter>

     <Header/>
     <Routes>

     <Route path='/' element={<Home/>}/> 
     <Route path='/login' element={<Login/>}/> 
     <Route path='/forgot-password' element={<Forgotpassword/>}/> 
     <Route path='/sign-up' element={<Signup/>}/> 
     <Route path='/courserd' element={<CoursesDetailed/>}/> 
     <Route path='/douted' element={<DoutclearingDe/>}/> 


     </Routes>

     <Footer/>

     </BrowserRouter>
     
     </>
     
  )
}

export default App
 