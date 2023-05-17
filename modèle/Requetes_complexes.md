
### récupérer tous les livres avec leurs auteurs :
Livre.findAll({
  include: {
    model: Auteur
  }
});

### Requête pour récupérer tous les livres dont le prix est supérieur à 50 :
Livre.findAll({
  where: {
    Prix: {
      [Op.gt]: 50
    }
  }
});

### Requête pour récupérer tous les livres triés par ordre croissant de prix :
Livre.findAll({
  order: [['Prix', 'ASC']]
});

### Requête pour récupérer le nombre total de livres :
Livre.count();

### Requête pour récupérer la somme des ventes de tous les livres :
Livre.sum('Ventes');

### Requête pour récupérer le livre avec l'ID donné :
Livre.findByPk(id);

### Requête pour mettre à jour le prix d'un livre donné :
Livre.update({ Prix: 39.99 }, { where: { ID: id }});

### Requête pour supprimer un livre donné :
Livre.destroy({ where: { ID: id }});


### Requête pour récupérer les livres dont le titre contient le mot "aventure" ou le mot "fantastique" :
Livre.findAll({
  where: {
    [Op.or]: [
      {
        Nom: {
          [Op.like]: '%aventure%'
        }
      },
      {
        Nom: {
          [Op.like]: '%fantastique%'
        }
      }
    ]
  }
});
