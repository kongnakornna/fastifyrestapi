# Name: seminarapi
# port : 3002
# nodejs  Version node-v18.12.1
## Base URL
## http://localhost:3002/seminarapi/
## nodejs v 18.12.1


# How To run project
# install project
- Run `npm install`  or Run `npm i ` 

# Development server
- Run `npx nodemon` for a dev server.  OR  Run `npx ts-node -P tsconfig.json src/server.ts `

## Development server on Build
# Build Source Code on production
- Run `npx gulp `
 -- After Run `npx gulp ` is have directory `dist` file in package typescript
# directory Build file ` dist/server.ts`
# How To run project
# install project
- Run `npm install `  and  Run `npm install -g nodemon`

# Build Source Code on production
- Run `npx gulp `
# aduit
- Run `npm audit` #Check audit information of installed dependencies showing 
- Run `npm audit fix --force`

# vulnerabilities
- Run `npm audit --json `#Show audit results more detailed with json format
- Run `npm audit fix` #Audit and tries fixing vulnerabilities in dependencies
- Run `npm audit fix `--focce #Forces fix of problems found in installed packages
# installing further `dependencies if necessary

## Database
Database as MySQL version 5.6.20 on trueplookpanya 
