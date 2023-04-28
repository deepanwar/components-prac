import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [singer, setSinger] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!singer && !title) return;
    onSubmit({ title, singer });
    setTitle('');
    setSinger('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-3 max-w-lg mx-auto">
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="px-3 py-1.5 rounded-sm  border border-slate-700 mt-1 bg-slate-800 w-full "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="singer">Singer</label>
        <input
          type="text"
          name="singer"
          id="singer"
          className="px-3 py-1.5 rounded-sm  border border-slate-700 mt-1 bg-slate-800 w-full "
          value={singer}
          onChange={(e) => setSinger(e.target.value)}
        />
      </div>
      <button className="rounded-sm bg-rose-500 text-white px-4 py-2 font-medium">
        Add
      </button>
    </form>
  );
};

export default Form;
