import React from "react";
import CreatePost from "../Posts/CreatePost/CreatePost";
import PostList from "../Posts/PostList/PostList";
import { Link } from "react-router-dom";
import UserList from "../Users/UserList/UserList";

const Home = () => {
  return (
    <div className='flex max-w-screen pr-3 h-[100%] justify-between'>
      <div className='w-[25%] sticky min-h-[91vh] bg-black'>
         <ul className='p-1 pt-5 cursor-pointer'>
            <Link to='subs'>
            <li className='flex justify-center items-center rounded-lg text-white hover:text-gray-300 w-[100%] h-10'>Subs</li>
            </Link>
         </ul>
      </div>
      <div className="w-[55%] mt-3">
        <CreatePost />
        <PostList/>
      </div>
      <div>
        <UserList/>
      </div>
    </div>
  );
};

export default Home;
