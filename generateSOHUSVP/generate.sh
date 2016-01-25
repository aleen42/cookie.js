#!/bin/bash
##########################################################################
#
#
#                             +-+ +-+ +-+ +-+ +-+
#                             |#| |#| |#| +-+ |#|
#                             |#| |#| |#|     +-+
#                             +-+ |#| |#|
#                                 +-+ |#|
#                                     |#| +-+
#                                     +-+ |#|
#                                         |#| +-+
#                             +-+     +-+ |#| |#|
#                             |#| +-+ |#| |#| |#|
#                             +-+ +-+ +-+ +-+ +-+
#        ____                           _  _                  _    _
#       /  __\ _____ __   _ __ ___  ___| || |_  _____  _____ | |_ / \
#       | |__ /  _  \\ \ | |\ '_  \/  _  ||  _|/  _  \/  _  \|  _|| |___
#       \__  \| |_| || |_| || | | || |_| || |__| |_| || |_| || |__|  _  |
#       |____/\_____/|_____||_| |_|\_____|\___/\_____/\_____/\___/|_| |_|
# 
#       ================================================================
#            Copyright ® 2015-2015 Soundtooth.All Rights Reserved.
#       ================================================================
#       
#       - Document: generate.sh
#       - Author: aleen42
#       - Description: This is a shell script to access 'm.tv.sohu' and  
#                      get cookies from Chrome by using generate.js
#       - Create Time: Dec 22, 2015
#       - Update Time: Dec 22, 2015 
#       
###########################################################################

userName="aleen42"
chrome="/opt/google/chrome/google-chrome";
node=`which node`;
url="http://m.tv.sohu.com/v2291501.shtml?src=11310001&ptag=vsogou";
cache="/home/$userName/.cache/google-chrome/Default/Cache";

# remove cookies
`rm $cache/f_*`

# open the chrome to access the url
echo `$chrome $url`
sleep 20

echo `date`    `$node /home/$userName/testsohu/cookie.js/generateSOHUSVP/generate.js` >> /home/$userName/testsohu/cookie.js/log/$(date +%Y%m%d)_log 
