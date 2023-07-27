exports.info = (message) => {
    console.log( `info : ${message}` )
}

module.exports = (message) =>{
    console.log( `info : ${message}` )
}

exports.verbose = (message) => {
    console.log( `verbose : ${message}` )
}

module.exports.verbose = (message) => {
    console.log( `verbose : ${message}` )
}


const a = (message) => {

    console.log( `a : ${message}`)

}

module.exports = a ;

/*
module.exports = {
    a,
    info: exports.info,
    verbose: exports.verbose
};
*/