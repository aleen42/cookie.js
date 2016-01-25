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
// generate.js
var cookieJs = require('./../cookie.js');
```

- 2. initiate some parameters
	- **home**: the home directory(`pwd ~` in Linux)
	- **chrome**: the configurations directory of Chrome(In general, `{$home}/.config/google-chrome/Default/` in Linux)
	- **cookies**: the Cookies file under the directory *chrome*

```js
// generate.js
home = '/home/aleen42/';
chrome = home + '.config/google-chrome/Default/';
cookies = chrome + 'Cookies';
```

- 3. call methods `getCookie(url, callback)`
	- if you want to post data, here we can see a method `storeData(postURL, postData, callback)`

```js
// generate.js
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
# generate.sh
# open the chrome to access the url
`$chrome $url`
# sleep 10 seconds to load all cookies when accessing some website
sleep 10
# get cookie from Chrome
echo `$node /home/aleen42/testsohu/cookie.js/generateSOHUSVP/generate.js`
```

- 5. execute `crontab -e` to run the shell each hour

```sh
# crontb -e
# Edit this file to introduce tasks to be run by cron.
# 
# Each task to run has to be defined through a single line
# indicating with different fields when the task will be run
# and what command to run for the task
# 
# To define the time you can provide concrete values for
# minute (m), hour (h), day of month (dom), month (mon),
# and day of week (dow) or use '*' in these fields (for 'any').# 
# Notice that tasks will be started based on the cron's system
# daemon's notion of time and timezones.
# 
# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
# 
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
# 
# For more information see the manual pages of crontab(5) and cron(8)
# 
# m h  dom mon dow   command
29 * * * * export DISPLAY=:0 && google-chrome
30 * * * * export DISPLAY=:0 && /bin/sh /home/aleen42/testsohu/cookie.js/generateSOHUSVP/generate.sh >> /home/aleen42/testsohu/cookie.js/log/output.log 2>&1 && /bin/sh /home/aleen42/testsohu/cookie.js/killChrome.sh >> /home/aleen42/testsohu/cookie.js/log/output.log 2>&1
```

- *notice: open your Chrome before running the script*
