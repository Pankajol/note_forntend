// import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import NoteCard from "../../components/Cards/NoteCard";

// import { MdAdd } from "react-icons/md";
// import AddEditNotes from "./AddEditNotes";
// import Modal from "react-modal";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import axiosInstance from "../../utils/axiosInstance";
// import Toast from "../../components/ToastMessage/Toast";
// import EmptyCard from "../../components/EmptyCard/EmptyCard";
// import AddNotesImg from "../../assets/image/emptyimage.png";
// import NodataImg from "../../assets/image/nodataimage.png";
// const Home = () => {
//   const [openAddEditModal, setOpenAddEditModal] = useState({
//     isShown: false,
//     type: "add",
//     data: null,
//   });

//   const [showToastMdg, setShowToasMsg] = useState({
//     isShown: false,
//     message: "",
//     type: "add",
//   });

//   const [allNotes, setAllNotes] = useState([]);
//   const [userInfo, setUserInfo] = useState(null);

//   const [isSearch, setIsSearch] = useState(false);

//   const navigate = useNavigate();
//   const handleEdit = (noteDetails) => {
//     setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
//   };

//   const showToastMessage = (message, type) => {
//     setShowToasMsg({
//       isShown: true,
//       message,
//       type,
//     });
//   };
//   const handleCloseToast = () => {
//     setShowToasMsg({
//       isShown: false,
//       message: "",
//     });
//   };
//   // Get User info
//   const getuserInfo = async () => {
//     try {
//       const response = await axiosInstance.get("/get-user");
//       if (response.data && response.data.user) {
//         setUserInfo(response.data.user);
//       }
//     } catch (error) {
//       if (error.response.status === 401) {
//         localStorage.clear();
//         navigate("/login");
//       }
//     }
//   };

//   // Get all notes

//   const getAllNotes = async () => {
//     try {
//       const response = await axiosInstance.get("/get-all-notes");

//       if (response.data && response.data.notes) {
//         setAllNotes(response.data.notes);
//       }
//     } catch (error) {
//       console.log("An unexpected error occures.Please tyr again ");
//     }
//   };

//   //  delete note
//   const deleteNote = async (data) => {
//     const noteId = data._id;
//     try {
//       const response = await axiosInstance.delete("/delete-note/" + noteId);

//       if (response.data && !response.data.error) {
//         showToastMessage("Note Delete Successfully", "delete");
//         getAllNotes();
//       }
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         console.log("An unexpected error occures.Please tyr again ");
//       }
//     }
//   };

//   // Search for a Notes
//   const onSearchNotes = async (query) =>{
//     try {
//       const response = await axiosInstance.get("/search-note",{
//         params:{ query },

//       });
//       if(response.data && response.data.notes){
//         setIsSearch(true);
//         setAllNotes(response.data.notes);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const updateIsPinned = async (noteData) =>{
//     const noteId = noteData._id
//     try {
//       const response = await axiosInstance.put("/update-note-pinned/" + noteId ,{
//        isPinned:!noteData.isPinned,
//       });

