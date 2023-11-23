import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Page404 } from '../pages'

const Routers = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={
                    <Home />
                }
            />
            <Route
                path='/login'
                element={
                    <Login />
                }
            />
            <Route
                path='*'
                element={
                    <Page404 />
                }
            />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers