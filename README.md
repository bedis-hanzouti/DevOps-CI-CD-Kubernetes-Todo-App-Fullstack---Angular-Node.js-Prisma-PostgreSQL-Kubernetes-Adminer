🚀 Todo App Fullstack
Angular + Node.js + Prisma+ PostgreSQL + Kubernetes + Adminer +Github Actions


Une application Todo App Fullstack cloud-native déployée sur Kubernetes, avec architecture scalable et bonnes pratiques DevOps.

📌 Table des matières

1️⃣ Description

2️⃣ Stack Technique

3️⃣ Architecture

4️⃣ Structure du projet

5️⃣ Endpoints API

6️⃣ Déploiement Kubernetes

7️⃣ Scaling & Monitoring

8️⃣ Sécurité & Bonnes pratiques

9️⃣ Accès aux services

1️⃣ Description

Cette application est une Todo App fullstack composée de :

🎨 Frontend : Angular (build production)

⚙️ Backend : Node.js + Express + Prisma

🗄 Base de données : PostgreSQL

🛠 Adminer : Interface web pour gérer la DB

☸️ Déploiement : Kubernetes (Minikube ou cluster cloud)

🌐 Exposition : NGINX Ingress

📈 Scaling : HPA (Horizontal Pod Autoscaler)

2️⃣ Stack Technique
Layer	Technologie
Frontend	Angular
Backend	Node.js + Express
ORM	Prisma
Database	PostgreSQL
Container	Docker
Orchestration	Kubernetes
Ingress	NGINX Ingress
DB Admin	Adminer
3️⃣ Architecture
              ┌─────────────────────────────┐
              │         NGINX Ingress       │
              │  badis.frontend.io /        │
              │  badis.backend.io /         │
              │  badis.adminer.io           │
              └────────────┬───────────────┘
                           │
           ┌───────────────┴───────────────┐
           │                               │
   ┌───────▼───────┐               ┌───────▼───────┐
   │   Frontend     │               │   Backend     │
   │  Angular / 80  │               │  Node.js 3000 │
   └───────┬───────┘               └───────┬───────┘
           │                               │
           │                      ┌────────▼────────┐
           │                      │ PostgreSQL 5432 │
           │                      └────────┬────────┘
           │                               │
           │                      ┌────────▼────────┐
           │                      │     Adminer      │
           │                      │ 80 /badis.adminer│
           │                      └─────────────────┘
           │
           │ Health check (/health)
           │ API endpoints (/api/todos)

4️⃣ Structure du projet
todo-app-complete/
├── frontend/                
├── backend/                 
├── k8s/                     
├── .gitignore
└── README.md

📂 Détails

frontend/ → Application Angular

backend/ → API REST Node.js + Prisma

k8s/ → Manifests Kubernetes (Deployments, Services, Ingress, HPA, PVC)

postgres/ → Base de données avec volume persistant

5️⃣ Endpoints API

Base URL :

http://badis.backend.io/api/todos

🔹 GET all todos
GET /api/todos

🔹 Create todo
POST /api/todos

🔹 Delete todo
DELETE /api/todos/:id

🔹 Health check
GET /health