# Sistema EMS


## Tecnologias
* Angular versão 11
* Bootstrap versão 4
* Docker
* [Font awsome](https://fontawesome.com/v4.7/examples/)
* [NG-Bootstrap](https://ng-bootstrap.github.io/#/home)
### Objetivo

O projeto foi desenvolvido para auxiliar na busca de profissionais e divulgação de trabalhos dos mesmss.

### Run project 

    If you don't have the dependencies installed, please use the follow command
```bash
    npm install
```
    if you already install the dependencies, please check if you have angular/cli 
```bash
ng --version
```
    if no, please install the @angular/cli, use the command below
```bash
npm i -g @angular/cli
```
    if yes, please run the project
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

