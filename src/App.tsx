import { useState } from 'react';
import './App.css';
import { useCreateUserMutation, useGetUsersQuery } from './api/apiSlice';

 type User = {
    id: number;
    name: string
}

const App = () => {

  const [name, setName] = useState('')
  
  const { data: usersData, isError, error, isLoading, isSuccess } = useGetUsersQuery(null);

  const [createUser] = useCreateUserMutation()

  const handlClick = () => {
    createUser(name)

    setName('')
  }

  return (
    <div>
        <h1> RTK Query Learn </h1>
         { usersData && <p> Total users: {usersData?.length} </p> }
         <div className="input">
             <input type="text" placeholder='user name' value={name} onChange={(e) => setName(e.target.value)} />
             <button onClick={handlClick} > add user </button>
         </div>
         {usersData?.map((user: User) => (
            <h2 key={user.id} > {user.name} </h2>
         ))}
    </div>
  )
}

export default App