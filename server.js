/*
Author : Parshant Nagpal
Description : Project all pluin register and start the server
filename  : account.js
*/
import Hapi from 'hapi';
import plugins from './plugins';


export default async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 4000,
        routes: {
            validate: {
              failAction: async (request, h, err) => {
                if (process.env.NODE_ENV === 'production') {
                  // In prod, log a limited error message and throw the default Bad Request error.
                  console.error('ValidationError:', err.message);
                  throw Boom.badRequest(`Invalid request payload input`);
                } else {
                  // During development, log and respond with the full error.
                  console.error(err);
                  throw err;
                }
              }
            }
          }
    });

    /*
    All Plugin registers
    */
    await server.register(plugins);

    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('server running at', server.info.uri)
};

