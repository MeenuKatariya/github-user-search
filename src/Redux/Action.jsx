import { Get_user_data, Loading, Success,Error } from "./ActionType";


 export const getfetchData=(payload)=>{
    return{
        type: Get_user_data,
        payload
    }
}

export const getLoading=()=>({
    type:Loading
})

export const getSuccess=()=>({
    type:Success,
    

})

export const getError=()=>({
    type:Error
})

// export {getfetchData,getError,getLoading,getSuccess}