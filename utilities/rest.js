/*
Author : Parshant Nagpal
Description :  common success and fail actions 
filename  : account.js
*/

import Boom from 'boom'

export const successAction = (data, message = 'OK') => ({
    statusCode: 200,
    message,
    data: data ? data : null
});

export const failAction = (errorMessage) => {
    throw Boom.badRequest(errorMessage)
}

