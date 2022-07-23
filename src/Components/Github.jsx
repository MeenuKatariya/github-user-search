import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { getfetchData,getLoading,getError,getSuccess } from '../Redux/Action';
   
    const Github = () => {
    const [user,setUser]=React.useState("");
    const dispatch=useDispatch();
  
    const {loading,success,error,data}=useSelector(store=>store.user)
    const fetchData=async()=>{
      dispatch(getLoading())
    
         try{
        let res=await fetch (`https://api.github.com/search/users?q=${user}`)
        let data=await res.json()
        // console.log(data)
        dispatch(getfetchData(data.items))
        
        // dispatch((getSuccess))
       
        // console.log(data.items)
    
  }catch(error)
  {
    dispatch(getError())
    console.log(error)
   
  }
}

    const handleClick=()=>{
      fetchData();
    }
    

// console.log(data)
  return (
    <div>
       <input type="text" placeholder='Enter User' value={user} onChange={(e)=>{setUser(e.target.value)}} />
      <button onClick={()=>handleClick()}>Click</button>
      
      {
        data.map((e)=>{
         return(
          <div>
          {/* console.log(e) */}
         <p>User: {e.login}</p>
         <p>score:{e.score}</p>
         <p>url: {e.url}</p>
       </div>
         )
       
        })

        
      }


    </div>
  )
    }

export default Github
