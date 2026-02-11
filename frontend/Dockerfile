# -----------------------------
# Étape 1 : Build Angular
# -----------------------------
FROM node:20-alpine AS build

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code source
COPY . .

# Build Angular en production (utilise environment.prod.ts)
RUN npm run build:prod

# -----------------------------
# Étape 2 : Serve avec NGINX
# -----------------------------
FROM nginx:alpine

# Supprimer le contenu par défaut de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copier le build Angular depuis l'étape 1
COPY --from=build /app/dist/todo-frontend /usr/share/nginx/html

# Copier la configuration NGINX custom pour SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer NGINX en avant-plan
CMD ["nginx", "-g", "daemon off;"]
