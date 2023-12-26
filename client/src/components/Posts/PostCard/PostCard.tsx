import React from 'react'
import { IPost } from '../../../types/userTypes';
import useImage from '../../../utils/hooks/useImage';

interface PostCardProps {
    post: IPost
}

const PostCard: React.FC<PostCardProps> = ({post}) => {
       const image = useImage(post?.user?.avatar)
    return ( 
        <article className="w-[100%] bg-black text-white flex flex-col p-1 gap-1 rounded-lg">
            <div className="flex items-center gap-1 text-gray-300 underline w-[30%] rounded-md p-1">
                <img src={image.imgSrc} onError={image.onError} alt="user" className="w-8 bg-white rounded-full"/>    
                    <span className="cursor-pointer hover:text-slate-500 ml-4">{post.user.username}</span>
            </div>
            <p className='mx-6'>{post.post_text}</p>
        </article>
     );
}
 
export default PostCard;