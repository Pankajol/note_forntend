import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
const Navbar = ({userInfo,onSearchNotes,handleClearSearch}) => {
  
  const [searchQuery,setSearchQuery] = useState("");

  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/login'); // Replace with your login route
  };
  const handleSignUp = () => {
    navigate('/signUp'); // Replace with your registration route
  };

  const onLogout = () =>{
    localStorage.clear();
    navigate("/");
  }

  const handleSearch = () =>{
    if(searchQuery){
      onSearchNotes(searchQuery);
    }
  }

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  }
  return (
    <div className='bg-blue-600 p-4 flex items-center justify-between px-6 py-2 drop-shadow'>
        <h2 className=' text-white text-2xl font-bold  py-2' onClick={onLogout}>Pankaj yadav </h2>
        <SearchBar 
        value={searchQuery}
        onChange={({target}) =>{
          setSearchQuery(target.value);
         }}

         handleSearch={handleSearch}
         onClearSearch={onClearSearch}
        />
        {/* <ProfileInfo userInfo={userInfo} onLogout={onLogout} /> */}
        <div className='flex items-center gap-4'>
      {userInfo ? (
        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
      ) : (
        <div className='flex gap-4'>
          {/* <button
            onClick={handleSignIn}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
          >
            Sign In
          </button> */}
          <div className="text-white flex items-center space-x-1 hover:underline text-sm md:text-base">
             <FaSignInAlt className="text-lg md:text-xl" onClick={handleSignIn}  /> 
              {/* <span>Sign In</span> */}
            </div>
            <div className="text-white flex items-center space-x-1 hover:underline text-sm md:text-base">
             <FaUserPlus className="text-lg md:text-xl" onClick={handleSignUp} />
              {/* <span>Register</span> */}
         </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Navbar

