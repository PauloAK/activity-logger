# Standalone Logger Client

## Installation
1. Install composer dependencies
```
composer install
```

2. Copy the .env.example to .env and configure your variables
```
cp .env.example .env
```

Set your personal API Token in the **API_TOKEN** field, and define a **DEVICE_ID**, can be any name, will appear in the web dashboard.


## Execution

Run you logger service with the command
```
composer run start
```
*It will keep running until you kill/exit the process.*
