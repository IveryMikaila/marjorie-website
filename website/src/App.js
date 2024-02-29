import {Routes,Route} from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Submit from './Components/Submit';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
<Navbar />
<Routes>
<Route element={<Home/>} path='/' />
<Route element={<Contact/>} path='/contact' />
<Route element={<Submit/>} path='/thankyou'/>
</Routes>
<Footer />
    </div>
  );
}

export default App;
