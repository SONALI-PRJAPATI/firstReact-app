import React from 'react'
import Nav from '../src/Component/Nav'
import RoutesComp from './RoutesComponent/RoutesComp'

const App = () => {

  // const getuser = async () =>{
  //     try{
  //       const {data} = await axios.get("/users")
  //       console.log(data);
  //     }
  //     catch(error){
  //         console.log(error);
  //     }

    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then((res) => console.log(res.data))
    // .catch((err) => console.log(err))
  //}

  return (
    
    <div className="w-[80%] h-screen m-auto">
      <Nav/>
      <hr />
     <RoutesComp/>
    
    </div>
  )
}


export default App