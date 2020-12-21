# Test technique


## Notes

### Méthodologie

Le projet est développé en TDD.

### Avancement

Le projet est en cours de développement. 

Etat d'avancement: création des fonctionalités permettant de tirer un set parmi un jeu de carte, et de trier ce set. Ces fonctionalités **ne sont pas encore visibles sur l'interface graphique**, mais peuvent être 'visualisées' en exécutant les tests unitaires associés à ces fontionnalités, via la commande `yarn test:unit`.

### Points d'améliorations sur les développements existants

- refactorer au niveau des constantes: (ex: nom des couleurs)
- ajout de `try/catchs` ou validateurs (sur les opérations de tableau en particulier)
- tester le fait que le set 'tiré' par l'utilisateur soit bien désordonné (test statistique ?)


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
