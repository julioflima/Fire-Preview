# Fire Preview
#### The idea it's provide a Live Preview for Firebase users that serve the hosting by functions application. In another words users of command: `firebase serve`
 
 
## Great Achievals:
-  Watch some required files;
-  Update the page if files has changed;
-  Timed.

## What you need to do:
#### On your main script, before load `firePreview.js`:

-  Declare the files that you keep watching;
```js
const dinamicPath = [
    "index.html",
    "js/main/lightNews.js",
    "/css/style.css"];
```

-  Define time to update the page;
```js
const  timeUpdate = 100;`
```

#### Install:
-  Load the lib before your main script on your webpage;
```html
<script src="https://cdn.jsdelivr.net/gh/juloko/Fire-Preview/firePreview.js"></script>
```


## Credits

Thanks to the  [Stack Overflow Comunity](http://stackoverflow.com/).
Thank you guys you are awesome!


 ## License

[MIT](LICENSE)
