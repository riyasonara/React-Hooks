import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Counter from './components/usestate/Counter'
import Home from './components/Home'
import FetchData from './components/useEffect/FetchData'
import Render from './components/useRef/Render'
import Memo from './components/useMemo/Memo'
import Context from './components/useContext/Context'
import Callback from './components/useCallBack/Callback'
import Reducer from './components/useReducer/Reducer'
import Navigate from './components/useHistory/Navigate'
import Local from './components/CustomHooks/Local'

function App() {
  return(
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Counter' element={<Counter/>}/>
      <Route path='/FetchData' element={<FetchData/>}/>
      <Route path='/Render' element={<Render/>}/>
      <Route path='/Memo' element={<Memo/>}/>
      <Route path='/Context' element={<Context/>}/>
      <Route path='/Callback' element={<Callback items={["Andhra Pradesh","Assam","Bihar","Gujarat","West Bengal"]}/>}/>
      <Route path='/Reducer' element={<Reducer/>}/>
      <Route path='/Navigate' element={<Navigate/>}/>
      <Route path='/Local' element={<Local/>}/>
    </Routes>
    </>
  )
}

export default App
