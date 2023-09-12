// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SellerHomepage from './pages/CustomerHomepage/SellerHomepage';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app-wrapper'>
      <Router>
       {/* <Header changeLoggedIn = {setIsLoggedIn} hasLoggedIn = {isLoggedIn}/> */}
        <Routes>
          <Route exact path= "/" element={<SellerHomepage />}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
