# ! CURRENTLY IN BETA.
_Foundation JavaScripts are not working yet. Please don't use it yet_

These are the gulpfiles that you can use for your web projects.

## Automatic installation
Go to [this](https://github.com/JorreSpijker/gulp-new-project) page.

## Manual installation
1. Create a folder
2. Move the content of this repository to the folder you've created.
3. Open the terminal and `cd` to the folder.
4. Run `npm install`
5. Grab a coffee while the packages are installing.
6. When it is finished, run `gulp`

## Use
1. Open the terminal and `cd` to the folder.
2. Run `gulp`
3. Follow the instructions there.

## Changelog

__2.1.1__
* Minor fixes

__2.0.0__
* Removed Flexbox grid

  This version uses Foundation 6 grid.

* Removed responsive.css

  This version uses Foundation 6 breakpoint mixins.

* Added Foundation 6

  Included framework to make it easier for using a grid.

* Added MotionUI

  Needed for Foundation 6

* Added config.yml

  Here are all the paths used in the tasks.

* Added Panini

  This way we can reuse some html code.

* Removed pug

  This conflicted with the use of Panini. With the use of Emmet it's as easy to write normal html.

__1.3.1__
* Added SCSS mixins

* Added SCSS helpers

* Added OpenColors library (https://github.com/yeun/open-color)

__1.3.0__
* Added gulp-plumber

  When there is an error, the other tasks will continue.

* Added gulp-clean

  With this `clean-pub` and `clean-dist` you could clear the pub and/or dist folder.

* Removed unneeded files
