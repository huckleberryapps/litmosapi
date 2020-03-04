/*jshint -W069 */
/**
 * 
 * @class LitmosapisKyma
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var LitmosapisKyma = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function LitmosapisKyma(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://api.litmos.com/v1.svc/bulkimports';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name LitmosapisKyma#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    LitmosapisKyma.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * Creates a new user profile in your organisation. By default, no emails will be sent when the user is created. To have an email sent to the user when they are created, the following query string parameter needs to be added to the request: &sendmessage=true. 

Note: By default all new users that you create will be prompted to change their password the first time they login. If you are using the single sign-on approach then this may not be desirable. To stop this from happening you need to set the SkipFirstLogin field to true. By default it is assumed that a username will be a valid email address. If you want to use a non-email address as username you must also set the IsCustomUsername property to true.

Note: You will need to use the same order listed below to update the information. Do not change the order of items or the PUT or POST request will not update/create the users. You can either use the short body or the full body for the request.

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#CreateNewUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
 */
 LitmosapisKyma.prototype.CreateNewUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of people in your organisation including active and inactive people. By default only the first 100 people are returned. The list can be filtered on first or last name and paged using the optional paging parameters.

To page through users add "&limit=####" to the end of the request.  For example:  

GET https://api.litmos.com/v1.svc/users?source=MY-APP&limit=1000

 To retrieve only active users, add the parameter "&showInactive=false" to the end of the request.