//       if(response.data && response.data.note){
//         showToastMessage("Note Update Successfully");
//         getAllNotes();
        
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleClearSearch = () =>{
//     setIsSearch(false);
//     getAllNotes();
//   }
//   useEffect(() => {
//     getAllNotes();
//     getuserInfo();
//     return () => {};
//   }, []);

//   return (
//     <>
//       <Navbar userInfo={userInfo} onSearchNotes={onSearchNotes} handleClearSearch={handleClearSearch} />

//       <div className="container mx-auto">
//         {allNotes.length > 0 ? (
//           <div className="grid grid-cols-3 gap-4 mt-8">
//             {allNotes.map((item, index) => (
//               <NoteCard
//                 key={item._id}
//                 title={item.title}
//                 date={item.createdOn}
//                 content={item.content}
//                 tags={item.tags}
//                 isPinned={item.isPinned}
//                 onEdit={() => handleEdit(item)}
//                 onDelete={() => deleteNote(item)}
//                 onPinNote={() => updateIsPinned(item)}
//               />
//             ))}
//           </div>
//         ) : (
//           <EmptyCard imgSrc={isSearch ? NodataImg :AddNotesImg} message={isSearch ? `Oops! No notes found matching your search.`:`Start creating your first note! Click the 'Add' button to jot down your 
//             thoughts,ideas,and reminders.Let's get started!`}/>
//         )}
//       </div>
//       <button
//         className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
//         onClick={() => {
//           setOpenAddEditModal({ isShown: true, type: "add", data: null });
//         }}
//       >
//         <MdAdd className="text-[32px] text-white" />
//       </button>

//       <Modal
//         isOpen={openAddEditModal.isShown}
//         onRequestClose={() => {}}
//         style={{
//           overlay: {
//             backgroundColor: "rgba(0,0,0,0.2)",
//           },
//         }}
//         contentLabel=""
//         className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 "
//       >
//         <AddEditNotes
//           type={openAddEditModal.type}
//           noteData={openAddEditModal.data}
//           onClose={() => {
//             setOpenAddEditModal({ isShown: false, type: "add", data: null });
//           }}
//           getAllNotes={getAllNotes}
//           showToastMessage={showToastMessage}
//         />
//       </Modal>

//       <Toast
//         isShown={showToastMdg.isShown}
//         message={showToastMdg.message}
//         type={showToastMdg.type}
//         onClose={handleCloseToast}
//       />
//     </>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Toast from "../../components/ToastMessage/Toast";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import AddNotesImg from "../../assets/image/emptyimage.png";
import NodataImg from "../../assets/image/nodataimage.png";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToastMdg, setShowToasMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });

  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
  };

  const showToastMessage = (message, type) => {
    setShowToasMsg({
      isShown: true,
      message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToasMsg({
      isShown: false,
      message: "",
    });
  };

  // Get User info
  const getuserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  // Get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  // Delete note
  const deleteNote = async (data) => {
    const noteId = data._id;
    try {
      const response = await axiosInstance.delete("/delete-note/" + noteId);
      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted Successfully", "delete");
        getAllNotes();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log("An unexpected error occurred. Please try again.");
      }
    }
  };

  // Search for notes
  const onSearchNotes = async (query) => {
    try {
      const response = await axiosInstance.get("/search-note", {
        params: { query },
      });
      if (response.data && response.data.notes) {
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateIsPinned = async (noteData) => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/update-note-pinned/" + noteId, {
        isPinned: !noteData.isPinned,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully");
        getAllNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  };

  useEffect(() => {
    getAllNotes();
    getuserInfo();
    return () => {};
  }, []);

  return (
    <>
      <Navbar userInfo={userInfo} onSearchNotes={onSearchNotes} handleClearSearch={handleClearSearch} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {allNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allNotes.map((item, index) => (
              <NoteCard
                key={item._id}
                title={item.title}
                date={item.createdOn}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => handleEdit(item)}
                onDelete={() => deleteNote(item)}
                onPinNote={() => updateIsPinned(item)}
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            imgSrc={isSearch ? NodataImg : AddNotesImg}
            message={
              isSearch
                ? `Oops! No notes found matching your search.`
                : `Start creating your first note! Click the 'Add' button to jot down your thoughts, ideas, and reminders. Let's get started!`
            }
          />
        )}
      </div>

      <button
        className="fixed bottom-8 right-8 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => setOpenAddEditModal({ isShown: true, type: "add", data: null })}
      >
        <MdAdd className="text-3xl" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-full max-w-md mx-auto mt-16 bg-white rounded-md p-6 shadow-lg"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </Modal>

      <Toast
        isShown={showToastMdg.isShown}
        message={showToastMdg.message}
        type={showToastMdg.type}
        onClose={handleCloseToast}
      />
    </>
  );
};

export default Home;
