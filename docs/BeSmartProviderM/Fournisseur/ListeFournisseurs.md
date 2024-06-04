---
sidebar_position: 1
---


# Liste des fournisseurs

## Introduction

Cette interface vous permet de visualiser, ajouter, modifier et supprimer des fournisseurs.

![ProviderManager](/img/PM/liste_fournisseur.png)

## Comment accéder à la liste des fournisseurs ?

**Menu :** Sélectionnez l'onglet "Fournisseurs" dans le menu de navigation latéral gauche.

**Liste des fournisseurs :** Cliquez sur "Liste des fournisseurs" pour accéder à la page contenant la liste complète des fournisseurs.

## Comprendre l'interface

### Boutons et fonctionnalités principales 

**Ajouter fournisseur :** En haut à gauche de l'écran, vous trouverez un bouton vert intitulé "Ajouter fournisseur". Cliquez dessus pour ajouter un nouveau fournisseur à la liste.

**Rechercher :** À droite du bouton d'ajout, une barre de recherche vous permet de trouver rapidement un fournisseur spécifique en entrant son nom ou un autre critère pertinent.

### Filtrage et tri

**Type et Emplacement :** Utilisez les menus déroulants "Type" et "Emplacement" pour filtrer les fournisseurs selon leurs types (par exemple, société, freelance, etc.) et leurs emplacements (local, étranger).

### Tableau de la liste des fournisseurs

**Code fournisseur :** Cette colonne affiche un code unique attribué à chaque fournisseur pour une identification facile.

**Nom du fournisseur :** Cette colonne liste les noms des fournisseurs enregistrés.

**Emplacement :** Cette colonne indique si le fournisseur est local ou étranger.

**Type :** Cette colonne précise le type de fournisseur (société, freelance, etc.).

**E-mail :** Cette colonne contient les adresses e-mail des fournisseurs, permettant une communication directe.

**Actions :** La colonne Actions propose plusieurs options :

    - **Visualiser :** Cliquez sur l'icône de l'œil pour voir les détails du fournisseur.
    - **Modifier :** Cliquez sur l'icône du crayon pour éditer les informations du fournisseur.
    - **Supprimer :** Cliquez sur l'icône de la poubelle pour supprimer un fournisseur de la liste.

### Navigation

**Pagination :** Si la liste des fournisseurs est longue, utilisez les contrôles de pagination en bas à droite de l'écran pour naviguer entre les pages.

## Ajouter un nouveau fournisseur

- Cliquez sur le bouton "Ajouter fournisseur".
- Remplissez le formulaire avec les informations requises telles que le nom, l'emplacement, le type et l'adresse e-mail du fournisseur...
- Cliquez sur "Enregistrer" pour ajouter le fournisseur à la liste.

## Modifier un fournisseur existant

- Dans la colonne Actions du fournisseur que vous souhaitez modifier, cliquez sur l'icône du crayon.
- Modifiez les informations nécessaires dans le formulaire qui s'affiche.

![ProviderManager](/img/PM/edit_fournisseur.png)

### Onglet "Profil"

- **Sauvegarder :** Le bouton "Sauvegarder" reste désactivé tant qu'aucune modification n'a été apportée aux champs.
Dès qu'un ou plusieurs champs sont modifiés, le bouton "Sauvegarder" devient activé, permettant d'enregistrer les changements.

- **Annuler :** Le bouton "Annuler" reste désactivé tant qu'aucune modification n'a été apportée aux champs.
Dès qu'un ou plusieurs champs sont modifiés, le bouton "Annuler" devient activé.
Si l'utilisateur clique sur le bouton "Annuler" après avoir effectué des modifications, toutes les modifications seront annulées et les champs retourneront à leur état initial avant modification.

### Onglet "Portfeuille"

Section actuelle où vous pouvez gérer vos transactions et consulter votre solde.

:::danger Enregistrement d'un fournisseur
Avant de pouvoir accéder à la section "Portefeuille", vous devez enregistrer avec succès un fournisseur.
:::

**Filtres et Options :**

    - **Mode de paiement :** Vous pouvez filtrer les transactions par mode de paiement (Virement, Chèque, Espèces, etc.).
    - **Statut :** Filtrez les transactions par statut (Débiteur, Créditeur).

**Liste des Transactions**    

Chaque transaction dans la liste est détaillée par les éléments suivants :

    - **Méthode de paiement :** Indique le type de transaction (Virement, Chèque, Espèces).
    - **Référence :** Numéro de référence unique pour chaque transaction.
    - **Montant :** Montant de la transaction.
    - **Devise :** Devise utilisée pour la transaction (TND).
    - **Date :** Date de la transaction.

**Total des transactions :** Le montant total de toutes les transactions affichées est indiqué en haut à droite de la liste des transactions.

**Pagination :** Vous pouvez naviguer entre les pages des transactions en utilisant les boutons de pagination situés en bas à droite de la liste des transactions.

## Supprimer un fournisseur

- Dans la colonne Actions du fournisseur que vous souhaitez supprimer, cliquez sur l'icône de la poubelle.
- Confirmez la suppression dans la fenêtre pop-up qui apparaît.