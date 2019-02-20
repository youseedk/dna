# YouSee Design System

## Getting started

After cloning the repository run the following command to install node modules

```bash
$ npm ci
```

Once the above command has finished you start the development mode by running the following

```bash
$ npm start
```
# Or if you have gulp installed globally
```bash
$ gulp
```

That will run the project in development mode and will watch the files for changes. The command will also
print the hostname and port for where the server is runnning.

## Creating a dist-folder for upload

To create a folder with the entire component library simply run
```bash
$ gulp fractal:build
```
