#!/bin/sh
set -e

echo "🔹 Génération Prisma Client..."
npx prisma generate

echo "🔹 Application des migrations..."
npx prisma migrate deploy

echo "🔹 Lancement de l'application..."
exec npm run dev
