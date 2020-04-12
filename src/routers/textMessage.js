const request = require('request')
const config = require('./../config/default-config')
const errCodes = require('./../err-codes')

'use strict'

const logger = require('./../logger')

const sendTextMessage = (from, to, body, callback) => {
    const url = config.SMS_SREVICE
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback(errCodes[1000] + 'textMessage', undefined)
        }
        else if(body.)

    } 
}