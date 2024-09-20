import useGetAllUsers from '../../context/useGetAllUsers.jsx';
import Demo from './Demo.jsx';
import User from './user.jsx';
function Users() {
  const [allUsers, loading] = useGetAllUsers();

  // console.log('all user',allUsers.filteredUsers[0]);
  // console.log(loading)
  // console.log('this is ',allUsers.filteredUsers[0])

  return (
    <div >
       <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      > 
      
        {  allUsers.length && allUsers.filteredUsers.map((user, index) => 
        <Demo key={index} user={user}/>
          )}
      </div>
    </div>
  );
}

export default Users;