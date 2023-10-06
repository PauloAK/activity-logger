# Standalone Logger Client

## Overview
This is a simple client to send activity logs to the application server, copy this folder into the place that you want to use the logger, then follow the steps below to install.

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
