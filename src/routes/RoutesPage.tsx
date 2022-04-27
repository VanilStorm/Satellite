import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InputSearch } from '../components/InputSearch/InputSearch';
import { NoSuchWord } from '../components/NoSuchWord/NoSuchWord';
import { ParamSearch } from '../components/ParamSearch/ParamSearch';

function RoutesPage() {
  return (
    <Routes>
      <Route path='/' element={<InputSearch/>}/>
      <Route path='/:word' element={<ParamSearch/>}/>
      <Route path='/noSuchWord' element={<NoSuchWord/>}/>
    </Routes>
  )
}

export default RoutesPage;
