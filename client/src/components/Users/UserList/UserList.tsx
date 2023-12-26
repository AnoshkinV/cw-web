import React from "react";
import { IUser } from "../../../types/userTypes";
import { getUsers } from "../../../services/userApi";
import UserCard from "../UserCard/UserCard";
import { Link } from "react-router-dom";


const UserList = () => {
    const [users, setUsers] = React.useState<IUser[] | null>(null)

    React.useEffect(() => {
        getUsers().then((data) => setUsers(data))
    },[])
    return ( 
        <div className="flex flex-col gap-2 mt-3 w-[100%]">
                {users?.map((user) => (
                    <Link to={`/user/${user.id}`}>
                    <UserCard user={user}/>
                    </Link>
                ))}
        </div>
     );
}
 
export default UserList;

