import {authorization} from '../utilities/auth';
export default {
    name: 'Auth',
    version : '1.0.0',
    register : (server,options) => {
    const scheme = () => ({
       authenticate : authorization
    });
    server.auth.scheme('jwt', scheme);
    server.auth.strategy('jwt','jwt')
    }
}