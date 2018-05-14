import Boom from 'boom'

export const successAction = (data,message = 'OK') => ({
    statusCode : 200,
    message,
    data  : data ? data : null
 });

 export const failAction = (errorMessage) =>
 {
     throw Boom.badRequest(errorMessage)
 }

 