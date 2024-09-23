import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const AllNotes = () => {
  const [notes, setNotes] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axiosInstance.get('/api/notes'); // Fetch notes from API
        if (Array.isArray(response.data)) {
          setNotes(response.data); // Set the notes only if it's an array
        } else {
          setNotes([]); // Fallback to empty array if the response is not an array
        }
      } catch (err) {
        setError('Failed to fetch notes');
      }
    };

    fetchNotes();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!notes.length) {
    return <div>No notes available</div>; // Handle empty state
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <span>Tags: {note.tags.join(', ')}</span>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
