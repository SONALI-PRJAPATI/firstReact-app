import { useState ,useEffect } from "react";
import axios from "../helper/axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  
const navigate =  useNavigate();
const [posts, setPosts] = useState([])
const SubmitHandler =()=>{
  navigate("/show")
  //send the data  tonthe database
  // and switch the page
  //navigate(1);
  //navigate(-1);
}

const getposts = async() =>{
  try{
    const {data} = await axios.get("/posts")
    setPosts(data);
  }
  catch(err){
    console.log(err);
  }
}

let renderposts ="Loading..."
if (posts.length > 0) {
  renderposts = posts.map((post) =>{
    console.log(post)
    return(
    <div className="bg-red-100 p-3 mr-2 mb-2" key={post.id}>
       <h1 className="font-2xl">{post.title}</h1>
       <small>{post.body}</small>
    </div>
    )
})
}

useEffect(() =>{
  getposts();
},[])


  return (
    <div>
      <h1 className="text-2xl font-extrabold">Book Entries</h1>
      {/* <button className="bg-green-300 py-2 px-5 my-3" onClick={getposts}> Get Posts</button>
      <br /> <br />
      <button onClick={SubmitHandler} className="bg-red-300 py-3 px-7">Submit</button> */}
       <div className="flex flex-wrap">{renderposts}</div>
    </div>
  )
}

export default Create