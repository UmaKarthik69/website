import Navabar from './componets/navbar';
import Footer from './componets/footer';
import Home from './views/home';
import './App.css';
import Productdetails from './views/productdetails';
import Products from './views/products';
import { Routes, Route } from 'react-router-dom';
import Cart from './views/cart';
import Users from './views/Users';
import Viewgobibo from './componets/viewgobibo';
import Register from './views/register';
import Login from './views/login';
import TodoApp from './views/todo/TodoApp'


function App() {
  return (
    <div className="App">
      <Navabar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/views' element={<Viewgobibo/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/loginuser' element={<Login/>}/>
        <Route path='/todo' element ={<TodoApp/>}/>
        {/* <Route path='/rooot' element={<Filters/>}/> */}
        <Route path="/productdetails/:productName" element={<Productdetails/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;