# ChicksFE-DanielRosillon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Node Setup

This project was made using NodeJs (v^18.16.1), needed to run this project. You can download and run the executable from the [official website](https://nodejs.org/en/blog/release/v18.16.1) for your respective operating system or either use NVM(Node Version Manager).

## Installing NVM (In case you don't have it yet)

For installing NVM on Windows, download the [ZIP](https://github.com/coreybutler/nvm-windows), unzip and run the executable.

For Linux or MacOs go to the [NVM Repo](https://github.com/nvm-sh/nvm) and follow the installation instructions in the README file.

## Node Version Management

To install the needed Node verison using NVM use these commands in the console of your preference:

```
nvm install 18.16.1
```

If you've already installed the node version either ways, verify the node 18.16.1 version is in use, using:

```
nvm list
```

If other version is in use, run: 
```
nvm use 18.16.1
```

## Project Setup

Once the repository is cloned, navigate/locate into the root folder and install the project dependencies using this command:

```
npm install
```

## Open Project/Development Server

For deploying the project locally, you must run Angular dev server, use the following command to do so:
```
ng serve
```
Then, navigate to `http://localhost:4200/` with your preferred browser. Or use this command to open the app in your operating system default browser: 
```
ng serve -o
```

<br>

---

<br>

# Features
ChciksGold frontend mock app. Features:
- League of Legends assets.
- Mock data with respective interfaces for data modelling.
- A service that provides the menu and items data.
- A responsive design. Including a responsive side menu, that can be displayed when the screen size is reduced, the burger menu icon appears and its clicked.
- Conditional rendering of the items card component depending on certain values suchs as on_sale flag.

<br>

---

<br>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
