import {  Get_user_data, Loading, Success,Error } from "./ActionType";
 
const initialState={
      user:{
        data:[],
    loading:false,
    
    error:false
      }
}

 export const reducer=(store=initialState,action)=>{
    switch(action.type)
    {
        case  Get_user_data:{
            return{
                ...store,
                user:{
                  ...store.user,
                  loading:false,
                  error:false,
                  data:action.payload
                }
               
            }
        }
          case Loading:{
            return{
              ...store,
              user:{
                ...store.user,
                loading:true,
                error:false,
                
              }
             
          } 
        }

          case Success:{
            return{
              ...store,
              user:{
                ...store.user,
                loading:false,
                success:true,
                error:false,
                
              }
              
          } 
        }
         
          case Error:{
            return{
              ...store,
              user:{
                ...store.user,
                loading:false,
                error:true,
                
              }
              
            }
          } 
        
        default:{
            return {...store};
        }
    }
}
// export {reducer}