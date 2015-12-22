/************************************************************************
 *
 *                            +-+ +-+ +-+ +-+ +-+
 *                            |#| |#| |#| +-+ |#|
 *                            |#| |#| |#|     +-+
 *                            +-+ |#| |#|
 *                                +-+ |#|
 *                                    |#| +-+
 *                                    +-+ |#|
 *                                        |#| +-+
 *                            +-+     +-+ |#| |#|
 *                            |#| +-+ |#| |#| |#|
 *                            +-+ +-+ +-+ +-+ +-+
 *       ____                           _  _                  _    _
 *      /  __\ _____ __   _ __ ___  ___| || |_  _____  _____ | |_ / \
 *      | |__ /  _  \\ \ | |\ '_  \/  _  ||  _|/  _  \/  _  \|  _|| |___
 *      \__  \| |_| || |_| || | | || |_| || |__| |_| || |_| || |__|  _  |
 *      |____/\_____/|_____||_| |_|\_____|\___/\_____/\_____/\___/|_| |_|
 *
 *      ================================================================
 *           Copyright ® 2015-2015 Soundtooth.All Rights Reserved.
 *      ================================================================
 *      
 *      - Document: generate.js
 *      - Author: aleen42
 *      - Description: This is a JavaScript file to get cookies from 
 *      			   Chrome.
 *      - Create Time: Dec 21, 2015
 *      - Update Time: Dec 22, 2015 
 *      
 ***********************************************************************/
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
cookieJs.cookie.getCookie('http://m.tv.sohu.com/20151211/n430869605.shtml', function(cookies) {
	cookieJs.cookie.storeData('http://video.soundtooth.cn/play/updateSOHUSVP/', {svp: cookies.SOHUSVP}, function(data) {
	})
});
