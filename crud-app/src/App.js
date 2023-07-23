import logo from './logo.svg';
import './App.css';

// components 
import NavBar from './components/NavBAr';
import CodeforInterview from './components/codeforinterview';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element= {<CodeforInterview />} />
       <Route path="/all" element= {<AllUsers />} />
       <Route path="/add" element= {<AddUsers />} />
       <Route path="/edit/:id" element={<EditUser />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
