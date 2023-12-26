import React from 'react'
import useInput from '../../../utils/hooks/useInput';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/useRedux';
import { postCreate } from '../../../services/postApi';
import { addPost } from '../../../store/slices/postSlice';

const CreatePost = () => {
    const {id} = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()
    const postText = useInput('')

    const onPostSubmit = () => {
        postCreate(id, postText.value).then((data) => dispatch(addPost(data)))
    }

    return ( 
    <article className="flex w-[100%] flex-row p-2 pt-5 pb-5 items-center gap-3 rounded-xl bg-gray-900">
        <input type="text" placeholder="Tell about your day" className="w-[100%] bg-inherit placeholder:text-white text-white outline-none" value={postText.value} onChange={postText.onChange}/>
        <button className="px-1 text-white hover:text-blue-500 rounded-lg" onClick={onPostSubmit}>Create</button>
    </article> );
}
 
export default CreatePost;