# Logger Application

## Overview
This application is used to store activity records for devices, it provides a simple script that you can setup and connect with your account to track the usage of specific devices.

Example server running at: https://logger.paulokramer.com

## Technologies
The app is built with Laravel 10, using Laravel Breeze as a starter kit to have the authentication and initial UI ready, the frontend is in React powered by Inertia.js and Tailwind.

The app can work with any database driver that Laravel supports, eg: PostgreSQL, MySQL, etc.

The standalone logger app is a simple PHP application with a few composer packages, and do the requests to the server using Guzzle Http Client.

## Dependencies
- PHP
- Composer
- Docker

## Installation
1. Install composer dependencies
```
composer install
```

2. Build you local containers
```
./vendor/bin/sail up -d
```
*This may take a while to download the images*

3. Generate your criptography key
```
./vendor/bin/sail artisan key:generate
```

4. Run the migration with the seeders
```
./vendor/bin/sail artisan migrate --seed
```

5. Downlaod frontend dependencies
```
./vendor/bin/sail npm install
```

6. Build the frontend
```
./vendor/bin/sail npm run dev
```

Now you should be able to access the app on: http://127.0.0.1

Default user:
Email: admin@admin.com
Password: admin123

---

## Standalone logger service

To see more details around the standalone logger, such as installation and usage, access the [standalone_logger_client](standalone_logger_client) folder
