import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../slice/UserReducer"

const Home = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }
  return (
    <div className="container">
        <h3>CRUD APP</h3>
        <Link to="create-page"> 
          <button className="btn btn-success my-2 fw-bold"> Create +</button>
        </Link>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={`/edit/${user.id}`} className="btn btn-primary fw-bold">Edit</Link>
                      <button onClick={() => handleDelete(user.id)} className=" ms-1 btn btn-danger fw-bold">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home