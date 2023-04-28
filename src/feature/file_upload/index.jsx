import React from 'react';
import Heading from '../../components/Heading';
import { useState } from 'react';

const FileUpload = () => {
  const [previewURL, setPreviewURL] = useState('');
  const [uploadedFile, setUploadedFile] = useState('');

  const hangleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setUploadedFile('');
    setPreviewURL('');
  };

  return (
    <div className="">
      <Heading>Upload file and show Preview</Heading>
      <div className="mt-4 w-full flex justify-center gap-x-2">
        <input
          type="file"
          name="uploadHere"
          id="uploadHere"
          className="hidden"
          onChange={hangleFileUpload}
        />
        <label
          htmlFor="uploadHere"
          className="rounded-full px-4 py-1.5 text-white bg-rose-500 "
        >
          Upload
        </label>
        {previewURL && (
          <button
            className="rounded-full px-4 py-1.5 text-white bg-slate-500"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
      <div className="mt-4">
        {previewURL && (
          <div className="p-8 h-[600px] flex justify-center">
            <img src={previewURL} alt="preview" className="h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
