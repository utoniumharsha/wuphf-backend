const secrets = require('./secrets') 

/**
 * 
 */

 module.exports = {
    SMS_SREVICE: 'https://' + secrets.SMS_API_KEY + ':' + secrets.SMS_API_TOKEN + '@' + secrets.SMS_API_SUBDOMAIN + '/v1/Accounts/' + secrets.SMS_API_ACCOUNT_SID + '/Sms/send',
    TWITTER_SERVICE: ''
 }