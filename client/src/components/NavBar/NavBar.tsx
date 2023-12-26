import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { useAppSelector } from '../../utils/hooks/useRedux'

export const NavBar = () => {
    const {isAuth, user} = useAppSelector(state => state.user)

    return (
        <div className="navbar flex justify-between items-center max-w-screen bg-black text-white h-16 px-4">
            <h1 className="flex gap-1 cursor-pointer">
                <Link to="/home" className="text-white hover:text-gray-300">
                Logo
                </Link>
            </h1>
            <div className="flex gap-1 ml-auto">
                {isAuth ? (
                    <ul className="flex gap-1 mr-2 cursor-pointer">
                    <Link to={`/user/${user.id}`}>
                        <li>My Profile</li>
                    </Link>
                </ul>
                ) : (
                    <ul className="flex gap-1 mr-4 cursor-pointer">
                    <Link to="/registration">
                        <li>Registration</li>
                    </Link>
                    <Link to="/auth">
                        <li className='ml-2'>Sign In</li>
                    </Link>
                    </ul>
                )}
            </div>

            {!isAuth && <span className="text-white">{user?.username}</span>}
        </div>
    
        
    )

}