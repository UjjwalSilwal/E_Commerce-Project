import { useEffect,useState } from "react"
import { FaTrash ,FaEdit, FaCheck, FaTimes } from "react-icons/fa"
import Loader from "../../components/Loader"
import { toast } from "react-toastify"
import {
    useGetUsersQuery,
    useDeleteUsersMutation,
    useUpdateUsersMutation,
}   from "../../redux/api/usersApiSlice"
import Message from "../../components/Message"

const UserList = () => {
    
    const {data : users, refetch , isLoading,error }= useGetUsersQuery()

    const [ deleteUser ] = useDeleteUsersMutation()
    const [ updateUser] = useUpdateUsersMutation()

    const [editableUserId,setEditableUserId] = useState(null)
    const [editableUserName, setEditableUserName] = useState('')
    const [editableUserEmail,setEditableUserEmail] = useState('')

    useEffect(() => {
        refetch()
    }, [refetch])
    
    //successfully done
    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await deleteUser(id)
            } catch (error) {
                toast.error(error.data.message || error.error)
            }
        }
    }

    const toggleEdit = (id, username, email) => {
        setEditableUserId(id)
        setEditableUserName(username)
        setEditableUserEmail(email)
    }

    const updateHandler = async (id) => {
        try {
            await updateUser({
                userId: id,
                username: editableUserName,
                email:editableUserEmail,
            })

            setEditableUserId(null)
            refetch()

        } catch (error) {
            toast.error(error.data.message || error.error)
        }
    }

    return <div className="p-4" >
        <h1 className="mb-4 text-2xl font-semibold text-white">Users</h1>
        {isLoading ? (<Loader />) :  error ? (
                <Message variant='danger'>
                {error?.data.message || error.message}
                </Message>
              ) : (
                <div className="flex flex-col md:flex-row">
                    {/* <AdminMenu */}
                    <table className="w-full mx-auto text-white md:w-4/5">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">NAME</th>
                                <th className="px-4 py-2 text-left">EMAIL</th>
                                <th className="px-4 py-2 text-left">ADMIN</th>
                                <th className="px-4 py-2 text-left"></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {users.map(user => (

                                <tr key={user._id}>
                                    {/* For ID shown */}
                                    <td className="px-4 py-2 text-white"> {user._id} </td>

                                    {/* For Name Edit and Shown */}
                                    <td className="px-4 py-2 text-white">
                                        {editableUserId == user._id ? (
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    value={editableUserName}
                                                    onChange={e => setEditableUserName(e.target.value)
                                                    }
                                                    className="w-full p-2 text-black border rounded-lg"
                                                />

                                                <button onClick={() => updateHandler(user._id)}
                                                    className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg" >
                                                    <FaCheck/>
                                                </button>

                                            </div>
                                        ) : (
                                                <div className="flex items-center">
                                                    {user.username} {" "}
                                                    <button onClick={() => toggleEdit(user._id, user.username, user.email)}>
                                                        <FaEdit className="ml-[1rem]"/>
                                                    </button>
                                                </div>
                                        ) }
                                    </td>
                                    
                                    {/* For Email Shown and Edit */}
                                    <td className="px-4 py-2">
                                        {editableUserId == user._id ? (
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    value={editableUserEmail}
                                                    onChange={e => setEditableUserEmail(e.target.value)}
                                                    className="w-full p-2 text-black border rounded-lg"
                                                />
                                                
                                                <button
                                                    onChange={() => updateHandler(user._id)}
                                                    className="py-2 ml-2 text-white bg-blue-500 rounded-lg px--4"
                                                >
                                                    <FaCheck/>  
                                                </button>

                                            </div>
                                        ) : (
                                                <div className="flex items-center">
                                                    <p>{user.email}</p>
                                                    <button
                                                        onClick={() => toggleEdit(user._id,user.username,user.email)}
                                                    >
                                                        <FaEdit className="ml-[1rem]"/>
                                                    </button>
                                                </div>
                                        )}

                                    </td>

                                    <td className="px-4 py-2">
                                        {user.isAdmin ? (
                                            <FaCheck style={{color:"green"}}/>
                                        ) : (
                                                <FaTimes style={{color:"red"}}/>
                                        )}
                                    </td>

                                    <td className="px-4 py-2">
                                        {!user.isAdmin && (
                                            <div className="flex">
                                                <button
                                                    onClick={() => deleteHandler(user._id)}
                                                    className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
                                                >
                                                    <FaTrash/>
                                                </button>
                                            </div>
                                        ) }
                                    </td>

                                </tr>
                                
                            ))}
                        </tbody>

                    </table>

                </div>
            ) }
  </div>
}

export default UserList
