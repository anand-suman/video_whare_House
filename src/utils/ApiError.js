// this will handal the api error of the request nodejs error pe discription hai
// to jao ushar jake dekho

class ApiError extends Error {
    constructor(
        message = "Something went wrong",
        statusCode,
        errors = [],
        stack = "",
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.messag = message;
        this.errors = errors;
        // this.stack = stack;
        this.success = false;

        if (stack) {
            this.stack = stack;

        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError }