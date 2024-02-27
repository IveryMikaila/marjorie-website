import {Routes,Route} from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
<Navbar />
<Routes>
<Route element={<Home/>} path='/' />
<Route element={<Contact/>} path='/contact' />
</Routes>
    </div>
  );
}

export default App;
