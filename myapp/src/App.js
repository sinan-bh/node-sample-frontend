import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './component/CreateUser';
import AllUsers from './component/AllUsers';
import UserDetails from './component/UserDetails';
import UpdateUser from './component/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/createUser' element={<CreateUser />}/>
        <Route path='/' element={<AllUsers />}/>
        <Route path='/:id' element={<UserDetails />}/>
        <Route path='/:id/:id' element={<UpdateUser />}/>
      </Routes>
    </div>
  );
}

export default App;
