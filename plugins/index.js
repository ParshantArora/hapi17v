/*
Author : Parshant Nagpal
Description : export all plugins
filename  : index.js
*/


import Inert from 'inert';
import Vision from 'vision';
import Rest from './rest'
import Auth from './auth'
import Swagger from 'hapi-swaggered';
import SwaggerUI from 'hapi-swaggered-ui';
import Pack from '../package.json';
export default [
   /* -----------------------
        Register inert
      ------------------------ */
      {
        plugin: Inert,
        options: {}
      },
    
      /* -----------------------
            Register vision
          ------------------------ */
      {
        plugin: Vision,
        options: {}
      },
    /* -----------------------
        Register Swagger
      ------------------------ */

      {
        plugin: Swagger,
        options: {
          info: {
            title: Pack.name,
            description: Pack.description,
            version: Pack.version,
            contact: {
              name: Pack.author,
              url: Pack.url,
              email: `${Pack.author} <${Pack.email}>`
            },
            license: {
              name: Pack.license,
              url: Pack.homepage
            }
          },
          tagging: {
            mode: 'tags',
            stripRequiredTags: true
          },
          tags: {
            //  api: Pack.description,
            user: 'user rest endpoints',
            util: 'util endpoints'
          }
        }
      },
        /* -----------------------
        Register SwaggerUI
      ------------------------ */

  {
    plugin: SwaggerUI,
    options: {
      title: Pack.name,
      path: '/api/docs',
      authorization: {
        field: 'authorization',
        scope: 'header' // header works as well
        // valuePrefix: 'bearer '// prefix incase
        // defaultValue: 'token',
        // placeholder: 'Enter your authorization token here'
      },
      swaggerOptions: {
        // docExpansion: 'list'
      }
    }
  }, 

  /*
   Jwt authentication
  */
  {
    plugin: Auth,
    options: {}
  },
  /*
  Rest Api's
  */
  {
    plugin: Rest,
    options: {}
  }
]