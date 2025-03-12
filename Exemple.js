// gestion des suppressions associées dans le cadre de relations many to many


const db = require("")

// Modèle Biere
const Biere = db.define('Biere', {
});

// Modèle Commande
const Commande = db.define('Commande', {
});

// Table de liaison Biere_Commande
const Biere_Commande = db.define('Biere_Commande', {
}, {
  onDelete: 'CASCADE'
});

Biere.belongsToMany(Commande, { through: Biere_Commande });
Commande.belongsToMany(Biere, { through: Biere_Commande });













// Les querys, particulièrement ceux où on doit faire une requete SQL particulière (par exemple trouver le nom de la ville qu'on cherche dans l'adresse)

const city = 'Bord'

const bars = await Bar.findAll({
  where: {
    adresse: {
      [db.Sequelize.Op.like]: `%${city}%`
    }
  }
});















// Comment aurez-vous organiser le travail de groupe ?

// -> Découper en tickets à l'aide d'un trello
// -> Une branche par ticket
// -> Pull request avant de merge sur main que vous validez à deux 












// J'aimerais bien qu'on repasse un peu sur les notions pour les liens entre les tables et les notions pour endpoints avancés

// Many to One

// Table A : id, name, surname...
// Table B : id, id_a, name, surname...

// A est relié à n B
// B est relié à 1 A


// Many to Many
// Table A : id, name, surname...
// Table B : id, name, surname...

// Table A_B : id_a, id_b...

