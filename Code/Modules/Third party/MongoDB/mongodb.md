3. Third party :- these modules/libraries are installed from NPM(Node package Manager). using NM we can create, inslall, update, delete, uninstall the third party modules.
Ex :- mongodb

- Before installing any third party modules, we need to have a file named "package.json" file in the project directory
- To create command is --> `npm init -y` (open terminal with current path, i.e, path of the project directory/folder)
- once the 'package.json' file is created, we can install the third party modules using command
```js
npm intall/i <name of the module>
all module name are lowercase, if multiple then seperated by ","

npm i mongodb
// there will be three changes
1. package.json
2. node-modules
3. package-lock.json
```
- use modules by importing it

```js
console.log(mongodb.MongoClient);
// MongoClient class helps to create a connection wuth nodeJS project and database.
```
- inside `MongoClient` class