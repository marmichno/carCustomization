# Car customization

![carCustomization2](https://user-images.githubusercontent.com/72525469/124497707-8e3e4300-ddbb-11eb-932e-71a52b24b577.gif)

## About project

Customization of a car - Each car has its own configuration with price for every element.
App doesnt contain backend, configuration is saved in json file which is asynchronously imported simulating get request.
Car models are compressed using draco compression to adapt them for web standards.

## Tech

- react
- sass
- redux - state managmnet
- react three fiber - 3d model
- react three drei -  easier access to imported model


## Installation

Run those commands in created project directory:
```sh
git clone https://github.com/marmichno/carCustomization.git
cd carCustomization
npm install
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
