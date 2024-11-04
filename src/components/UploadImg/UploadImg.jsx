
import React, { useState } from 'react';
// import axiosInstance from "../../utils/axiosInstance";
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadedFileUrl(res.data.url);
    } catch (err) {
      console.error('Error uploading file:', err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>

      {uploadedFileUrl && (
        <div>
          <h3>Uploaded File:</h3>
          <img src={uploadedFileUrl} alt="Uploaded" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
