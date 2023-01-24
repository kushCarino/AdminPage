

import Index from './Pages/index';
import Users from './Pages/Users';
import AddEvent from './Pages/AddEvent';
import AddNotification from './Pages/AddNotification';
import ForgotPassword from './Pages/forgotpass';
import Register from './Pages/register';
import { Route, Routes } from 'react-router-dom';
import Announcement from './Pages/announcement';
import Cafteria from './Pages/Cafteria';
function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<Index />} />
        <Route path ="index" element = {<Index />} />
        <Route path ="/users" element = {<Users />} />
        <Route path ="/addAnnoucement" element = {<AddNotification />} />
        <Route path ="/addCafteria" element = {<AddEvent />} />
        <Route path ="/announcement" element = {<Announcement />} />
        <Route path ="/cafteria" element = {<Cafteria />} />
        <Route path ="/register" element = {<Register />} />
        <Route path ="/forgotpass" element = {<ForgotPassword />} />


      </Routes>

      </>

  );
}

export default App;
