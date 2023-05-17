const Livre = require('./schema');
Livre.bulkCreate([
    {
      Nom: 'Le Seigneur des Anneaux',
      NomSansEspaces: 'LeSeigneurDesAnneaux',
      Presentation: 'Une grande épopée fantastique qui se déroule dans un monde imaginaire rempli de magie, d\'aventures et de batailles épiques.',
      Description: 'Le Seigneur des Anneaux est un roman de J.R.R. Tolkien qui raconte l\'histoire d\'un jeune hobbit nommé Frodon Sacquet qui doit détruire un anneau magique avant qu\'il ne tombe entre de mauvaises mains et ne corrompe le monde.',
      Couverture: 'https://exemple.com/couverture/seigneur-anneaux.jpg',
      Prix: 29.99,
      Genre: 'Fantasy',
      Accroche: 'Un voyage épique à travers les terres de la Terre du Milieu.',
      Lien: 'https://exemple.com/livre/seigneur-anneaux',
      Auteur: 'J.R.R. Tolkien',
      Edition: 'XYZ Éditions',
      Quantite: 10,
      Annee: 1954,
      NbPages: 1000,
      Ventes: 100.50,
      Arriere: 'https://exemple.com/couverture/seigneur-anneaux-arriere.jpg',
      Dos: 'https://exemple.com/couverture/seigneur-anneaux-dos.jpg'
    },
    {
      Nom: 'Harry Potter à l\'école des sorciers',
      NomSansEspaces: 'HarryPotterEcoleSorciers',
      Presentation: 'Le premier livre de la célèbre série Harry Potter qui raconte l\'histoire d\'un jeune sorcier nommé Harry Potter qui découvre qu\'il est le célèbre sorcier qui a survécu à l\'attaque du puissant mage noir, Lord Voldemort.',
      Description: 'Harry Potter à l\'école des sorciers est un roman de J.K. Rowling qui plonge les lecteurs dans un monde magique rempli de créatures fantastiques, de sortilèges et de mystères.',
      Couverture: 'https://exemple.com/couverture/harry-potter.jpg',
      Prix: 19.99,
      Genre: 'Fantasy',
      Accroche: 'Une aventure ensorcelante remplie de magie et d\'amitié.',
      Lien: 'https://exemple.com/livre/harry-potter',
      Auteur: 'J.K. Rowling',
      Edition: 'ABC Éditions',
      Quantite: 5,
      Annee: 1997,
      NbPages: 320,
      Ventes: 250.75,
      Arriere: 'https://exemple.com/couverture/harry-potter-arriere.jpg',
      Dos: 'https://exemple.com/couverture/harry-potter-dos.jpg'
    },
    {
      Nom: '1984',
      NomSansEspaces: '1984',
      Presentation: 'Un roman dystopique qui dépeint un futur sombre et totalitaire où la liberté individuelle est réprimée et la surveillance gouvernementale est omniprésente.',
      Description: '1984 est un roman de George Orwell qui explore des thèmes tels que la manipulation de l\'information, le contrôle de la pensée et la résistance face à un régime oppressif.',
      Couverture: 'https://exemple.com/couverture/1984.jpg',
      Prix: 14.99,
      Genre: 'Science-fiction',
      Accroche: 'Une critique visionnaire de la société et du pouvoir.',
      Lien: 'https://exemple.com/livre/1984',
      Auteur: 'George Orwell',
      Edition: 'XYZ Éditions',
      Quantite: 8,
      Annee: 1949,
      NbPages: 328,
      Ventes: 75.25,
      Arriere: 'https://exemple.com/couverture/1984-arriere.jpg',
      Dos: 'https://exemple.com/couverture/1984-dos.jpg'
    }
  ])
    .then(livres => {
      console.log(livres);
    })
    .catch(error => {
      console.error('Erreur lors de la création des livres:', error);
    });
  