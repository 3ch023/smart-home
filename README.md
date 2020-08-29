# Smart Home

A JavaScript application simulating house automation.

## Demo

1. Install Dependencies
```bash
npm install 
```
2. Build To Dist Folder
```bash
npm run build
```

## Run Dev Server
```bash
npm start
```
Project will run at [http://localhost:8081/](http://localhost:8081/)

## Troubleshooting
1. CORS errors - some files can't be loaded
This happens if you just open index.html in browser. Try running the browser with disabled security. For Chrome on OSX: 
```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```


