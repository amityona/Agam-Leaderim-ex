import React from 'react'
import { IUser } from './Common/IUser'

interface IUserDataProps {
    data: IUser[];
    ChooseUser: (argu: IUser) => void;
}

const UsersData = ({ data, ChooseUser }: IUserDataProps) => {
    return (
        <div className='bg-bg-2 w-full flex justify-center h-full '>
            <table className='w-full text-white justify-center text-center'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Date of birth</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody className='space-y-5'>

                    {data?.map((user: IUser) => {
                        return <tr key={user?.phone} className='hover:bg-gray' onClick={() => { ChooseUser(user) }} >
                            <td className='flex justify-center mt-3 items-start'> <img alt={user?.name?.first} className='flex justify-center text-center rounded-full w-10 h-10' src={`${user?.picture?.medium}`} /></td>
                            <td>{`${user?.name?.first} ${user?.name?.last} `}  </td>
                            <td>{user?.phone}</td>
                            <td>{user?.gender}</td>
                            <td>{user?.location?.city}</td>
                            <td>{user?.dob?.date}</td>
                            <td>{user?.nat}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>

    );
};


export default UsersData