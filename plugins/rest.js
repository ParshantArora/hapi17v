import api  from '../api';
export default {
    name : 'Rest',
    version : '1.0.0',
    register : (server,optins) => {
        server.route(api);
    }
};