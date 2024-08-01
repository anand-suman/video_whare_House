// this will handal the api error of the request nodejs error pe discription hai
// to jao ushar jake dekho
// import { uploadOnCloudinary } from "./cloudinary";
class ApiResponse {
    constructor(
        statusCode,
        date,
        message = "Success"
    ) {
        this.statusCode = statusCode;
        this.date = date;
        this.message = message;
        this.success = statusCode < 400
    }
}

export {ApiResponse}