import React from 'react'
import { getPosts } from '../../../services/postApi';
import PostCard from '../PostCard/PostCard';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/useRedux';
import { setPosts } from '../../../store/slices/postSlice';

const PostList = () => {
    const {post} = useAppSelector(state => state.post)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
       getPosts().then((data) => dispatch(setPosts(data)))
    },[])

    return (
    <div className="flex flex-col gap-2 my-2">
        {post?.map((post) => (
            <PostCard post={post}/>
        ))}
    </div>
    );
}
 
export default PostList;