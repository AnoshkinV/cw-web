import React from 'react'
import { useParams } from 'react-router';
import { getUserById } from '../../../services/userApi';
import { IUserInfo } from '../../../types/userTypes';
import useImage from '../../../utils/hooks/useImage';

const UserPage = () => {
    const { userId } = useParams()
    const [userIfo, setUserInfo] = React.useState<IUserInfo | null>(null) 
    const image = useImage(userIfo?.user?.avatar)

    React.useEffect(() => {
        getUserById(userId).then(data => setUserInfo(data))
    },[])
    return ( 
      <div className='flex justify-center p-4'>
      <div className='flex w-[80%] bg-white rounded-lg shadow-md p-4'>
        <img className='w-16 h-16 rounded-full object-cover mr-4' src={image.imgSrc} onError={image.onError} alt="" />
        <div className='flex flex-col'>
          <span className='font-bold text-lg'>{userIfo?.user.username}</span>
          <span className='text-gray-500 text-sm'>Posts: {userIfo?.postCount}</span>
          <span className='text-gray-500 text-sm'>Subscribers: {userIfo?.subscriberCount}</span>
          <span className='text-gray-500 text-sm'>Email: {userIfo?.user.email}</span>
          <span className='text-gray-500 text-sm'>ID: {userIfo?.user.id}</span>
        </div>
      </div>
    </div> );
}
 
export default UserPage;