import { NavLink, Route, Routes } from 'react-router-dom';
import FileUpload from './feature/file_upload';
import FormNTable from './feature/form_table';
import Pagination from './feature/pagination';
import Quiz from './feature/quiz';
import SearchList from './feature/search_list';

const navigations = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: 'form-table',
    title: 'Form and Table',
  },
  {
    to: 'search-list',
    title: 'Search List',
  },
  {
    to: 'quiz',
    title: 'Quiz',
  },
  {
    to: 'upload-file',
    title: 'File upload with preview',
  },
  {
    to: 'pagination',
    title: 'Pagination',
  },
];

function App() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen text-slate-200 z-0">
        <div className="max-w-[1300px] mx-auto  flex gap-x-4 z-20 bg-slate-900">
          <SideBar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="form-table" element={<FormNTable />} />
              <Route path="search-list" element={<SearchList />} />
              <Route path="upload-file" element={<FileUpload />} />
              <Route path="pagination" element={<Pagination />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <Background /> */}
    </>
  );
}

export const SideBar = () => {
  return (
    <div className="max-w-[250px]  w-full shrink-0 hidden md:block">
      <div className="fixed top-0 h-screen p-4 max-w-[250px] w-full border-r ">
        <h2 className="text-xl font-medium">Content</h2>
        <ul className="list-disc list-inside mt-3">
          {navigations?.map((nav, index) => (
            <li key={`${index}`} className="hover:underline">
              <NavLink
                className={({ isActive }) =>
                  isActive && 'text-rose-500 underline'
                }
                to={nav?.to}
              >
                {nav?.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="h-[95vh] flex justify-center items-center">
      <h1 className="text-7xl font-bold animate__animated animate__zoomInRight animate__delay-1s">
        Components Practice
      </h1>
    </div>
  );
};

export default App;
