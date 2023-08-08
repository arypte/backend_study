function log( message ) {
    console.log( message )
}

export default log ;

export function info( message ) {
   log( `info : ${message} `)
}