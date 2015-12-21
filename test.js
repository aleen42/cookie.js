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
 *      - Document: test.js
 *      - Author: aleen42
 *      - Description: the demo to test to get cookie from chrome. 
 *      - Create Time: Dec 21, 2015
 *      - Update Time: Dec 21, 2015 
 *
 *
 **********************************************************************/
"use strict";

/**
 * require file cookie.js
 */

var cookieJs = require('./cookie.js');

/**
 * [home: the home path]
 * @type {String}
 */
var home = '';

/**
 * [chrome: the path of chrome]
 * @type {String}
 */
var chrome = '';

/**
 * [cookies: the path of cookies in chrome]
 * @type {String}
 */
var cookies = '';

/**
 * for Linux
 */
home = '/home/aleen42/';
chrome = home + '.config/google-chrome/Default/';
cookies = chrome + 'Cookies';

/**
 * init the cookie object
 */
// cookieJs.cookie.init(cookies);


/** 
 * get all cookies
 */
cookieJs.cookie.getCookie('http://www.google.com/', function(cookies) {
    console.log(cookies);
});
