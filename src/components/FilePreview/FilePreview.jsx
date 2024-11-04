export const FilePreview = ({ fileUrl, fileType }) => {
    if (fileType.startsWith('image/')) {
      // Render image
      return <img src={fileUrl} alt="Note file" className="note-image" />;
    } else if (fileType.startsWith('video/')) {
      // Render video
      return (
        <video controls className="note-video">
          <source src={fileUrl} type={fileType} />
          Your browser does not support the video tag.
        </video>
      );
    } else if (fileType === 'application/pdf') {
      // Render PDF link
      return (
        <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="note-pdf-link">
          View PDF
        </a>
      );
    } else {
      return null;
    }
  };
  