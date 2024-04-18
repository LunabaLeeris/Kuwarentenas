import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import Home from './Home';
import Pertussis from './Pertussis/Pertussis';
import Covid19 from './Covid19/Covid19';
import Tuberculosis from './Tuberculosis/Tuberculosis';
import Building from './Building';
import Mobile from './Mobile';
import './config';
import { useRef, useEffect, useState } from "react";

const small = 950;

function App() {
  const container = useRef();
  const [size, setSize] = useState("medium");

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentRect.width < small) {
          setSize(prevSize => (prevSize !== "small" ? "small" : prevSize));
        } else {
          setSize(prevSize => (prevSize !== "medium" ? "medium" : prevSize));
        }
      }
    });

    if (container.current) {
      resizeObserver.observe(container.current);
    }

    return () => {
      if (container.current) {
        resizeObserver.unobserve(container.current);
      }
    }
  }, []);

  return (
    <div ref={container}>
      { size === "small" ? <Mobile/> :
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="about" element={<About></About>} />
              <Route path='donate' element={<Building />}></Route>
              <Route path='contribute' element={<Building />}></Route>
            </Route>
            <Route path="/pertussis" element={<Pertussis></Pertussis>}>
            </Route>
            <Route path="/covid19" element={<Covid19></Covid19>}>
            </Route>
            <Route path="/tuberculosis" element={<Tuberculosis></Tuberculosis>}>
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}

export default App
