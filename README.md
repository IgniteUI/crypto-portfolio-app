# cryptoApp

Application that uses Ignite UI for Angular components along with Firebase data storage and a lot more ..

Open https://igniteui.github.io/crypto-portfolio-app/ to see the web app.
 - base href used for the web app - `<base href="https://igniteui.github.io/crypto-portfolio-app/">`

Mobile app available [here](https://drive.google.com/drive/folders/1ooju9wTa-ttdkW_NJJPKkaVtPpMMJTmk?usp=sharing), only for Android phones.
 - base href used for the mobile app - `<base href="./" />`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## dist and docs folders

`dist` folder is used to store the files build with aot.
`docs` folder is used for the [GitHub Pages](https://igniteui.github.io/crypto-portfolio-app/) site. Related to [`Publishing your GitHub Pages site from a /docs folder on your `master` branch`](https://igniteui.github.io/crypto-portfolio-app/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mobile app

Use phonegap to build the mobile application, the aot build proccess will update the content of the dist folder. Use it to replace the content in mobile/www/...

Keep in mind that the base href for the mobile app should be `<base href="./">`

.zip the mobile folder and use [phonegap builder](https://build.phonegap.com/apps/) to generate .apk file/
