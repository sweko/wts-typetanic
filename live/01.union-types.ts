type ResponseStatus = 'success' | 'error';

interface Response<T> {
    status: ResponseStatus;
    message: string;
    error?: string;
    payload: T;
}

declare function filterResponses<T>(responses: Response<T>[], status: ResponseStatus): Response<T>[];

filterResponses([], 'success');

// @ts-expect-error
filterResponses([], 'ok'); // Compile error, as that is not a valid status


// const successfulResponse: Response<number> = {
//     status: 'success',
//     message: 'All good',
//     payload: 42,
// };

// const errorResponse: ErrorResponse = {
//     status: 'error',
//     message: 'Something went wrong',
//     error: 'Not found'
// };

//console.log(successfulResponse, errorResponse);


enum DirectionsEnum {
    left = 'left',
    right = 'right',
    top = 'top',
    bottom = 'bottom'
};

declare function move(direction: DirectionsEnum): void;
move(DirectionsEnum.left);

// @ts-expect-error
move('up'); // Compile error, as 'up' is not a valid direction




export {};