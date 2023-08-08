import * as loggerModule from './logger.js'
console.log( loggerModule )

import { log } from "./logger.js"

log( 'Hello World')
loggerModule.log( 'Hello World' )

import { Logger } from './logger.js'
const logger = new Logger( 'DEFAULT' )
logger.log( 'Hello world' )