# Find The Square

A simple game where the player can select the size of the side of the board (between 7, 8, 9, and 10) and one of the squares of the board will be randomly selected. The player must then click squares in the board until they find the correct square. 

![image](https://user-images.githubusercontent.com/76069448/218329402-97c45031-a956-4b9c-881a-4644881321a1.png)
![image](https://user-images.githubusercontent.com/76069448/218329436-89d24b7d-d976-48d7-97a7-d7350ac75436.png)
![image](https://user-images.githubusercontent.com/76069448/218329537-1a0a16c6-9369-4a95-bcdc-b112118f65e9.png)

## Features

- Choose the size of the square board (between 7, 8, 9, and 10)
- The player must click squares in the board until they find the correct square
- If the selected square is close, it becomes yellow
- If it is far, it becomes gray
- If it's correct, it becomes green

## Technologies

- React
- TypeScript

## How to Run

1. Clone the repository
```
git clone https://github.com/alexmadeira23/find-the-square.git
```
2. Run npm install
```
npm install
```
3. Build the app for production to the build folder
```
npm run build
```
4. Compose up
```
docker compose up
```

The application will be running at http://localhost:8083

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.
