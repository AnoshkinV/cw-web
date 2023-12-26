import React from 'react'
import { IUser } from '../../../types/userTypes';
import useImage from '../../../utils/hooks/useImage';

interface UserCardProps {
    user: IUser
}

const UserCard: React.FC<UserCardProps> = ({user}) => {
    const image = useImage(user.avatar)
    return ( 
    <article className="flex p-2 items-center bg-black text-white rounded-xl gap-2 hover:scale-105 cursor-pointer">
       <img src={image.imgSrc} onError={image.onError} alt="user" className="w-10 h-10 bg-white rounded-full"/>
       <div className="flex flex-col">
        <span>{user.username}</span>
        <span>{user.email}</span>
       </div>
    </article> 
    );
}
 
export default UserCard;