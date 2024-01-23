import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./screens/HomePage"
import Details from './screens/Details';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/details' element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
