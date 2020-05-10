# Fire Preview
#### The idea it's provide a Live Preview for Firebase users that serve the hosting by functions application. In another words users of command: `firebase serve`
 
 
## Great Achievals:
-  Watch some required files;
-  Update the page if files has changed;
-  Timed.

## What you need to do:
#### Install:

-  Load the lib before your main script on your webpage;
```html
<script src="https://cdn.jsdelivr.net/gh/juloko/Fire-Preview/firePreview.js"></script>
```
#### On your main script:

-  Declare the files that you keep watching;
```js
const dinamicPath = [
    "index.html",
    "js/main/lightNews.js",
    "/css/style.css"];
```

-  Define time to update the page;
```js
const  timeUpdate = 5000;`
```

-  Call Fire Preview.
```js
firePreview(dinamicPath,timeUpdate);
```

## Credits

Thanks to the  [Stack Overflow Comunity](http://stackoverflow.com/).
Thank you guys you are awesome!


 ## License

[MIT](LICENSE)
