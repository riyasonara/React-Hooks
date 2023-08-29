import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Counter from './components/usestate/Counter'
import Home from './components/Home'
import FetchData from './components/useEffect/FetchData'
import Render from './components/useRef/Render'

function App() {
  return(
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Counter' element={<Counter/>}/>
      <Route path='/FetchData' element={<FetchData/>}/>
      <Route path='/Render' element={<Render/>}/>
    </Routes>
    </>
  )
}

export default App
