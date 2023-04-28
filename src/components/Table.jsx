import React from 'react';

const Table = ({ songsList }) => {
  return (
    <table className="w-full border border-slate-700 mt-4 rounded-sm">
      <thead className="text-left border-b border-slate-700">
        <tr>
          <th className="px-4 py-2 bg-salte-300">S No.</th>
          <th className="px-4 py-2 bg-salte-300">Song</th>
          <th className="px-4 py-2 bg-salte-300">Singer</th>
        </tr>
      </thead>
      <tbody>
        {songsList?.map((song, index) => (
          <TableRow song={song} index={index} key={`${song?.song}-${index}`} />
        ))}
      </tbody>
    </table>
  );
};

const TableRow = ({ song, index }) => {
  return (
    <tr className="even:bg-slate-800/50">
      <td className="px-4 py-2">{index + 1}</td>
      <td className="px-4 py-2">{song?.title}</td>
      <td className="px-4 py-2">{song?.singer}</td>
    </tr>
  );
};

export default Table;
