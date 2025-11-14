# nodejs
Building Projects with Nodejs

# 1 Nodejs + JavaScript

npm init -y
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
npx eslint --init
npm i -D esbuild

npm i express
npm i -D nodemon

✔ What do you want to lint? · javascript
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser

# 2 Nodejs + TypeScript

npm init -y
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
npx eslint --init

✔ What do you want to lint? · javascript
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser
✔ Which language do you want your configuration file be written in? · ts
ℹ Jiti is required for Node.js <24.3.0 to read TypeScript configuration files.
✔ Would you like to add Jiti as a devDependency? · Yes

ℹ The config that you've selected requires the following dependencies:
eslint, @eslint/js, globals, typescript-eslint, jiti

# 3 Nodejs + TypeScript

npm init -y
npm i -D typescript
npx tsc --init

npm i -D \
  eslint \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \

npm i -D @types/express
npm i -D nodemon
npm i -D @types/node
npm i -D ts-node typescript
npm i -D typescript-eslint

jsonwebtoken express prisma body-parser path uuid