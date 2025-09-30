## dependencies

it means which third party modules the project is unsing.
  - there are two types of major dependencies
      1. production dependency : dependency which is required to run the project in production(live) default dependency
      2. development dependency : dependency which is required to run the project in development(local). to install under dev dev dependency
      - use `npm i -D <package-name>`
      - npm i nodemon -D
      - npm uninstall nodemon --> to remove any module name.
      - npm i module-name -g -->  `g` stands for global. (this will install globally, which means we can use it anywhere in the syatem)


### Express framework suppoorts MVC architechture
1. `m` : model (related to db --> schema defiining).
2. `v` : view (it is depcrited). reace, vue, angular.
3. `c` : controller (functionality --> CRUD, routers).