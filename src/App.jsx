import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import Home from './Home';
import Pertussis from './Pertussis/Pertussis';
import Covid19 from './Covid19/Covid19';
import Tuberculosis from './Tuberculosis/Tuberculosis';
import Building from './Building';
import './config';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About></About>} />
          <Route path='donate' element={<Building />}></Route>
          <Route path='contribute' element={<Building />}></Route>
        </Route>
        <Route path = "/pertussis" element={<Pertussis></Pertussis>}>
        </Route>
        <Route path = "/covid19" element={<Covid19></Covid19>}>
        </Route>
        <Route path = "/tuberculosis" element={<Tuberculosis></Tuberculosis>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
