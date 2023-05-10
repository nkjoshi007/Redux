import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './Navbar';
import { Actioncreators } from './Actioncreators';
function App() {
  const dispatch= useDispatch()
  return (
    <>
    <Navbar/>
    <h1 className='center'>The shoe store</h1>
    <div className="App">
     <button className='Increment btn' onClick={()=>dispatch(Actioncreators.Increment(100))}>Add</button>
     Add the products of shoe
     <button className='Decrement btn' onClick={()=>dispatch(Actioncreators.Decrement(100))}>remove</button>
    </div>
    </>
  );
}

export default App;
