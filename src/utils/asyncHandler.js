// this file is for the async use of request

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        console.log("async is running")
            .catch(
                (error) => (next(error))
            )
    }
}



export { asyncHandler }

//const asyncHandler = () => {}
//const asyncHandler= (fun)=>()=>{}
//const asyncHandler= (fun)=> async ()=>{}

// const asyncHandler = (fun)=> async ( req,res,next) =>{
//     try{
//         await fun(req,res,next)
//     } catch(error){
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }