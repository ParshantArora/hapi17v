import Rest from './rest'
import Auth from './auth'
export default [

 /*
  Jwt authentication
 */
 {
   plugin : Auth,
   options : {}
 },
 /*
 Rest Api's
 */
{
    plugin : Rest,
    options  : {}
}

    
]