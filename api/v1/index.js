/*
Author : Parshant Nagpal
Description :export the array of routes
filename  : index.js
*/

import user from './user';
import accounts from './accounts';
import items from './items';
export default [...user,...accounts,...items];