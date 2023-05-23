import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "../slice/UserReducer"


const Update = () => {
    const {id} = useParams()
    const users = useSelector((state) => state.users)
    const updatingUser = users.filter(f => f.id == id)
    const {name, email} = updatingUser[0]
    const [upname, setName] = useState(name)
    const [upemail, setEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUser({
            id: id,
            name: upname,
            email: upemail
        }))
        navigate("/")
    }

  return (
    <div className="container p-3">
        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={handleUpdate} className="form-control w-50 p-4  bg-primary-subtle">
                <h2>Update User</h2>
                <input 
                    value={upname} 
                    className="form-control my-2" 
                    type="text" 
                    placeholder="Name" 
                    onChange={e => setName(e.target.value)} 
                />
                <input 
                    value={upemail} 
                    className="form-control" 
                    type="email" 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)} 
                />
                <button className="btn btn-success my-3">Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update