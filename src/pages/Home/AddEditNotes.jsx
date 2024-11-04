// import React, { useState } from 'react';
// import TagInput from '../../components/Input/TagInput';
// import UplaodImg from '../../components/UploadImg/UploadImg'; // Assuming this component allows image selection and preview
// import { MdClose } from 'react-icons/md';
// import axiosInstance from '../../utils/axiosInstance';

// const AddEditNotes = ({ noteData, type, getAllNotes, onClose, showToastMessage }) => {
//   const [title, setTitle] = useState(noteData?.title || '');
//   const [content, setContent] = useState(noteData?.content || '');
//   const [tags, setTags] = useState(noteData?.tags || []);
//   const [image, setImage] = useState(noteData?.image || null); // Add image state
//   const [error, setError] = useState(null);

//   // Handle file change and set image
//   const handleFileChange = (file) => {
//     setImage(file); // This assumes UplaodImg passes the file back to the parent component
//   };

//   // Upload image to Cloudinary
//   const uploadImage = async () => {
//     if (!image) return null;

//     const formData = new FormData();
//     formData.append('file', image);
//     formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Replace with your Cloudinary upload preset

//     try {
//       const res = await axiosInstance.post('http://localhost:4000/upload', formData);
//       return res.data.url; // Return the uploaded image URL
//     } catch (error) {
//       setError('Image upload failed');
//       return null;
//     }
//   };

//   // Add Note
//   const addNewNote = async () => {
//     try {
//       const imageUrl = await uploadImage(); // Upload the image first

//       const response = await axiosInstance.post('/add-note', {
//         title,
//         content,
//         tags,
//         imgurl: imageUrl, // Include image URL in the request
//       });

//       if (response.data && response.data.note) {
//         showToastMessage('Note Added Successfully');
//         getAllNotes();
//         onClose();
//       }
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   // Edit Note
//   const editNote = async () => {
//     const noteId = noteData._id;
//     try {
//       const imageUrl = await uploadImage(); // Upload image if there's a new one

//       const response = await axiosInstance.put('/edit-note/' + noteId, {
//         title,
//         content,
//         tags,
//         image: imageUrl || noteData.image, // Use the new image URL if available, otherwise keep the existing one
//       });

//       if (response.data && response.data.note) {
//         showToastMessage('Note Updated Successfully');
//         getAllNotes();
//         onClose();
//       }
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   const handleAddNote = () => {
//     if (!title) {
//       setError('Please enter the title');
//       return;
//     }
//     if (!content) {
//       setError('Please enter the content');
//       return;
//     }
//     setError('');

//     if (type === 'edit') {
//       editNote();
//     } else {
//       addNewNote();
//     }
//   };

//   return (
//     <div className='relative'>
//       <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
//         <MdClose className='text-xl text-slate-400' />
//       </button>
//       <div className='flex flex-col gap-2'>
//         <label className='input-label'>TITLE</label>
//         <input
//           type='text'
//           className='text-2xl text-slate-950 outline-none'
//           placeholder='Go To Gym At 5'
//           value={title}
//           onChange={({ target }) => setTitle(target.value)}
//         />
//       </div>
//       <div className='flex flex-col gap-2 mt-4'>
//         <label className='input-label'>CONTENT</label>
//         <textarea
//           type='text'
//           className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
//           placeholder='Content'
//           rows={10}
//           value={content}
//           onChange={({ target }) => setContent(target.value)}
//         />
//       </div>
//       <div className='mt-3'>
//         <label className='input-label'>TAGS</label>
//         <TagInput tags={tags} setTags={setTags} />
//       </div>
//       <div className='mt-3'>
//         <label className='input-label'>Upload Image</label>
//         {/* Pass handleFileChange as a prop to handle file selection */}
//         <UplaodImg onFileChange={handleFileChange} />
//       </div>

//       {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

//       <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
//         {type === 'edit' ? 'UPDATE' : 'ADD'}
//       </button>
//     </div>
//   );
// };

// export default AddEditNotes;


// chat gpt

import React, { useState } from 'react';
import TagInput from '../../components/Input/TagInput';
import { MdClose } from 'react-icons/md';
// import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';

const AddEditNotes = ({ noteData, type, getAllNotes, onClose, showToastMessage }) => {
  const [title, setTitle] = useState(noteData?.title || '');
  const [content, setContent] = useState(noteData?.content || '');
  const [tags, setTags] = useState(noteData?.tags || []);
  const [file, setFile] = useState(null); // New state for file upload
  const [error, setError] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Add Note with file upload
  const addNewNote = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags);
    if (file) {
      formData.append('file', file); // Append the selected file
    }
    console.log("file name",file.name)

    try {
      const response = await axiosInstance.post('/add-note', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.data && response.data.note) {
        
        showToastMessage('Note Added Successfully');
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  // Edit Note with file upload
  const editNote = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags);
    if (file) {
      formData.append('file', file); // Append the selected file
    }

    const noteId = noteData._id; // Get the ID of the note to edit
    console.log("id",noteId)
    console.log("data",formData)

    try {
      const response = await axiosInstance.put(`/edit-note/${noteId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.note) {
        showToastMessage('Note Updated Successfully');
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };


  // Handle Add or Edit Note
  const handleAddNote = () => {
    if (!title) {
      setError('Please enter the title');
      return;
    }
    if (!content) {
      setError('Please enter the content');
      return;
    }
    setError('');

    if (type === 'edit') {
      editNote();
    } else {
      addNewNote();
      console.log("add note function");
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go To Gym At 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      <div className="mt-3">
        <label className="input-label">UPLOAD FILE</label>
        <input type="file" accept="image/*, video/*, application/pdf" onChange={handleFileChange} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
        {type === 'edit' ? 'UPDATE' : 'ADD'}
      </button>
    </div>
  );
};

export default AddEditNotes;
