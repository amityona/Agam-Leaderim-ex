import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

import Header from './Header';
import axios from 'axios';

import { IUserN } from './Common/IUser';
import UsersData from './UsersData';
import { API_URL } from './Common/config';

function App() {

  const [data, setData] = React.useState<IUserN[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [filter, setFilter] = React.useState<string>("ALL");
  const [user, SetChooseUser] = React.useState<IUserN | null>(null);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the Random User API using async/await
        //?page=3&results=10&seed=abc&inc=gender,name,nat,email,phone,gender,location,picture,dob"

        const filterurl: string = filter == "ALL" ? `` : `&nat=${filter.toLowerCase()}`;

        const response = await axios.get(`${API_URL}/?page=${page}&results=10&seed=${page}${filterurl}`);
        await setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page, filter]);

  return (
    <div className="flex flex-col justify-end relative">
      <div>
        <Header Change={setFilter} />
      </div>
      <div className='w-full justify-center'>
        <UsersData data={data} ChooseUser={SetChooseUser} />
      </div>
      <div className='flex justify-center items-end fully h-screen mt-10'>
        <Pagination count={1000} page={page} onChange={handleChange} style={{ display: "flex", alignItems: "end", "justifyContent": "center", color: "white", background: "#5d57c9", width: "500px" }} />
      </div>

      {/* Modal */}
      {user && <div className='h-[600px] w-[600px] rounded-lg  absolute bg-white top-28 left-96'>
        <div className='flex align-top text p-5'>
          <IconButton onClick={() => { SetChooseUser(null) }}>
            <CloseIcon />
          </IconButton>
        </div>
        {/*IMG Section */}
        <div className='flex w-full justify-center flex-col items-center gap-5'>
          <img alt={user?.name?.first} className='flex justify-center items-center text-center rounded-full w-32 h-32' src={`${user?.picture?.medium}`} />
          <h2 className='text-gray font-bold'> {`${user?.name?.first} ${user?.name?.last} `} </h2>
        </div>

        {/*
        {/*Data Section 1 }

        <div className='flex justify-between m-10'>
          <h2 className='text-gray'> {`${user?.email} `} </h2>
          <h2 className='text-gray'> {`${user?.phone} `} </h2>
          <h2 className='text-gray'> {`${user?.gender} `} </h2>
        </div>

        {/*Data Section 2}
        <div className='flex justify-between mt-10 p-10 m-10'>
          <h2 className='text-gray'> {`${user?.nat} `} </h2>
          <h2 className='text-gray'> {`${user?.location?.city} `} </h2>
          <h2 className='text-gray'> {`${user?.dob?.date} `} </h2>
        </div>
*/}
        <table className='w-full text-gray justify-center text-center mt-10 h-24'>
          <thead>
            <tr>
              <th>{`${user?.email} `}</th>
              <th>{`${user?.phone} `}</th>
              <th>{`${user?.gender} `}</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <th>{`${user?.nat} `}</th>
              <th>{`${user?.location?.city} `} </th>
              <th>{`${user?.dob?.date} `}</th>
            </tr>
          </tbody>
        </table>

      </div>

      }
    </div >
  );
}

export default App;