GET https://api.litmos.com/v1.svc/users?source=MY-APP&showInactive=false

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetUsers
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.format - 
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetUsers = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 

                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns user data with a matching username in the string. AccessLevel: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetaUserbyUsername
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.username - 
 */
 LitmosapisKyma.prototype.GetaUserbyUsername = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{username}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{username}', parameters['username']);
        
        


        if(parameters['username'] === undefined){
            deferred.reject(new Error('Missing required  parameter: username'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update a single user profile in your organisation.  The user Id in the uri must match the Id specified in the request body. AccessLevel: Account Owners Only
 * @method
 * @name LitmosapisKyma#UpdateaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.UpdateaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a single user profile for the given user Id. AccessLevel: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetUserbyUserId
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.GetUserbyUserId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a single user profile in your organisation.  The user will be deleted completely from the system.

Note: Please be careful with the use of this function as once the user is deleted from the system there is no way to recover the user.

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#DeleteaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.DeleteaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a detailed list of people in your organisation including active and inactive people. By default only the first 100 people are returned. The list can be filtered on first or last name, paged using the optional paging parameters, and created date.

To return users with a Created Date after a specific date add "&since=YYYY-MM-DD" to the end of the request.  For example:  

GET https://api.litmos.com/v1.svc/users/details?source=MY-APP&since=2015-12-09

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetUsersDetails
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetUsersDetails = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/details';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Post a list of Advanced User Custom Fields set up in Account Settings> Litmos Features > Custom Fields > User Custom Fields in your organisation per user.

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#PostAdvancedCustomFieldsforaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.fromat - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.PostAdvancedCustomFieldsforaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/usercustomfields';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['fromat'] !== undefined){
                    queryParameters['fromat'] = parameters['fromat'];
                }
        
        
        


        if(parameters['fromat'] === undefined){
            deferred.reject(new Error('Missing required  parameter: fromat'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of Advanced User Custom Fields set up in Account Settings > Litmos Features > Custom Fields > User Custom Fields in your organisation per user.

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetaUsersAdvancedCustomFields
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.GetaUsersAdvancedCustomFields = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/usercustomfields';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * We recommend the "/bulkimports?" endpoint for situations where you need to create or update multiple users via the API. 

Access Level: Account Owners, Administrators, Team Admin and Team Leaders

This endpoint only works for creating/updating users at this time, both use the POST request using XML or JSON formats. The bulk import runs the same process as the bulk import functionality available within the UI. 

Please Note: The <Team> and <Course> fields require the use of the TeamCodeForBulkImport and CourseCodeForBulkImport respectively. These codes can be located in the UI on the Team and Course settings page, otherwise they are available via the API GET /Teams? and GET /Courses? endpoints. 

Company Name cannot be longer than 100 characters.

Querystring parameters:

&sendmessage=[true/false] set true if you want to send login emails

&skipfirstlogin=[true/false] set to true if you want to skipfirstlogin

&format=json for json format
 * @method
 * @name LitmosapisKyma#CreateanewUserBulkImport
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {boolean} parameters.sendmessage - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
 */
 LitmosapisKyma.prototype.CreateanewUserBulkImport = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/bulkimports';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 

                if(parameters['sendmessage'] !== undefined){
                    queryParameters['sendmessage'] = parameters['sendmessage'];
                }
        
        
        


        if(parameters['sendmessage'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sendmessage'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Retrieves a list of the User Bulk Import files processed for an organization (latest 1000).

Access Level: Account Owners and Administrators
 * @method
 * @name LitmosapisKyma#GetaListofRecentBulkImports
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetaListofRecentBulkImports = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/bulkimports';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Retrieves a specific User Bulk Import.

Access Level: Account Owners and Administrators
 * @method
 * @name LitmosapisKyma#GetaSpecificBulkImport
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
 */
 LitmosapisKyma.prototype.GetaSpecificBulkImport = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/[Id]';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['Format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Marks people in your organisation complete for a module in your account.  Only one call can be made at a time.  

A common use of this API call is to mark a module complete when a user completes a function outside of Litmos.   This call can be used along with and Embeded module and choosing to uncheck the "Complete the module when opened/ viewed". 

Access Level: Account Owners Only

Important Note: Attempt values can only be upserted for embed and link module types. Attempt values for other module types are created generically by the system.
 * @method
 * @name LitmosapisKyma#MarkaModuleComplete
 * @param {object} parameters - method options and parameters
 */
 LitmosapisKyma.prototype.MarkaModuleComplete = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get a list of all courses within your organisation.

Note:

OriginalId can be used as part of a single sign in process to take a user straight into a particular course.

ForSale indicates if the course has been marked for sale via the Litmos UI

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetCourses
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {integer} parameters.limit - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetCourses = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 

                if(parameters['limit'] !== undefined){
                    queryParameters['limit'] = parameters['limit'];
                }
        
        
        


        if(parameters['limit'] === undefined){
            deferred.reject(new Error('Missing required  parameter: limit'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get a single course's details within your organisation.
 * @method
 * @name LitmosapisKyma#GetaCourse
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.GetaCourse = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Assign a list of courses to a User. 

If any courses already exist in the team or if the course ids are invalid they will be ignored. Emails will be sent notifying the user of the course assignment providing they have previously logged into their account. It is possible to disable sending course invitation emails by adding the following querystring parameter to the end of the uri : &sendmessage=false.

Access level: Administrators Only
 * @method
 * @name LitmosapisKyma#AssignCoursestoaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {boolean} parameters.sendmessage - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.AssignCoursestoaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['sendmessage'] !== undefined){
                    queryParameters['sendmessage'] = parameters['sendmessage'];
                }
        
        
        


        if(parameters['sendmessage'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sendmessage'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get a list of courses currently assigned to a User and the current status of each course.

The results fields explained

Complete Indicates if the user has completed this course.
PercentageComplete The number of modules the user has completed expressed as percentage.
AssignedDate The date the user was assigned the course.
StartDate The date the user started the course.
DateCompleted Indicates the date the user completed this course.
UpToDate Indicates if the course has changed since the user completed it.


Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#ListCoursesAssignedtoaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.ListCoursesAssignedtoaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get a list of all users assigned to a course.

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#ListAllUsersAssignedtoaCourse
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.ListAllUsersAssignedtoaCourse = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get a list of all modules under a course.

Access Level: Account Owners only
 * @method
 * @name LitmosapisKyma#ListModulesforaCourse
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.ListModulesforaCourse = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get course results and module results for a User.

Access level: Administrators only
 * @method
 * @name LitmosapisKyma#ListCourseandModuleResultsforaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.ListCourseandModuleResultsforaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/courses/{course_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Unassign courses from a user, one request per course.

Access Level: Trainers Only
 * @method
 * @name LitmosapisKyma#UnassignCoursesfromaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.UnassignCoursesfromaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/courses/{course_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get a list of all results for all Users and the current status of each course since a specific date.  In this call, the ‘since’ parameter is required and will fail if it is not present. It will also allow a ‘limit’ parameter of up to 1000 records to keep the record set controlled. The call will fail if the limit parameter is greater than 1000. Use the paging parameters built into the API if there are more than 1000 records returned. 

To return course results that have changed since a specific date, use the "&since=YYYY-MM-DD" parameter on the end of the request.  For example:  

GET https://api.litmos.com/v1.svc/results/details?source=MY-APP&since=2015-12-09

Access level:  Administrators only
 * @method
 * @name LitmosapisKyma#ListAllCourseResultsforAllUsersSinceaSpecificDate
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.ListAllCourseResultsforAllUsersSinceaSpecificDate = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/results/details';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Reset the course results for a specific user

Access Level: Administrators Only
 * @method
 * @name LitmosapisKyma#ResetCourseResults
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.ResetCourseResults = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/courses/{course_id}/reset';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Lists all Course Custom Field Labels.

Access Level: Administrators Only
 * @method
 * @name LitmosapisKyma#GetCourseCustomFields
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetCourseCustomFields = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/coursecustomfields';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Retrieve the custom field values for a specific Course. 

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetCourseCustomFieldValuesforaSpecificCourse
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.GetCourseCustomFieldValuesforaSpecificCourse = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/coursecustomfields';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of learning paths

Access Level: Account Owners and Administrators
 * @method
 * @name LitmosapisKyma#GetAllLearningPaths
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
 */
 LitmosapisKyma.prototype.GetAllLearningPaths = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/learningpaths';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Assigns a list of Users to a Learning Path.

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#AssignUserstoaLearningPath
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {boolean} parameters.includesubteams - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.AssignUserstoaLearningPath = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/learningpaths';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['includesubteams'] !== undefined){
                    queryParameters['includesubteams'] = parameters['includesubteams'];
                }
        
        
        


        if(parameters['includesubteams'] === undefined){
            deferred.reject(new Error('Missing required  parameter: includesubteams'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a List of Learning Paths Assigned to a User.

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#GetaListofLearningPathsAssignedtoaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.GetaListofLearningPathsAssignedtoaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/learningpaths';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a Single Learning Path

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#GetaSpecificLearningPath
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.lpId - 
 */
 LitmosapisKyma.prototype.GetaSpecificLearningPath = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/learningpaths/{lp_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{lp_id}', parameters['lpId']);
        
        


        if(parameters['lpId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: lpId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of Courses that have been added to a Learning Path.

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#GetaListofCoursesinaLearningPath
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.lpId - 
 */
 LitmosapisKyma.prototype.GetaListofCoursesinaLearningPath = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/learningpaths/{lp_id}/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{lp_id}', parameters['lpId']);
        
        


        if(parameters['lpId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: lpId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a List of Users Assigned to a Learning Path

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#GetaListofUsersAssignedtoaLearningPath
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.lpId - 
 */
 LitmosapisKyma.prototype.GetaListofUsersAssignedtoaLearningPath = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/learningpaths/{lp_id}/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{lp_id}', parameters['lpId']);
        
        


        if(parameters['lpId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: lpId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Assign a set of Learning Paths to a Team.

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#AssignLearningPathstoaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {boolean} parameters.sendmessage - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.lpTeamId - 
 */
 LitmosapisKyma.prototype.AssignLearningPathstoaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{LP_team_id}/learningpaths';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 

                if(parameters['sendmessage'] !== undefined){
                    queryParameters['sendmessage'] = parameters['sendmessage'];
                }
        
        
        


        if(parameters['sendmessage'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sendmessage'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{LP_team_id}', parameters['lpTeamId']);
        
        


        if(parameters['lpTeamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: lpTeamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of Learning Paths Assigned to a Team.

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#GetLearningPathsAssignedtoaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.GetLearningPathsAssignedtoaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/learningpaths';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Deletes a set of specific user assignments from a Learning Path.

Access Level: Account Owners & Administrators
 * @method
 * @name LitmosapisKyma#UnAssignUsersfromaLearningPath
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.userId - 
     * @param {string} parameters.lpId - 
 */
 LitmosapisKyma.prototype.UnAssignUsersfromaLearningPath = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/learningpaths/{lp_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{lp_id}', parameters['lpId']);
        
        


        if(parameters['lpId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: lpId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Add a list of courses to a Team. If the courses already exist in the team or if the course ids are invalid they will be ignored. 

Emails will be sent notifying the users of the course assignment providing they have previously logged into their account. It is possible to disable sending course invitation emails by adding the following querystring parameter to the end of the uri : &sendmessage=false.

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#AssignaListofCoursestoaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {boolean} parameters.sendmessage - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.AssignaListofCoursestoaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['sendmessage'] !== undefined){
                    queryParameters['sendmessage'] = parameters['sendmessage'];
                }
        
        
        


        if(parameters['sendmessage'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sendmessage'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a list of courses to a Team. If the courses do not exist in the team or if the course ids are invalid they will be ignored.

Access Level: Trainers Only
 * @method
 * @name LitmosapisKyma#UnAssignaListofCoursesfromaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.UnAssignaListofCoursesfromaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only
 * @method
 * @name LitmosapisKyma#PromoteaUsertoTeamLeaderforaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.teamId - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.PromoteaUsertoTeamLeaderforaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/leaders/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only
 * @method
 * @name LitmosapisKyma#DemoteaTeamLeaderonaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.teamId - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.DemoteaTeamLeaderonaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/leaders/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of users assigned to a Team and marked as Team Leader

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetTeamLeadersforaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.GetTeamLeadersforaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/leaders';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only
 * @method
 * @name LitmosapisKyma#PromoteaUsertoTeamAdminforaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.teamId - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.PromoteaUsertoTeamAdminforaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/admins/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only
 * @method
 * @name LitmosapisKyma#DemoteaTeamAdministratoronaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.teamId - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.DemoteaTeamAdministratoronaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/admins/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of users assigned to a Team and marked as Team Admin

Access Level: Administrators Only
 * @method
 * @name LitmosapisKyma#GetTeamAdministratorsforaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.GetTeamAdministratorsforaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/admins';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of active users assigned to a Team.

Access Level: Account Owners and Administrators Only
 * @method
 * @name LitmosapisKyma#GetUsersinaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {integer} parameters.limit - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.GetUsersinaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 

                if(parameters['limit'] !== undefined){
                    queryParameters['limit'] = parameters['limit'];
                }
        
        
        


        if(parameters['limit'] === undefined){
            deferred.reject(new Error('Missing required  parameter: limit'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Add a list of users to a Team. If the users already exist in the team or if the user ids are invalid they will be ignored.

By default, no emails will be sent when the user is added to a team. To have an email sent to the user when they are added to a team, the following query string parameter needs to be added to the request: &sendmessage=true

Access Level: Account Owners and Administrators Only
 * @method
 * @name LitmosapisKyma#AssignUserstoaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.AssignUserstoaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Users can only be removed from a Team one per request.

Access Level: Account Owners and Administrators Only
 * @method
 * @name LitmosapisKyma#UnAssignUsersfromaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.teamId - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.UnAssignUsersfromaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/users/{user_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Removes a user from all Teams the user is assigned to.

Access Level: Account Owners and Administrators Only
 * @method
 * @name LitmosapisKyma#UnAssignaUserfromAllTeams
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.UnAssignaUserfromAllTeams = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/teams';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of all teams the User belongs to.

Access Level: Account Owners and Administrators Only
 * @method
 * @name LitmosapisKyma#GetalistofAllTeamsaUserisAssignedto
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.GetalistofAllTeamsaUserisAssignedto = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/teams';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of teams in your organisation. By default only the first 100 teams are returned. The list can be filtered team name and paged using the optional paging parameters.

Access Level: Account Owners Only
 * @method
 * @name LitmosapisKyma#GetaListofAllTeams
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {integer} parameters.limit - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetaListofAllTeams = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 

                if(parameters['limit'] !== undefined){
                    queryParameters['limit'] = parameters['limit'];
                }
        
        
        


        if(parameters['limit'] === undefined){
            deferred.reject(new Error('Missing required  parameter: limit'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Creates a new team or sub-team in your organisation.

AccessLevel: Trainers Only
 * @method
 * @name LitmosapisKyma#CreateaTeamorSubTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
 */
 LitmosapisKyma.prototype.CreateaTeamorSubTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a single team for the given team Id.

AccessLevel: Trainers Only
 * @method
 * @name LitmosapisKyma#GetaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.GetaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update a single team profile in your organisation.  The team Id in the Uri must match the Id specified in the request body.

Access Level: Account Owners and Administrators Only
 * @method
 * @name LitmosapisKyma#UpdateaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.secondTeamId - 
 */
 LitmosapisKyma.prototype.UpdateaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{second_team_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{second_team_id}', parameters['secondTeamId']);
        
        


        if(parameters['secondTeamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: secondTeamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * GETTeam/Team_Id
 * @method
 * @name LitmosapisKyma#GETTeamTeam_Id
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.secondTeamId - 
 */
 LitmosapisKyma.prototype.GETTeamTeam_Id = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{second_team_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{second_team_id}', parameters['secondTeamId']);
        
        


        if(parameters['secondTeamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: secondTeamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a single team profile in your organisation.  The team Id in the Uri must match the Id specified in the request body.

Access Level: Account Owners and Administrators Only
 * @method
 * @name LitmosapisKyma#DeleteaTeamorSubteam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.secondTeamId - 
 */
 LitmosapisKyma.prototype.DeleteaTeamorSubteam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{second_team_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{second_team_id}', parameters['secondTeamId']);
        
        


        if(parameters['secondTeamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: secondTeamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Creates a new session in an ILT module.  Supports Class Room, Webinar, Webex Training, GoToTraining and Zoom Meetings.

AccessLevel: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#CreateaNewILTsessionforaModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
 */
 LitmosapisKyma.prototype.CreateaNewILTsessionforaModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a session list given a module Id.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#GetaListofSessionsinanILTModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
 */
 LitmosapisKyma.prototype.GetaListofSessionsinanILTModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of future dated sessions for an organisation. 

By default the first 100 sessions are returned. The list can be filtered on session name and sorted by session’s start date. It can also be paged using the optional paging parameters.

AccessLevel: Account Owners/Administrators Only
 * @method
 * @name LitmosapisKyma#GetaListofFutureSessionsforanILTModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetaListofFutureSessionsforanILTModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/sessions/future';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of ILT Modules given a course Id.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#GetaListofallILTModulesinaCourse
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.GetaListofallILTModulesinaCourse = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/ilt';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a single session in an ILT module for a given session Id and module Id.

AccessLevel: Super Admins/Account Owners/Administrators Only
 * @method
 * @name LitmosapisKyma#GetaSpecificSessioninanILTModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionId - 
 */
 LitmosapisKyma.prototype.GetaSpecificSessioninanILTModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions/{session_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_id}', parameters['sessionId']);
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update a single session in an ILT module. The session Id in the Uri must match the Id specified in the request body. The session Id in the Uri and the session Id in the request body must match.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#UpdateaSessioninanILTModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionId - 
 */
 LitmosapisKyma.prototype.UpdateaSessioninanILTModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions/{session_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_id}', parameters['sessionId']);
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a given session.

Access Level: Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#DeleteaSessioninanILTModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionId - 
 */
 LitmosapisKyma.prototype.DeleteaSessioninanILTModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions/{session_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_id}', parameters['sessionId']);
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri
 * @method
 * @name LitmosapisKyma#GetaListofAllInstructors
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetaListofAllInstructors = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/instructors';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of users registered to a session for a given session Id.

Access Level: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri
 * @method
 * @name LitmosapisKyma#GetSessionRollCallforaSession
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionId - 
 */
 LitmosapisKyma.prototype.GetSessionRollCallforaSession = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions/{session_id}/rollcall';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_id}', parameters['sessionId']);
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Updates a list of users registered to a session for a given session Id.

Access Level: Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri
 * @method
 * @name LitmosapisKyma#MarkanILTSessionCompleteandaddScore
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionId - 
 */
 LitmosapisKyma.prototype.MarkanILTSessionCompleteandaddScore = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions/{session_id}/rollcall';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_id}', parameters['sessionId']);
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of users assigned to an ILT Module a given module Id.

Access Level: Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri
 * @method
 * @name LitmosapisKyma#GetalistofUsersRegisteredtoaSession
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
 */
 LitmosapisKyma.prototype.GetalistofUsersRegisteredtoaSession = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/registration';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of users registered to a session for a given session Id.

Access Level: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#GetuserAttendanceforaSession
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionId - 
 */
 LitmosapisKyma.prototype.GetuserAttendanceforaSession = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions/{session_id}/attendance';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_id}', parameters['sessionId']);
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Mark attendance of session day.

Access Level: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#MarkAttendanceforUsersRegisteredtoaSession
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionDayId - 
     * @param {string} parameters.userId - 
     * @param {string} parameters.attended - 
 */
 LitmosapisKyma.prototype.MarkAttendanceforUsersRegisteredtoaSession = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessiondays/{session_day_id}/users/{user_id}/attended/{attended}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_day_id}', parameters['sessionDayId']);
        
        


        if(parameters['sessionDayId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionDayId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{attended}', parameters['attended']);
        
        


        if(parameters['attended'] === undefined){
            deferred.reject(new Error('Missing required  parameter: attended'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * AccessLevel: Account Owners/Administrators Only

Request Uri
 * @method
 * @name LitmosapisKyma#GetaListofSessionsforaSpecificInstructor
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.instructorId - 
 */
 LitmosapisKyma.prototype.GetaListofSessionsforaSpecificInstructor = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/instructors/{instructor_id}/sessions';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{instructor_id}', parameters['instructorId']);
        
        


        if(parameters['instructorId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: instructorId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Register a user to a session given the user’s Id.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only
 * @method
 * @name LitmosapisKyma#RegisteraUsertoaSession
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.moduleId - 
     * @param {string} parameters.sessionId - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.RegisteraUsertoaSession = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/modules/{module_id}/sessions/{session_id}/users/{user_id}/register';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{module_id}', parameters['moduleId']);
        
        


        if(parameters['moduleId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: moduleId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{session_id}', parameters['sessionId']);
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create an ILT Module given a Course Id.

AccessLevel: Account Owners/Administrators/Team Admin/Team Leaders Only
 * @method
 * @name LitmosapisKyma#CreateanILTModuleinaCourse
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.courseId - 
 */
 LitmosapisKyma.prototype.CreateanILTModuleinaCourse = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/events';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update an ILT Module given a Course Id.

AccessLevel: Account Owners/Administrators/Team Admin/Team Leaders Only
 * @method
 * @name LitmosapisKyma#UpdateanILTModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.eventId - 
 */
 LitmosapisKyma.prototype.UpdateanILTModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/events/{event_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{event_id}', parameters['eventId']);
        
        


        if(parameters['eventId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: eventId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a given ILT Module given a module Id and a course Id.

AccessLevel: Account Owners/Administrators/Team Admin/Team Leaders Only

Important Note: This will delete all of the ILT sessoins within the Module.
 * @method
 * @name LitmosapisKyma#DeleteanILTModule
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.courseId - 
     * @param {string} parameters.eventId - 
 */
 LitmosapisKyma.prototype.DeleteanILTModule = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/courses/{course_id}/events/{event_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{course_id}', parameters['courseId']);
        
        


        if(parameters['courseId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: courseId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{event_id}', parameters['eventId']);
        
        


        if(parameters['eventId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: eventId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * When a person completes a course in Litmos, an Achievement record is created and added to the user profile. 

This API request enables you to get a list of achievements in descending order and also provides the ability to filter the achievements by date or user.

For example, If you wanted to keep track of when users in your organization complete courses you could make a daily request to /achievements and pass in the previous days date in the since parameter to get all of the achievements that have happened since that date.


Access Level: Account Owners Only

Optional query filters:

userid – return all of the achievements for a given user
since – return all achievements since a given date YYYY-MM-DD
paging – see https://litmos.zendesk.com/entries/20957812-Overview-Developer-API
 * @method
 * @name LitmosapisKyma#GetAchievements
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetAchievements = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/achievements';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns the number of badges and point for a user.

AccessLevel: Super Admins/Account Owners/Administrators Only
 * @method
 * @name LitmosapisKyma#GetTotalBadgesandPointsForUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.GetTotalBadgesandPointsForUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/gamificationsummary';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of badges, courses/learning paths, date completed, point for a user.

AccessLevel: Super Admins/Account Owners/Administrators Only
 * @method
 * @name LitmosapisKyma#GetBadgesandPointsEarnedByUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.GetBadgesandPointsEarnedByUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/gamificationdetails';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of users, badges, courses/learning paths, date completed, points for a team.

AccessLevel: Super Admins/Account Owners/Administrators Only
 * @method
 * @name LitmosapisKyma#GetBadgesandPointsearnedbyaTeam
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.teamId - 
 */
 LitmosapisKyma.prototype.GetBadgesandPointsearnedbyaTeam = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/teams/{team_id}/gamificationdetails';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{team_id}', parameters['teamId']);
        
        


        if(parameters['teamId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: teamId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Resets the gamification points and badges for a user.

AccessLevel: Super Admins/Account Owners/Administrators Only
 * @method
 * @name LitmosapisKyma#ResetBadgesandPointsForaUser
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
     * @param {string} parameters.userId - 
 */
 LitmosapisKyma.prototype.ResetBadgesandPointsForaUser = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/users/{user_id}/gamificationreset';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
        
            path = path.replace('{user_id}', parameters['userId']);
        
        


        if(parameters['userId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: userId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of people including 'active' and 'inactive' people that have been created or updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetUserDetailsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetUserDetailsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/users/details';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all team learning-paths that were created or modified within a given date range. 

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetTeamLearningPathsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetTeamLearningPathsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/teams/learningpaths';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all user team assignments that were created or modified within a given date range. 

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetTeamUsersST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetTeamUsersST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/teams/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of all user course results that have changed during the specified interval. You can GET 1000 results using the “limit” parameter.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetResultsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetResultsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/results/details';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all teams that were created or modified within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetTeamsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetTeamsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/teams';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all modules under each course within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetCourseModulesST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetCourseModulesST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/courses/modules';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a list of all users that have earned achievements within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetAchievementsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetAchievementsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/achievements';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all team course assignments that were created or modified within a given date range. 

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetTeamCoursesST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetTeamCoursesST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/teams/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all courses that are assigned to a specific learning path within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetLearningPathsCourseST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetLearningPathsCourseST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/learningpaths/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all the courses in your organization that were created or updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetCoursesST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetCoursesST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all learning paths that were created/updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetLearningPathsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetLearningPathsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/learningpaths';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all courses assigned to users within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetUserCoursesST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetUserCoursesST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/users/courses';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all learning-paths assigned to users within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetLearningPathsUsersST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetLearningPathsUsersST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/learningpaths/users';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns all the modules in an organization that was created/ updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetModulesST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetModulesST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/modules';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Module results API will return the list of all user module results that have changed during the specified interval.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetModulesResultsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
     * @param {string} parameters.apikey - 
 */
 LitmosapisKyma.prototype.GetModulesResultsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/modules/results';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['to'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
        
        
                if(parameters['apikey'] !== undefined){
                    headers['apikey'] = parameters['apikey'];
                }
        


        if(parameters['apikey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apikey'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Learning paths results API returns the list of all user learning paths results that have changed during the specified interval.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 
 * @method
 * @name LitmosapisKyma#GetLearningPathResultsST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.source - 
     * @param {string} parameters.since - 
     * @param {string} parameters.to - 
     * @param {string} parameters.format - 
 */
 LitmosapisKyma.prototype.GetLearningPathResultsST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/org/learningpaths/results';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['source'] !== undefined){
                    queryParameters['Source'] = parameters['source'];
                }
        
        
        


        if(parameters['source'] === undefined){
            deferred.reject(new Error('Missing required  parameter: source'));
            return deferred.promise;
        }
 

                if(parameters['since'] !== undefined){
                    queryParameters['Since'] = parameters['since'];
                }
        
        
        


        if(parameters['since'] === undefined){
            deferred.reject(new Error('Missing required  parameter: since'));
            return deferred.promise;
        }
 

                if(parameters['to'] !== undefined){
                    queryParameters['To'] = parameters['to'];
                }
        
        
        


        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 

                if(parameters['format'] !== undefined){
                    queryParameters['Format'] = parameters['format'];
                }
        
        
        


        if(parameters['format'] === undefined){
            deferred.reject(new Error('Missing required  parameter: format'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return LitmosapisKyma;
})();

exports.LitmosapisKyma = LitmosapisKyma;
