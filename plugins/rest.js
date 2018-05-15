/*
Author : Parshant Nagpal
Description : import all api and register them and  export in rest plugin
filename  : account.js
*/

import api from '../api';
export default {
    name: 'Rest',
    version: '1.0.0',
    register: (server, optins) => {
        server.route(api);
    }
};