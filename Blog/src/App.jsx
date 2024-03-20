import BlogPage from'./pages/BlogPage';
import BlogItemPage from './pages/BlogItemPage'
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ArticlesPage from './pages/ArticlesPage'
import ArticlesItemPage from './pages/ArticlesItemPage'
import { useState } from 'react';
import SingIn from './Components/SingIn/SingIn'
import SingUp from './Components/SingUp/SingUp'
function App() {
  const [searchQuery, setSearchQuery] = useState('');
 

  return (
      <div >


         
        <Header changeSearchQuery={setSearchQuery}/>
        <Routes>

          <Route path="/blog/:id" element={<BlogItemPage />}/> 
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/articles' element={<ArticlesPage/>}/>
          <Route path="/articles/:id" element={<ArticlesItemPage />}/>
          <Route path='/singIn' element={<SingIn/>}/>
          <Route path='/singUp' element={<SingUp/>}/>
        </Routes>
        <Footer /> 


      </div>
  )
}

export default App
