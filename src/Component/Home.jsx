// import { useState } from "react";
// import axios from "../helper/axios"
// import { useEffect } from "react";

// const Home = () => {
// const [images, setimages] = useState([]);
// const [page, setpage] = useState(1)

// const getimages = async() =>{
//   try{
//     const {data} = await axios.get(
//       `https://picsum.photos/v2/list?page=${page}&limit=100`);

//      setimages(data);
//     //console.log(data);
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// let renderimages ="Loading..."
// if (images.length > 0) {

//   renderimages = images.map((image) =>(
//     <div className="shadow w-[25%] p-3 mr-2 mb-2" key={image.id}>
//      <img src={image.download_url} alt="" />
//        <small>{image.author}</small>
//     </div>
//   ))
 
// }
// useEffect(() =>{
//   getimages();
// },[page])


//   return (
//     <div>
//      <h1 className="text-2xl mb-10 font-extrabold">Homepage</h1>
//       {/* <button className="bg-green-300 py-2 px-5 my-3" onClick={getusers}> Get Users</button> */}
      
//       <div className="flex flex-wrap">{renderimages}</div>

//       <div className="text-center">
//         <a href="">Prev</a>
//         <a href="">Next</a>
//       </div>
//     </div>
//   ) 
// }

// export default Home
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [images, setimages] = useState([])
    const [page, setpage] = useState(1)
    const getimages = async () => {
        try {
          const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=11 `)
          setimages(data)

        } catch (error) {
          console.error(error);
        
        }
      }

      let renderimages = "Loading images..."
      if(images.length > 0) {
        renderimages =  images.map((image) => {
            return (
            <div key={image.id} style={{ width: '20vw', padding: '1rem', borderRadius: '20px', marginBottom: '10px'}}>
              <img style={{width: "100%", height: "80%", borderRadius: "10px", objectFit: "cover"}} src= {image.download_url} alt="" />
              <p>{image.author}</p>
            </div>
            )
        })
      }

      useEffect(() => {
        getimages()
      }, [page])

  return (
    <div>
      <hr />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: 'auto'}}>
        {renderimages}
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "2vw", padding: "2vw", cursor: "pointer"}}>
      <span onClick={() => setpage(page-1)} style={{backgroundColor: "blue", padding: "1vw", color: "white", borderRadius: "10px"}}>Prev</span>
      <span onClick={() => setpage(page+1)}  style={{backgroundColor: "blue", padding: "1vw", color: "white", borderRadius: "10px"}}>Next</span>
      </div>
    </div>
  )
}

export default Home