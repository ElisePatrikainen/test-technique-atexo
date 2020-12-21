# Test technique


## Notes

### Présentation

Le projet présente une interface avec un jeu de cartes mélangées 'retournées'. L'utilisateur peut alors :
- sélectionner des cartes (en cliquant sur les cartes retournées)
- mettre sa donne en ordre (en cliquant sur le bouton 'order cards')
- réinitialiser et remélanger le jeu (en cliquant sur le bouton 'remix cards')


### Méthodologie

Le projet est développé en TDD:
- entièrement pour les parties 'libs/cards' et 'store'
- partiellement pour les composants (pour une contrainte de temps)

Les tests unitaires peuvent être joués via la commande `yarn test:unit`.

### Points d'améliorations sur les développements existants

- gestion des erreurs (liées aux actions de l'utilisateur, dans l'état, dans le module 'cards')
- typage (ex: props) et gestion des constantes (ex: nom des couleurs)
- plusieurs remarques ('todo') dans le code à revoir
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
