# nodejs
Building Projects with Nodejs

## Key Features

- Layered Architecture / 3-Layer Pattern
- All repository/service/controller methods use async/await
- Full CRUD API for users
- Error handling in controllers
- Ready for ES Modules, Node.js 18+
- Can use ESBuild for production bundle
- Can use TypeScript with type-only imports

# Project Architecture

![Pic1](./docs/diagram1.png)  

| Pattern | Where | Purpose |
|---------|-------|---------|
| Layered Architecture | All layers	| Separates concerns
| Repository Pattern |	repositories/	| Abstracts data access
| Service Layer Pattern |	services/	| Centralizes business logic
| Controller Pattern |	controllers/	| Handles HTTP requests
| Router / Delegation |	routes/	| Delegates endpoints to controllers
| Async / Await |	services & repositories	| Non-blocking I/O
| Exception Handling |	Controllers	| Maps errors to HTTP responses
| Dependency Injection (manual) |	Controllers → Services → Repos	| Decouples components
| DTO / Data Flow |	Request/Response	| Encapsulates data transfer

| Data Access Layer |
|-------------------|
| Repository Layer
| src/repositories/user.repository.js / .ts
| Responsibility: Handles data storage, whether in-memory or database.
| Pattern: Repository Pattern — abstracts database operations behind a class interface.

| Business Logic Layer |
|----------------------|
| Service Layer
| src/services/user.service.js / .ts
| Responsibility: Implements business logic and orchestrates repository calls.
| Pattern: Service Layer Pattern — separates logic from controllers and DB access.

| Presentation / API Layer |
|--------------------------|
| Controller Layer
| src/controllers/user.controller.js / .ts
| Responsibility: Handles HTTP requests and responses, calls services.
| Pattern: Controller Pattern — decouples routing from business logic.

# Design Patterns

- Repository Pattern
- Factory Pattern
- Dependency Injection Pattern
- Strategy Pattern (e.g., for multiple data sources)
- Adapter Pattern (e.g., to switch between DB providers)
- Singleton Pattern
- MVC + Layered Architecture

# Project Patterns

- Router Pattern / Modular Routing
- Singleton-ish Service Instances
- Error Handling / Exception Pattern
- Async/Await / Promise Handling
- Dependency Injection (light)
- DTO-ish Pattern (Data Transfer)

# Project OOP principles

- Encapsulation means hiding internal details and exposing only what other modules need.
- Abstraction is simplifying complexity by exposing only what matters.
- Polymorphism means different objects can be used through the same interface.
- Inheritance means a class can inherit from another class.

| OOP Principle	| Where It Appears in the Node.js Project|
----------------|----------------------------------------|
| Encapsulation	| Each layer hides its internal logic (DB, business rules, HTTP).
| Abstraction	| Services abstract business rules; repositories abstract DB access.
| Polymorphism	| Repositories or services can be swapped via dependency injection.
| Inheritance	| Optional: shared base classes (BaseRepository, BaseController).

# Full OOP Project 1 and 3

````
project/
├─ src/
│  ├─ repositories/
│  │  ├─ user.repository.ts / .js
│  ├─ services/
│  │  └─ user.service.ts / .js
│  ├─ controllers/
│  │  └─ user.controller.ts / .js
│  ├─ routes/
│  │  └─ user.routes.ts / .js
│  ├─ app.ts / .js
│  └─ server.ts / .js
├─ build.js
├─ package.json
├─ tsconfig.json
└─ eslint.config.js

````

# Project from folder 1: Nodejs + JavaScript

````
npm init -y
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
npx eslint --init
npm i -D esbuild

npm i -S express
npm i -D nodemon

✔ What do you want to lint? · javascript
✔ How would you like to use ESLint? · syntacs and problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · npm

````

# Project from folder 2: Nodejs + JavaScript + Prisma + @libsql Database

````
npm init -y
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
npx eslint --init

✔ What do you want to lint? · javascript
✔ How would you like to use ESLint? · syntacs and problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · npm

npm i -D esbuild
npm i -S express
npm i -D nodemon

npm i -S @prisma/client
npm i -D prisma
npm i -S @libsql/client
npm i -S concurrently

npm run studio
http://localhost:3000/
http://localhost:5555/

````

# Project from folder 3: Nodejs + TypeScript

````
npm init -y
npm i -D typescript
npx tsc --init

npm i -S express

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

````

# Create Tables and Migration

npm run migrate

# Run Web UI
npx prisma studio
npx prisma generate

# Create sqLite Database Record

sqlite3 data/local.db

INSERT INTO User (firstname, lastname, phone, email) VALUES ('Bob', 'Bob', '45678894', 'bob@example.com');

.quit

# Install Packages

npm i -S concurrently body-parser cors axios socket.io socket.io-client jsonwebtoken bcrypt dotenv uuid

# Project from folder 4: Nodejs + JavaScript + Prisma + @libsql Database + Socket IO

````
npm init -y
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
npx eslint --init

✔ What do you want to lint? · javascript
✔ How would you like to use ESLint? · syntacs and problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · npm

npm i -D esbuild nodemon prisma concurrently
npm i -S express @prisma/client @libsql/client socket.io
npm i -D @faker-js/faker

npx prisma migrate reset
npm run migrate

npm run studio
http://localhost:3000/
http://localhost:5555/

````


