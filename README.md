
![CI](https://github.com/IgniteUI/crypto-portfolio-app/workflows/CI/badge.svg?branch=master)

## Inspired by [Ignite UI for Angular](https://github.com/IgniteUI/igniteui-angular)

![Application demo](https://cdn-images-1.medium.com/max/800/1*MmrZOLYrOjGRvluKv_AGIA.gif)

Application that uses Angular framework, Firebase Auth and Real time databse, and Ignite UI for Angular components.

Open https://igniteui.github.io/crypto-portfolio-app/ to see the web app.
 - base href used for the web app - `<base href="https://igniteui.github.io/crypto-portfolio-app/">`

This project is generated with [Angular CLI](https://github.com/angular/angular-cli).

## Start using the app

### Prerequisites
1. **Node.js**: Use node version 18+ (recommended)
2. **CryptoCompare API Key**: [Generate CryptoCompare API key](https://min-api.cryptocompare.com/pricing?utm_source=homepage&utm_medium=banner&utm_campaign=home_banner_cta) (Used by data services)
3. **Firebase Project** (applicable when the project is forked): [Create a Firebase project](https://firebase.google.com/docs/web/setup) (Used for authentication and data storage)


## Create a production bundle
1. Run `ng build --prod --aot`
2. Go to `dist folder` and host with IIS or any other provider (example [lite-server](https://github.com/johnpapa/lite-server#global-installation))

## Create web bundle (update the hosted website)
Use the command `npm run build:web:prod` or you can manually build the project with:

1. Run `ng build`
2. Go to `dist folder` and copy paste the content in the `docs` folder. Change the base href url to be `<base href="https://igniteui.github.io/crypto-portfolio-app/">`

> Note: If you receive 'ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'from' of undefined. TypeError: Cannot read property 'from' of undefined'), use `npm run build:web:noProd`

## dist and docs folders

`docs` folder is used for the [GitHub Pages](https://igniteui.github.io/crypto-portfolio-app/) site. Related to [`Publishing your GitHub Pages site from a /docs folder on your `master` branch`](https://igniteui.github.io/crypto-portfolio-app/)
Use `ng build --prod --aot` to build the project, `copy -> paste` into `docs` folder the generated content in `dist` folder, and replace the `base href`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Firebase Setup

#### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

#### Step 2: Add Web App to Firebase Project
1. In your Firebase project console, click the **Web icon** (`</>`)
2. Register your app with a nickname (e.g., "Crypto Portfolio App")
3. **Copy the Firebase configuration object** - you'll need these values:

```javascript
// Your Firebase Config (example)
const firebaseConfig = {
  apiKey: "AIzaSyExample123...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

#### Step 3: Enable Authentication
1. In Firebase Console → **Authentication** → **Sign-in method**
2. Enable **Email/Password** provider
3. Enable **Google** provider (optional)
4. Add your domain to **Authorized domains** (e.g., `localhost`, your GitHub Pages domain)

#### Step 4: Setup Firestore Database
1. In Firebase Console → **Firestore Database** → **Create database**
2. Start in **test mode** (you can configure rules later)
3. Choose your preferred location

#### Step 5: Setup Realtime Database (if using)
1. In Firebase Console → **Realtime Database** → **Create database**
2. Start in **test mode**
3. Choose your preferred location

### Local Development Setup

#### Option 1: Local Environment File (Recommended)
1. Create `src/environments/environment.local.ts`:
```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'your-actual-api-key-here',
    authDomain: 'your-project.firebaseapp.com',
    databaseURL: 'https://your-project-default-rtdb.firebaseio.com/',
    projectId: 'your-project-id',
    storageBucket: 'your-project.appspot.com',
    messagingSenderId: 'your-sender-id'
  }
};
```

2. Add to `angular.json` configurations (if not already present):
```json
"serve-local": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "buildTarget": "crypto-portfolio-app:build-local"
  }
},
"build-local": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.local.ts"
      }
    ]
  }
}
```

3. Run locally:
```bash
npm install
ng serve -c local
```

#### Option 2: Direct Configuration (Quick Setup)
Replace the placeholder values in `src/environments/environment.ts` with your actual Firebase config for local development:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'your-actual-api-key-here',          // Replace with your apiKey
    authDomain: 'your-project.firebaseapp.com',  // Replace with your authDomain
    databaseURL: 'https://your-project-default-rtdb.firebaseio.com/', // Replace with your databaseURL
    projectId: 'your-project-id',                // Replace with your projectId
    storageBucket: 'your-project.appspot.com',   // Replace with your storageBucket
    messagingSenderId: 'your-sender-id'          // Replace with your messagingSenderId
  }
};
```

**⚠️ Important**: Remember to revert these changes before committing to Git!

### CryptoCompare API Setup
1. Get your API key from [CryptoCompare](https://min-api.cryptocompare.com/pricing)
2. Add it to [`data.service.ts`](src/app/services/data.service.ts) as `private apiKey: string = '<your-api-key>'`

### Install and Run
1. Run `npm install`
2. Run `ng serve -o` (or `ng serve -c local` if using local environment file)

### Production Deployment
For production deployment to GitHub Pages, the Firebase configuration will be automatically injected from GitHub secrets during the CI/CD process. See [DEPLOYMENT.md](DEPLOYMENT.md) for details.

## More

Loading spinners in the app - [SpinKit](https://github.com/tobiasahlin/SpinKit)
