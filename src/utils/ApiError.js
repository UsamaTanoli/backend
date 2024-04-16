class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.errors = errors;
        this.data = null;
        this.statusCode = statusCode;
        this.message = message
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructo)
        }
    }

}

try {
    // Some operation that fails
    throw new ApiError(404, "Not found", [{ field: "username", message: "Username is required" }]);
} catch (error) {
    console.log(error.statusCode); // Output: 404
    console.log(error.message); // Output: "Not found"
    console.log(error.errors); // Output: [{ field: "username", message: "Username is required" }]
    console.log(error.stack); // Output: Stack trace
}

export {ApiError}