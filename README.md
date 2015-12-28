# cookie.js
## Description
- summary: cookie.js is used to get cookie from one of most popular browsers, **Chrome**. This small library is based on some modules: 	
	- **request**: a module for post request.
	- **sqlite3**: a module for accessing databases from Chrome.
	- **crypto**: a module for decrypting encryped values from the database, **Cookies** of Chrome. (reserved module, which is **not neeed**)
	- **chrome-cookies-secure**: a module for extracting encrypted Google Chrome Cookies for a url on Mac OS X or Linus. (more details on [**https://github.com/bertrandom/chrome-cookies-secure**](https://github.com/bertrandom/chrome-cookies-secure))
- license: [**MIT**](./LICENSE)

## Install the module first

- the version of **npm**: v1.3.24
- the version of **node**: v0.10.25

```sh
# if it's failed to install modules, please install your node and npm as the same version of mine
npm install request
npm install sqlite3
npm install crypto
npm install chrome-cookies-secure
```

## How does it works? (eg. generate SOHUSVP)

- 1. require the library

```js
/**
 * generate.js in the directory, generateSOHUSVP
 */
var cookieJs = require('./../cookie.js');
```

- 2. initiate some parameters
	- **home**: the home directory(`pwd ~` in Linux)
	- **chrome**: the configurations directory of Chrome(In general, `{$home}/.config/google-chrome/Default/` in Linux)
	- **cookies**: the Cookies file under the directory *chrome*

```js
home = '/home/aleen42/';
chrome = home + '.config/google-chrome/Default/';
cookies = chrome + 'Cookies';
```

- 3. call methods `getCookie(url, callback)`
	- if you want to post data, here we can see a method `storeData(postURL, postData, callback)`

```js
cookieJs.cookie.getCookie('http://m.tv.sohu.com/v2291501.shtml?src=11310001&ptag=vsogou', function(cookies) {
	console.log(cookies.SOHUSVP);
	cookieJs.cookie.storeData('https://video.soundtooth.cn/play/updateSOHUSVP/', {svp: cookies.SOHUSVP}, function(data) {
	})
});
```

- 4. use a shell script to generate Cookies at the fixed time
	- `generate.sh` in the directory, generateSOHUSVP, is a shell script used to generate a cookie, **SOHUSVP**, cause it's hard to generate.
	- chrome: the path of executable file `google-chrome`
	- url: the url of sohu

```sh
# open the chrome to access the url
`$chrome $url`
# sleep 10 seconds to load all cookies when accessing some website
sleep 10
# get cookie from Chrome
echo `$node /home/aleen42/testsohu/cookie.js/generateSOHUSVP/generate.js`
```

- 5. execute `crontab -e` to run the shell