import useGetAllUsers from '../../context/useGetAllUsers.jsx';
import User from './user.jsx';
function Users() {
  const [allUsers, loading] = useGetAllUsers();

  

  // console.log('all user',allUsers.filteredUsers[0]);
  // console.log(loading)
  // console.log('this is ',typeof(allUsers.filteredUsers[0]))
  // console.log(allUsers.filteredUsers.length)

  return (
    <div >
       <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      > 
      
        { allUsers.filteredUsers &&  allUsers.filteredUsers.length && allUsers.filteredUsers.map((user, index) => 
        <User key={index} user={user}/>
          )}
      </div>
    </div>
  );
}

export default Users;