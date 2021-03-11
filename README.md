# About this App

This is a simple Twitch-like app to stream videos. This repository contains the front-end part of the application, however in order for it to be fully working, a back-end server, a RTMP server and OBS (Open BroadCaster Server) are needed.

## Backend server

1. Create a folder for the server
2. Initialize npm: `npm init`
3. Install [json-server](https://github.com/typicode/json-server): `npm install --save json-server`
4. Modify package.json with the following script:
```
"scripts": {
		"start": "json-server -p 3001 -w db.json"
}
```
5. Run the server from its own folder with `npm start`

## RTMP server

1. Create a folder for the server
2. Initialize npm: `npm init`
3. Install [node-media-server](https://github.com/illuspas/Node-Media-Server): `npm install --save node-media-server`
4. Create a file called index.js in the root of the RTMP server folder with the following script:
```
const NodeMediaServer = require('node-media-server');

const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60
	},
	http: {
		port: 8000,
		allow_origin: '*'
	}
};

var nms = new NodeMediaServer(config)
nms.run();
```
5. Modify package.json with the following script:
```
"scripts": {
		"start": "node index.js"
}
```
6. Run the server from its own folder with `npm start`

## OBS (Open Broadcaster Software)

1. Install OBS from [here](https://obsproject.com/)
2. Configure your stream as follows in Settings -> Stream:
   - Stream Type : Custom Streaming Server
   - URL : rtmp://localhost/live
   - Stream key : id of the stream, which can be recovered from the url of the Stream's page in the app: `http://localhost:3000/streams/{:id}`


---


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
