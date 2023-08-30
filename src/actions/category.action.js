export const getAllCategory=()=>{
    return async dispatch=>{
        const res=await res.get('/category/getcategory');
        console.log(res);
    }
}