function user() {
    return (
      <div className="flex space-x-4 px-6 py-7 hover:bg-gray-400 duration-500 cursor-pointer" >
      <div className="avatar online">
        <div className="w-14 rounded-full overflow-hidden">
          <img src="https://pearlss4development.org/wp-content/uploads/2020/05/profile-placeholder.jpg" />
        </div>
      </div>
  
      <div>
          <h1 className="font-bold space-x-1 px-2 py-4">Ankit Raj</h1> 
      </div>
      </div>
    );
  }
  
  export default user;