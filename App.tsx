
import './App.css';
import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import ShowData from './components/ShowData';
import ExpenseTracker from './components/ExpenseTracker';


function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowData/>}/>
        <Route path = 'add' element={<ExpenseTracker onTrue={undefined} onClose={undefined}/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
