#!/bin/sh
set -e

# S'assure que le fichier SQLite existe et a les bons droits
mkdir -p /var/www/html/database
touch /var/www/html/database/database.sqlite
chown -R www-data:www-data /var/www/html/database
chmod 664 /var/www/html/database/database.sqlite

# Génère la clé d'app si besoin (ne fait rien si APP_KEY est déjà défini)
php artisan key:generate --force || true

# Lance les migrations (crée les tables, dont "contacts")
php artisan migrate --force

# Cache la config pour la prod (optionnel mais recommandé)
php artisan config:cache || true
php artisan route:cache || true

exec "$@"