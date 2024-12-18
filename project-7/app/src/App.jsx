import Signin from "./Pages/Signin/Signin"
import Signup from "./Pages/Signup/Signup"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function Routers(){
  return(
    <div>
    <BrowserRouter>
  <nav>
  <Link to='/Signin'>  </Link>
    <Link to='/Signup/'>  </Link>
  </nav>


   <Routes>
      <Route path='/Signin' element = {<Signin/>}/>
      <Route path='/Signup' element = {<Signup/>}/>
    </Routes>
  
    </BrowserRouter>

    
  </div>
  )
  

}

function App(){

  return(
     <>
      <Routers/>
     </>
  )
}

export default App