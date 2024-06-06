---
sidebar_position: 2
---

# Ajouter un canal 

## Introduction 

L'onglet "Informations générales" permet de saisir les détails essentiels pour l'ajout d'un nouveau canal. Cette section couvre toutes les informations de base nécessaires pour configurer le canal.

![ProviderManager](/img/PM/ajout_canal.png)

## Accès à l'interface

**Menu :** Sélectionnez l'onglet "Canaux" dans le menu de navigation latéral gauche.

**Ajouter un canal :** Cliquez sur "Ajouter un canal" pour accéder au formulaire d'ajout d'un nouveau canal.

**Onglet Informations générales :** Par défaut, vous serez dirigé vers l'onglet "Informations générales" lorsque vous accédez au formulaire d'ajout de canal.

## Détails du formulaire
### Champs à remplir
**image :** (Champ obligatoire) insérez une image du canal.

**Nom du canal :** (Champ obligatoire) Entrez le nom du canal. Ce champ identifie le canal dans le système.

**URL du canal :** (Champ obligatoire) Entrez l'URL associée au canal.

**Modèle de canal :** (Champ obligatoire) Sélectionnez le modèle de canal dans le menu déroulant. Vous devez choisir le modèle du canal que vous souhaitez ; les produits seront au format de ce modèle.

**Fournisseur :** (Champ obligatoire) Sélectionnez le fournisseur associé à ce canal dans le menu déroulant.

**Paiement :** (Champ obligatoire) Sélectionnez le type de paiement pour ce canal : Prépayé, Mensuel ou Temps réel.Si le mode de paiement "Temps réel" est sélectionné, un champ supplémentaire apparaît pour sélectionner la carte de paiement.

    - **Carte de paiement :** (Champ obligatoire si le mode de paiement est "Temps réel") Choisissez la carte avec laquelle les paiements seront effectués.

**Type :** (Champ obligatoire) Choisissez le type de canal : Hébergement, Vol, Transport, etc.

**User ID :** (Champ obligatoire) Entrez l'ID utilisateur attribué à ce canal.

**Mot de passe :** (Champ obligatoire) Saisissez le mot de passe requis pour l'accès à l'API ce canal.

**Identifiant :** (Champ obligatoire) Saisissez l'identifiant spécifique pour ce canal.

**Devise :** (Champ obligatoire) Indiquez la devise utilisée pour les transactions sur ce canal.

**Temps limites :** Sélectionnez si le canal est soumis à des limites de temps. Options : Avec limites, Sans limites.

    - **Limites :** (Champ obligatoire) si "Avec limites" est sélectionné Indiquez la limite de temps en secondes applicables pour ce canal.

**Taxe :** (Champ obligatoire) si "Sans taxes" est sélectionné Indiquez le pourcentage ou la valeur fixe de taxe applicable.

**Type de tarif envoyé au canal :** Sélectionnez si les tarifs incluent des taxes ou sont sans taxes.

## Boutons et Actions

**Test de connexion :** Utilisez ce bouton pour tester la connexion au modéle selectionné 

**Annuler :** Cliquez sur ce bouton pour annuler toutes les modifications et revenir à l'état initial.

**Sauvegarder :** Ce bouton reste désactivé tant que toutes les informations obligatoires ne sont pas saisies correctement. Une fois tous les champs requis remplis, le bouton s'active, permettant d'enregistrer les informations du nouveau canal.

:::tip PASSAGE aux autres onglets "Rapprochement" et "Configuration de prévente"
Vous ne pouvez accéder à l'onglet "Rapprochement" et "Configuration de prévente" qu'après avoir ajouté le fournisseur avec succès. Assurez-vous de remplir toutes les informations requises et de cliquer sur "Sauvegarder". Une fois le fournisseur ajouté, vous pourrez naviguer vers l'onglet "Portefeuille" pour ajouter des informations supplémentaires sur les services ou produits offerts par le fournisseur.
:::