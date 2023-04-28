import React from 'react';

const Pill = ({ children, active, className, ...restProps }) => {
  return (
    <div
      className={`rounded-full text-xs px-3 py-1 border-slate-700 border cursor-pointer capitalize  ${
        active && 'bg-rose-500 border-rose-500 text-white'
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Pill;
