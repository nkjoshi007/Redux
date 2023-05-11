import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './Navbar';
import { Actioncreators } from './Actioncreators';
import clothes from './img/clothes.jpeg';
function App() {
  const dispatch= useDispatch()
  return (
    <>
    <Navbar/>
    <img src={clothes} alt='Network problem'/>
    <h1 className='center'>The Cloth Store</h1>
    <div className="App">
     <button className='Increment btn' onClick={()=>dispatch(Actioncreators.Increment(100))}>Add</button>
     Add the products of Clothes
     <button className='Decrement btn' onClick={()=>dispatch(Actioncreators.Decrement(100))}>remove</button>
    </div>
    </>
  );
}

export default App;
