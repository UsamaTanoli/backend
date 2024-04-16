// const asyncHandler = (requestHandler) => (req, res, next) => {
//     return Promise.resolve(requestHandler(req, res, next))
//         .catch((err) => next(err))

// }

function asyncHandler(requestHandler) {
    return function(req, res, next) {
        Promise.resolve(requestHandler(req, res, next))
            .catch(function(err) {
                next(err);
            });
    };
}

export {asyncHandler}