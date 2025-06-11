import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

import NavBar from '../components/nav_bar'
import CursosPage from '../pages/Cursos_page'
import DiuPage from '../pages/diu_page'
import CcPage from '../pages/cc_page'
import DiucertPage from '../pages/diu_cert'
import DiumatPage from '../pages/diu_mat'
import DiutareaPage from '../pages/diu_tarea'
import DiuproyectPage from '../pages/diu_proyect'
import PDFPage from '../pages/pdf_page'
import ForoPage from '../pages/foro_Page'
import UploadPage from '../pages/upload_page'
import utfsmLogo from '../assets/25.-USM.png'


const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <header className='layout__title'>
          <img src={utfsmLogo} alt='Logo UTFSM' className='layout__logo' style={{ height: '50px', width: 'auto' }} />
          <NavBar />
        </header>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/cursos' element={<CursosPage />} />
            <Route path='/diu' element={<DiuPage />} />
            <Route path='/cc' element={<CcPage />} />
            <Route path='/diucert' element={<DiucertPage />} />
            <Route path='/diumat' element={<DiumatPage />} />
            <Route path='/diutarea' element={<DiutareaPage />} />
            <Route path='/diupro' element={<DiuproyectPage />} />
            <Route path='/pdf' element={<PDFPage />} />
            <Route path='/foro' element={<ForoPage />} />
            <Route path='/up' element={<UploadPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
