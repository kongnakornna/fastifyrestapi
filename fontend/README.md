# Name: seminarapi
# port : 3002
# nodejs  Version node-v18.12.1
## Base URL
## http://localhost:3002/seminarapi/
## nodejs v 18.12.1


# How To run project
# install project
- Run `npm install`  or Run `npm i ` 
- Run `npm install --global yarn`  
- Run `yarn --version`  

# Install Lerna.
- Run `npm install --global lerna`  OR - Run `npm install lerna -S`

# Install Npm Packages.
- Run `yarn bootstrap` from the root of your project to install all the necessary dependencies.

 
# Main Template's Development server
-Run `yarn start:main` from the root of your project to start a dev server. Navigate to http://localhost:3008/. The app will automatically reload if you change any of the source files.


# Rundev
- Run `yarn build:main` to build the project. The build artifacts will be stored in the packages/main/build/ directory.

# Main Template's Static Server
-   Run `yarn serve:main` this command will serve your static site on the port 5000 (Note: Run this after build)

# UI Element Package's Development Server
Run ` yarn storybook `from the root of your project to start UI Element Package's Development Server. Navigate to http://localhost:9001/. The app will automatically reload if you change any of the source files.


# UI Element Package's Development Server
Run `yarn storybook`
 from the root of your project to start UI Element Package's Development Server. Navigate to http://localhost:9001/. The app will automatically reload if you change any of the source files.



# UI Storybook Build
Run `yarn build-storybook` to build UI Element Package. The build artifacts will be stored in the packages/components/public/ directory.

# UI Element Package's Static Server
Run `yarn serve-storybook` to run UI Element's Static Server. Navigate to http://127.0.0.1:8080


# UI Elements Package Build
Run `yarn build:components` to build Element package. The build artifacts will be stored in the packages/components/dist/ directory. Usually, it will be build with yarn bootstrap. But, you have to build it if you change anything in elements pacakge.

# Fix Linting and Prettier Error
We have used eslint and prettier to manage and format our coding style. If you have any linting error Run yarn lint:fix to fix eslint error.

# Clean App
Run `yarn clean` will remove your node_modules and other unnecessary files
