import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUser } from "../slice/UserReducer"


const CreatePage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email }))
    navigate("/")
  }

  return (
    <div className="container p-3">
        <div className="d-flex justify-content-center align-items-center">
            <form
              onSubmit={handleSubmit} 
              className="form-control w-50 p-4  bg-primary-subtle"
            >
                <h2>Add New User</h2>
                <input onChange={e => setName(e.target.value)} className="form-control my-2" type="text" placeholder="Name" />
                <input onChange={e => setEmail(e.target.value)} className="form-control" type="email" placeholder="Email" />
                <button className="btn btn-success my-3">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePage