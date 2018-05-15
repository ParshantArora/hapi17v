/*
Author : Parshant Nagpal
Description :export the logout route
filename  : login.js
*/
import {logoutUser} from '../../../controllers/user';

export default {
    method : 'Post',
    path : '/user/logout',
    config : {
      auth : 'jwt'
    },
    handler  : logoutUser
}