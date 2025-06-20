
import {Route , Routes} from 'react-router-dom'
// Import your Home component (create one if it doesn't exist)

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Service.jsx";
import Navbar from './components/navbar.jsx';
import State from './hooks/State.jsx'; // Import your State component (create one if it doesn't exist)
import Form from './hooks/Form.jsx'; // Import your Form component (create one if it doesn't exist)
import Effect from './hooks/Effect.jsx'; // Import your Effect component (create one if it doesn't exist)
// Make sure this file exists

function App() {
  return (
    <>
      <Navbar /> 
      <h1><br />
            
            <br />My Vite Project</h1>
      {/* <Form/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/state" element={<State />} />
        <Route path='/form' element={<Form />} />
        <Route path="/effect" element={<Effect />} />
      </Routes>
    </>
    
  )
}

export default App
