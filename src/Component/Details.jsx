
import { useLocation,useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Details = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const{pathname} = useLocation();
  console.log(location);
  return (
     
    <div>
        <h1 className="text-2xl ">Details</h1>
        <h1 className='text-xl mt-5'>
            Book Id : <span className='font-extrabold'>{id}</span>
        </h1>
        <br />
        <button onClick={() => navigate(-1)}>Back</button>
        <Link className="text-blue-500" to={`${pathname}/profile`}>Profile</Link>
    </div>
  )
}

export default Details