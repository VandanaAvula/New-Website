// App.js
import React from 'react';
import { Route,Routes } from 'react-router-dom';

import NextPage from './NextPage';
import MyForm from './MyForm';
import Header from './header';
import UniversityInfo from './UniversityInfo';
function App() {
  return (
   
      <div>
        <Header/>
       
     <Routes>
          <Route path="/" element={<MyForm />} />
         <Route path="/universityInfo" element={< UniversityInfo/>} />
         
     </Routes>
      </div>

 
  );
}
export default App;