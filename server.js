/*
Author : Parshant Nagpal
Description : Project all pluin register and start the server
filename  : account.js
*/
import Hapi from 'hapi';
import plugins from './plugins'; 


export default async () => {
    const server= Hapi.server({
        host : 'localhost',
        port : 4000  
    });
   
        /*
        All Plugin registers
        */
        await server.register(plugins);
 
        try{
            await server.start();
        }catch(err){
            console.log(err);
            process.exit(1);
        }
        console.log('server running at', server.info.uri)
    };

