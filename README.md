
# cryptoApp

## Inspired by [Ignite UI for Angular](https://github.com/IgniteUI/igniteui-angular)

Application that uses Ignite UI for Angular components along with Firebase data storage and a lot more ..

Open https://igniteui.github.io/crypto-portfolio-app/ to see the web app.
 - base href used for the web app - `<base href="https://igniteui.github.io/crypto-portfolio-app/">`

Mobile app available [here](https://drive.google.com/drive/folders/1ooju9wTa-ttdkW_NJJPKkaVtPpMMJTmk?usp=sharing), only for Android phones.
 - base href used for the mobile app - `<base href="./" />`. Use `dist` folder files in order to create the .apk file. Before zipping the folder, go to `index.html` file and change the base href. When the zip is ready, upload it to [phonegap app builder](https://build.phonegap.com/apps) and create the .apk.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Start using the app
1. Run `npm install`
2. Run `ng serve -o`

## Create a production bundle
1. Run `ng build --prod --aot`
2. Go to `dist folder` and host with IIS or any other provider (example [lite-server](https://github.com/johnpapa/lite-server#global-installation))

## dist and docs folders

`docs` folder is used for the [GitHub Pages](https://igniteui.github.io/crypto-portfolio-app/) site. Related to [`Publishing your GitHub Pages site from a /docs folder on your `master` branch`](https://igniteui.github.io/crypto-portfolio-app/)
Use `ng build --prod --aot` to build the project, `copy -> paste` into `docs` folder the generated content in `dist` folder, and replace the `base href`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mobile app

Use phonegap to build the mobile application, the aot build proccess will update the content of the dist folder. Use it to replace the content in mobile/www/...

Keep in mind that the base href for the mobile app should be `<base href="./">`

.zip the mobile folder and use [phonegap builder](https://build.phonegap.com/apps/) to generate .apk file/

## More

Loading spinners in the app - [SpinKit](https://github.com/tobiasahlin/SpinKit)
