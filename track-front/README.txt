SRC
├── application
│   ├── assets
│   └── libs
├── infrastructure
│   ├── api
│   └── actions
└── presentation
    ├── authentication
    │   ├── login
    │   └── register
    ├── dashboard
    ├── profile
    └── time_tracker
    

 :: travail sur la partie task 
    - custom Hook UseStopwatch  (gestion timer)
    - task component qui gere la creation et la mise en pause de task
    - save une nouvelle task dans la bdd 

    - recuperer toutes les task via user_id 
    - trier par date et les display sur tasks
    

CHANGELOG 22/06/23 - FIX NEW TIME_SPEND DISPLAY ON EDIT TASK  
CHANGELOG 26/06/23 - ADD CHECKBOX SUR LA SECTION Profile

TO DO ///
- FIXER HORAIRE UTC CORRECTE
- FIXER PROBLEME DU GRAPHIQUE
- AJOUTER SUPPRESSION ONCLCK TACHE SUR LA PAGE USER