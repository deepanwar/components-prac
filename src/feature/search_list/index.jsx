import { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Table from '../../components/Table';
import { songsData } from '../../data/songList';
import debounce from 'lodash/debounce';
import Pill from '../../components/Pill';

const SearchList = () => {
  const [term, setTerm] = useState('');
  const [type, setType] = useState('title');
  const [filteredSongsList, setFilteredSongsList] = useState(songsData);

  useEffect(() => {
    if (term) {
      const filtered = songsData?.filter((item) =>
        item[type].toLowerCase().includes(term.toLowerCase())
      );
      console.log(filtered);
      setFilteredSongsList(filtered);
    } else {
      setFilteredSongsList(songsData);
    }
  }, [term, type, songsData]);

  return (
    <div>
      <Heading>Search List</Heading>
      <div className="max-w-lg mx-auto mt-4">
        <SearchInput term={term} setTerm={setTerm} />
        <div className="flex space-x-2 mt-2">
          {term &&
            ['title', 'singer']?.map((item, index) => (
              <Pill
                active={type === item}
                onClick={() => setType(item)}
                key={`pill-${index}`}
              >
                {item}
              </Pill>
            ))}
        </div>
      </div>
      <Table songsList={filteredSongsList} />
    </div>
  );
};

const SearchInput = ({ term, setTerm }) => {
  //   const log = (input) => console.log(input);

  const debounceSearch = debounce(setTerm, 1000);

  const handleSearch = (e) => {
    debounceSearch(e.target.value);
  };
  return (
    <div className="border rounded-sm px-2 py-1.5 border-slate-700 bg-slate-800 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="search"
        name="search"
        id="search"
        onChange={handleSearch}
        className="inline bg-slate-800 border-slate-700 ml-2 w-full focus:outline-none "
      />
    </div>
  );
};

export default SearchList;
