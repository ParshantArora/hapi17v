/*
Author : Parshant Nagpal
Description :export the logout route
filename  : login.js
*/
import { logoutUser } from '../../../controllers/user';

export default {
  method: 'Post',
  path: '/user/logout',
  config: {
    auth: 'jwt',
    description: 'Api service used for logging the user out of the application.',
    notes:
      'The request object should contain following fields in its <b>Headers</b> object<br/>&bull; <b>x-logintoken</b>: The token assigned to the user after successful login',
    tags: ['api', 'user'],
  },
  handler: logoutUser
}