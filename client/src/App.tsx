import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Navigate, Route, Routes } from 'react-router'
import { useAppSelector } from './utils/hooks/useRedux'
import AuthForm from './components/Forms/AuthForm/AuthForm'
import Home from './components/Home/Home'
import UserPage from './components/Users/UserPage/UserPage'

function App() {
  const { isAuth } = useAppSelector(state => state.user)
  return (
    <div className='min-h-screen'>
     <NavBar/>
        <Routes>
          {!isAuth
            ?
            <>
              <Route path="/auth" element={<AuthForm title="Authorization" buttonTitle="Log In" isLogin={true} />} />
              <Route path="/registration" element={<AuthForm title="Registration" buttonTitle="Registration" />} />
              <Route path="*" element={<Navigate to='/auth' />} />
            </>
            :
            <Route path="/home" element={<Home/>} />}
          <Route path="*" element={<Navigate to='/home' />} />
          <Route path='user/:userId' element={<UserPage/>}/>
        </Routes>
      </div>
  )
}

export default App
