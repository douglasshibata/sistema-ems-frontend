# Sistema EMS

## Tecnologias

- Angular versão 11
- Bootstrap versão 4
- Docker
- [Font awsome](https://fontawesome.com/v4.7/examples/)
- [NG-Bootstrap](https://ng-bootstrap.github.io/#/home)

### Objetivo

O projeto foi desenvolvido para auxiliar na busca de profissionais e divulgação de trabalhos dos mesmss.

### Run project

- If you don't have the dependencies installed, please use the follow command

```bash
    npm install
```

- if you already install the dependencies, please check if you have angular/cli

```bash
ng --version
```

- if no, please install the @angular/cli, use the command below

```bash
npm i -g @angular/cli
```

- if yes, please run the project

```bash
ng serve
```

### Run project in docker

#### Build docker image

```bash
docker build -t ems .
```

#### Run With Docker

```bash
docker-compose up -d
```

```bash
docker run -dp 8081:80  ems
```

### Main Project

https://github.com/MarcosAllysson/ems

### Deploy Heroku

Create a server.js and install express

Change the file package.json
from

```json
    "Scripts":{
        ....,
        "start":"ng serve",
        .....
    }
```

to

```json
    "Scripts":{
        .....,
    "start": "node server.js",
    "postinstall": "ng build --aot --prod",
    "heroku-postbuild": "ng build --prod",
            .....
    }
```

and add the engines in package.json
```json
"engines": {
    "node": "14.x",
    "npm": "6.x"
  },
```

Connect repository to heroku

```bash
heroku git:remote -a system-ems-test
```

Commit the changes
then push to heroku master
```bash
git push heroku master
```

##### Available 
https://system-ems-test.herokuapp.com/