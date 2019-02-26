
## Inspired by [Ignite UI for Angular](https://github.com/IgniteUI/igniteui-angular)

![Application demo](https://cdn-images-1.medium.com/max/800/1*MmrZOLYrOjGRvluKv_AGIA.gif)

Application that uses Angular framework, Firebase Auth and Real time databse, and Ignite UI for Angular components.

Open https://igniteui.github.io/crypto-portfolio-app/ to see the web app.
 - base href used for the web app - `<base href="https://igniteui.github.io/crypto-portfolio-app/">`

Mobile app available [here](https://drive.google.com/drive/folders/1ooju9wTa-ttdkW_NJJPKkaVtPpMMJTmk?usp=sharing), only for Android phones.
 - base href used for the mobile app - `<base href="./" />`. Use `dist` folder files in order to create the .apk file. Before zipping the folder, go to `index.html` file and change the base href. When the zip is ready, upload it to [phonegap app builder](https://build.phonegap.com/apps) and create the .apk.

This project is generated with [Angular CLI](https://github.com/angular/angular-cli).

## Start using the app
1. [Generate CryptoCompare API key](https://min-api.cryptocompare.com/pricing?utm_source=homepage&utm_medium=banner&utm_campaign=home_banner_cta) (Used by data services)
2. [Generate Firebase configuration](https://firebase.google.com/docs/web/setup) (Used for firebase auth and data storing).
1. Run `npm install`
2. Run `ng serve -o`

Note: Once you generate CryptoCompare API key, put it in the [`data.service.ts`](https://github.com/IgniteUI/crypto-portfolio-app/blob/master/src/app/services/data.service.ts#L13) as `private apiKey: string = '<your-api-key>'`.
Firebase configuration should be added in the [`app.module.ts`](https://github.com/IgniteUI/crypto-portfolio-app/blob/master/src/app/app.module.ts#L35) file:

```typescript
export const firebaseConfig = {
   apiKey: '',
   authDomain: '',
   databaseURL: '',
   projectId: '',
   storageBucket: '',
   messagingSenderId: ''
};
```

## Create a production bundle
1. Run `ng build --prod --aot`
2. Go to `dist folder` and host with IIS or any other provider (example [lite-server](https://github.com/johnpapa/lite-server#global-installation))

## Create simple web bundle
1. Run `ng build`
2. Go to `dist folder` and copy paste the content in the `docs` folder. Change the base href url to be `<base href="https://igniteui.github.io/crypto-portfolio-app/">`

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
