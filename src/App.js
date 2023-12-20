import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Account from './Components/Account';
import Buy from './Components/Buy.js';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Mens from './Components/Mens';
import Topbar from './Components/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Women from './Components/Women.js';
import Kids from './Components/Kids.js';
import Offers from './Components/Offers.js';
import Combo from './Components/Combo.js';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
   <>

<BrowserRouter>
<Topbar/>
<Routes>
<Route path='/' element={<Home/>}/>           
<Route path='/Cart/:id' element={<Cart/>}/>

{/* /cart/:id ":id denotd that the component is running based on the id value" */}
<Route path='/Mens' element={<Mens/>}/>
<Route path='/Women' element={<Women/>}/>
<Route path='/kids' element={<Kids/>}/>
<Route path='/offers' element={<Offers/>}/>
<Route path='/Account' element={<Account/>}/>
<Route path='/Combo' element={<Combo/>}/>
<Route path='/Buy' element={<Buy/>}/>

</Routes>
<Toaster/>
</BrowserRouter>
    
   </>
  );
}

export default App;
