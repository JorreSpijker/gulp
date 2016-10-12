#!/bin/bash
LOC=~/Documents/Work/Web/Gulp
clear
echo "Create a new project."
echo "Projectname:"
read -r projectname
mkdir $LOC/www-$projectname
cd $LOC/www-$projectname
sleep 0.2s
clear
echo ""
echo "┌──────────────────────────────────────────────────────────────┐"
echo "│ ✔︎   Created a folder with the name www-$projectname             │"
echo "└──────────────────────────────────────────────────────────────┘"
echo ""
echo "┌──────────────────────────────────────────────────────────────┐"
echo "│ Initializing Git                                             │"
echo "└──────────────────────────────────────────────────────────────┘"
echo ""
cd $LOC/www-$projectname
git init
sleep 0.2s
echo ""
echo "┌──────────────────────────────────────────────────────────────┐"
echo "│ Downloading Gulp                                             |"
echo "└──────────────────────────────────────────────────────────────┘"
echo ""
sleep 0.2s
git pull https://github.com/JorreSpijker/gulp.git
echo ""
echo "┌──────────────────────────────────────────────────────────────┐"
echo "│ Installing Gulp                                              |"
echo "└──────────────────────────────────────────────────────────────┘"
echo ""
sleep 0.2s
time npm install
clear
echo ""
echo "┌──────────────────────────────────────────────────────────────┐"
echo "│ ✔︎   Project created                                          |"
echo "└──────────────────────────────────────────────────────────────┘"
echo ""
sleep 0.2s
echo ""
read -r -p "Do you want to run Gulp? [y/N] " response
if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]
then
    echo "Okay, let's run Gulp"
osascript <<END
tell application "Terminal"
    do script "cd \"`pwd`\" && gulp"
end tell
END
else
    echo ""
    echo "Goodbye!"
    echo ""
fi
