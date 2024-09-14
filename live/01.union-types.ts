type ResponseStatus = 'success' | 'error';

type BaseResponse = {
    status: ResponseStatus;
    message: string;
};

type SuccessResponse<T> = {
    status: 'success';
    payload: T;
} & BaseResponse;

type ErrorResponse = {
    status: 'error';
    error: string;
} & BaseResponse;

type Response<T> = SuccessResponse<T> | ErrorResponse;

declare function filterResponses<T>(responses: Response<T>[], status: ResponseStatus): Response<T>[];

filterResponses([], 'success');

// @ts-expect-error
filterResponses([], 'ok'); // Compile error, as that is not a valid status


const successfulResponse: Response<number> = {
    status: 'success',
    message: 'All good',
    payload: 42,
};


const errorResponse: ErrorResponse = {
    status: 'error',
    message: 'Something went wrong',
    error: 'Not found'
};

//console.log(successfulResponse, errorResponse);


enum DirectionsEnum {
    left = 'left',
    right = 'right',
    top = 'top',
    bottom = 'bottom'
};

type Direction = keyof typeof DirectionsEnum;

declare function move(direction: Direction): void;
move('left');

// @ts-expect-error
move('up'); // Compile error, as 'up' is not a valid direction




export {};