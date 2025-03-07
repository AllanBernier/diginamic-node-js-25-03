const { Player, Match } = require('./model/index');
const db = require('./config/db');

const validActions = ['pierre', 'feuille', 'ciseaux'];
const resultats = ['égalité', 'victoire', 'défaite'];

// Fonction pour générer un nombre aléatoire entre min et max (inclus)
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Fonction pour générer une date aléatoire entre 1970 et 2000
const getRandomDate = () => {
  const start = new Date(1970, 0, 1);
  const end = new Date(2000, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Fonction pour générer un match aléatoire
const generateRandomMatch = (playerId) => {

  console.log(playerId)

  const userIndex = getRandomInt(0, 2);
  const computerIndex = getRandomInt(0, 2);
  const userChoice = validActions[userIndex];
  const computerChoice = validActions[computerIndex];
  
  // Calcul du résultat
  const result = (userIndex - computerIndex + 3) % 3;
  const strResult = resultats[result];
  
  return {
    user_choice: userChoice,
    computer_choice: computerChoice,
    result: strResult,
    playerId: playerId
  };
};

// Fonction principale pour créer les données
const seed = async () => {
  try {
    // Synchroniser la base de données
    await db.sync({ force: true });
    console.log('Base de données synchronisée');

    // Créer 10 joueurs
    const players = [];
    for (let i = 1; i <= 10; i++) {
      const player = await Player.create({
        name: `Nom${i}`,
        surname: `Prénom${i}`,
        picture_url: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`,
        birth_date: getRandomDate()
      });
      players.push(player);
      console.log(`Joueur ${i} créé`);
    }

    // Créer 10 matchs pour chaque joueur
    for (const player of players) {

      console.log(player)
      const matches = [];
      for (let j = 0; j < 10; j++) {
        const matchData = generateRandomMatch(player.id);
        const match = await Match.create(matchData);
        matches.push(match);
      }
      console.log(`10 matchs créés pour le joueur ${player.id}`);
    }

    console.log('Seeding terminé avec succès!');
  } catch (error) {
    console.error('Erreur lors du seeding:', error);
  } finally {
    // Fermer la connexion à la base de données
    await db.close();
  }
};

// Exécuter le seeding
seed();
