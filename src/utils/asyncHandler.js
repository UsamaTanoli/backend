const asyncHandler = (requestHandler) => {
    return (req, res, next) => { // Need to add return here
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    };
};

export {asyncHandler}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             sucess: false,
//             message: err.message
//         })
//     }
// }


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (err) {
//         console.error('Error in asyncHandler:', err);
//         const statusCode = err.code || 500;
//         const errorMessage = err.message || 'Internal Server Error';
//         const stackTrace = err.stack || (new Error()).stack; // Get stack trace if available
//         res.status(statusCode).json({
//             success: false,
//             error: {
//                 message: errorMessage,
//                 stack: stackTrace
//             }
//         });
//     }
// };
