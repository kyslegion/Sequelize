# Configurer Sequelize SQLite.

### Lier Sequelize a Sqlite

1. Assurez-vous que vous avez installé Sequelize et SQLite en tant que dépendances dans votre projet Node.js. Vous pouvez utiliser npm pour cela en exécutant la commande suivante :Copy codenpm 
```
install sequelize sqlite3
```

2. Importez Sequelize et créez une instance de Sequelize dans votre fichier JavaScript :
```
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite' // chemin vers le fichier de la base de données SQLite
});
```
Assurez-vous de remplacer 'database', 'username' et 'password' par les valeurs appropriées. Le paramètre 'storage' doit contenir le chemin vers votre fichier de base de données SQLite.

3. Définissez vos modèles Sequelize en utilisant la syntaxe Sequelize :
```
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  email: Sequelize.STRING
});
```

Vous pouvez ajouter autant de modèles que nécessaire.

4. Vous pouvez maintenant synchroniser les modèles avec la base de données et effectuer des opérations CRUD. Par exemple, pour créer un nouvel utilisateur :
```
sequelize.sync()
  .then(() => User.create({ username: 'John', email: 'john@example.com' }))
  .then(user => {
    console.log(user.toJSON());
  });
```

Cette séquence de code synchronise les modèles avec la base de données et crée ensuite un nouvel utilisateur avec les valeurs spécifiées. Le résultat est ensuite affiché dans la console.

Ces étapes devraient vous permettre de lier Sequelize à une base de données SQLite et d'effectuer des opérations de base. Assurez-vous d'adapter les exemples en fonction de vos besoins spécifiques.

