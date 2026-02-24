#!/bin/bash

set -e

echo "-------------------- Delete existing Minikube (optional clean start) --------------------"
minikube delete || true

echo "-------------------- Starting Minikube --------------------"
minikube start

echo "-------------------- Creating argocd namespace --------------------"
kubectl create namespace argocd || true

echo "-------------------- Installing ArgoCD (fixed version) --------------------"
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.11.7/manifests/install.yaml

echo "-------------------- Waiting for ArgoCD server to be ready --------------------"
kubectl wait --for=condition=available deployment/argocd-server -n argocd --timeout=300s

echo "-------------------- Waiting for ArgoCD repo-server --------------------"
kubectl wait --for=condition=available deployment/argocd-repo-server -n argocd --timeout=300s

echo "-------------------- Waiting for ArgoCD application-controller --------------------"
kubectl wait --for=condition=ready pod -l app.kubernetes.io/name=argocd-application-controller -n argocd --timeout=300s

echo "-------------------- ArgoCD Credentials --------------------"
echo "Username: admin"
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d > argo-pass.txt
echo ""

echo "-------------------- Starting Port Forward --------------------"
echo "Open your browser at: https://localhost:8080"
echo "Press CTRL+C to stop port-forward"

kubectl port-forward svc/argocd-server -n argocd 9090:443