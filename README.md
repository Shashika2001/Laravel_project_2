# Product API Laravel Project

A full-stack web application combining a Laravel REST API backend with a React frontend for managing and displaying products.

## Project Structure

```
laravel-project
│   .env
│   .gitignore
│   artisan
│   composer.json
│   package.json
│   phpunit.xml
│
├───app
│   ├───Console
│   ├───Exceptions
│   ├───Http
│   │   ├───Controllers
│   │   └───Middleware
│   ├───Models
│   └───Providers
│
├───bootstrap
│   └───cache
│
├───config
│
├───database
│   ├───factories
│   ├───migrations
│   └───seeders
│
├───public
│   ├───css
│   ├───js
│   └───images
│
├───resources
│   ├───css
│   ├───js
│   └───views
│
├───routes
│   ├───api.php
│   └───web.php
│
├───storage
│   ├───app
│   ├───framework
│   └───logs
│
└───tests
    ├───Feature
    └───Unit

```
## Installation and Setup

Follow these steps to set up the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/laravel-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd laravel-project
   ```
3. Install the PHP dependencies using Composer:
   ```bash
   composer install
   ```
4. Install the JavaScript dependencies using npm:
   ```bash
   npm install
   ```
5. Create a copy of the `.env.example` file and rename it to `.env`. Update the environment variables as needed.
6. Generate the application key:
   ```bash
   php artisan key:generate
   ```
7. Run the database migrations:
   ```bash
   php artisan migrate
   ```
8. Seed the database with sample data (optional):
   ```bash
   php artisan db:seed
   ```
9. Start the development server:
   ```bash
   php artisan serve
   ```
10. Open your browser and navigate to `http://localhost:8000` to access the application.
