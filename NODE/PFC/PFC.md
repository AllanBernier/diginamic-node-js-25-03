# L'objectif est de réaliser une API pour un jeu de pierre feuille ciseaux.

1. 

Créer une table "player" avec les champs : name, surname, birth_date, picture_url

Réaliser les routes 

GET /player  --> Récupérer tous les players
GET /player/:id  --> Récupérer un player par son ID
POST /player  --> Créer un nouvel player
PUT /player/:id  --> Mettre à jour un player existant
DELETE /player/:id  --> Supprimer un player

Ajouter un nouveau router et contrôleur avec une route 

POST /matchs?action=[pierre, feuille, ciseaux] --> permet de jouer contre l'ordinateur, renvoie le résultat du match

2. 
Ajouter une table "matchs" reliée à player par une relation Many to One.
La table est représentée par user_choice, computer_choice, result

Réaliser les routes :

GET /matchs/leaderboards --> Affiche les 10 joueurs ayant le plus de victoires
GET /matchs/player/:id --> récupère tous les matchs d'un player

Modifier la route POST /matchs?action=[pierre, feuille, ciseaux] afin d'ajouter un match dans la base de données


3. 
Ajouter une table "tournaments" avec les champs : name, date, description, prize.
Créer une table de jointure "tournament_player" pour établir une relation many-to-many entre les players et les tournois.

Réaliser les routes :

GET /tournaments --> Récupérer tous les tournois
GET /tournaments/:id --> Récupérer un tournoi par son ID
POST /tournaments --> Créer un nouveau tournoi
PUT /tournaments/:id --> Mettre à jour un tournoi existant
DELETE /tournaments/:id --> Supprimer un tournoi

GET /tournaments/:id/player --> Récupérer tous les players d'un tournoi
POST /tournaments/:id/player/:userId --> Ajouter un player à un tournoi
DELETE /tournaments/:id/player/:userId --> Retirer un player d'un tournoi

GET /player/:id/tournaments --> Récupérer tous les tournois d'un player

4. 
Ajouter une route sur user pour lui ajouter une image, stocker l'image sur le serveur

5.
Ajoute des règles de validation pour chaque routes ayant un body en utilisant express-validator.
