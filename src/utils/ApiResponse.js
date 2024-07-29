// this will handal the api error of the request nodejs error pe discription hai
// to jao ushar jake dekho

class ApiResponse {
    constructor(
        staatusCode,
        date,
        message = "Success"
    ) {
        this.statusCode = staatusCode;
        this.date = date;
        this.message = message;
        this.success = statusCode < 400
    }
}