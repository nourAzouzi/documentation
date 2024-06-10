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
:::tip 
Pour un accompagnement pas à pas sur comment ajouter un nouveau fournisseur, veuillez consulter l'article suivant qui détaille chaque étape du processus.
:::
## Voir détails fournisseur
Une fois que vous avez cliqué sur l'icône d'œil, une fenêtre pop-up apparaît avec les détails suivants :
![ProviderManager](/img/PM/résumé_fournisseur.png)
- **Nom du fournisseur :** Nom officiel de l'entreprise.
- **Type :** Si le fournisseur est une Société ou un Individu privé.
- **Emplacement :** Si le fournisseur est Local ou Étranger.
- **Site web :** Lien vers le site web du fournisseur.
- **Email :** Adresse email pour contacter le fournisseur.
- **Téléphone mobile :** Numéro de contact principal.
- **Adresse :** Adresse physique complète du fournisseur.
- **Type d'activité :** Nature de l'activité du fournisseur.
- **Forme juridique :** Statut juridique de l'entreprise (par exemple, SARL, SA).
- **Matricule fiscale :** Numéro d'identification fiscale de l'entreprise.
- **Registre commercial :** Numéro d'enregistrement au registre du commerce.

:::tip 
Pour fermer le résumé, cliquez sur l'icône de fermeture (X) située dans le coin supérieur droit de la fenêtre pop-up.
:::

## Modifier un fournisseur existant

- Dans la colonne Actions du fournisseur que vous souhaitez modifier, cliquez sur l'icône du crayon.
- Modifiez les informations nécessaires dans le formulaire qui s'affiche :

![ProviderManager](/img/PM/edit_fournisseur.png)

### Onglet "Profil"

- **Sauvegarder :** Le bouton "Sauvegarder" reste désactivé tant qu'aucune modification n'a été apportée aux champs.
Dès qu'un ou plusieurs champs sont modifiés, le bouton "Sauvegarder" devient activé, permettant d'enregistrer les changements.

- **Annuler :** Le bouton "Annuler" reste désactivé tant qu'aucune modification n'a été apportée aux champs.
Dès qu'un ou plusieurs champs sont modifiés, le bouton "Annuler" devient activé.
Si l'utilisateur clique sur le bouton "Annuler" après avoir effectué des modifications, toutes les modifications seront annulées et les champs retourneront à leur état initial avant modification.

### Onglet "Portfeuille"

Section actuelle où vous pouvez gérer vos transactions et consulter votre solde.

![ProviderManager](/img/PM/wallet.png)

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
    - **Devise :** Devise utilisée pour la transaction.
    - **Date :** Date de la transaction.

**Total des transactions :** Le montant total de toutes les transactions affichées est indiqué en haut à droite de la liste des transactions.

:::tip
À partir de la liste des transactions, chaque transaction est cliquable et l'utilisateur sera redirigé vers la page de détail de cette transaction
:::

Les informations suivantes seront affichées :

- Détails de la Transaction
    - Nom du bénéficiaire : Le nom de la personne ou de l'entité qui recevra l'argent.
    - Montant : Le montant de la transaction.
    - Devise : La devise utilisée pour la transaction.
    - Modes de Paiement
        - Mode de paiement : Espèces
            - Nom du bénéficiaire : Le nom de la personne ou de l'entité qui recevra l'argent.
            - Montant : Le montant de la transaction.
            - Devise : La devise utilisée pour la transaction.
        - Mode de paiement : Chèque
            - Nom du bénéficiaire : Le nom de la personne ou de l'entité qui recevra l'argent.
            - Numéro de compte : Le numéro de compte bancaire du bénéficiaire.
            - Date d'émission du chèque : La date à laquelle le chèque a été émis.
            - Montant : Le montant du chèque.
            - Devise : La devise utilisée pour la transaction.
            - Nom de la banque : Le nom de la banque émettrice du chèque.
            - Une justificative : Une justificative du chèque (ex : image du chèque).
        - Mode de paiement : Transfert
            - Nom du bénéficiaire : Le nom de la personne ou de l'entité qui recevra l'argent.
            - Montant : Le montant de la transaction.
            - Devise : La devise utilisée pour la transaction.
            - Numéro de compte : Le numéro de compte bancaire du bénéficiaire.
            - Nom de la banque : Le nom de la banque du bénéficiaire.
            - Code BIC : Le code BIC (Bank Identifier Code) de la banque du bénéficiaire.
            - IBAN : Le numéro IBAN (International Bank Account Number) du bénéficiaire.
            - Une justificative : Une justificative du transfert (ex : reçu de virement).



**Pagination :** Vous pouvez naviguer entre les pages des transactions en utilisant les boutons de pagination situés en bas à droite de la liste des transactions.

**Ajouter une transaction :** 
- Utilisez le bouton "+ Ajouter" pour enregistrer une nouvelle transaction dans votre portefeuille.

![ProviderManager](/img/PM/ajouter_transaction.png)

- Choisissez le mode de paiement : Espèces, Chèque ou Transfert.

**Détails demandés pour chaque mode de paiement :**

#### Mode de paiement : **Espèces**

![ProviderManager](/img/PM/ajout_trans_especes.png)

        - Nom du bénéficiaire : Indiquez le nom de la personne ou de l'entité qui recevra l'argent.
        - Montant : Saisissez le montant de la transaction.
        - Devise : Sélectionnez la devise utilisée pour la transaction.


#### Mode de paiement : **Chèque**

![ProviderManager](/img/PM/ajout_trans_cheque.png)

    - Nom du bénéficiaire : Indiquez le nom de la personne ou de l'entité qui recevra l'argent.
    - Numéro de compte : Indiquez le numéro de compte bancaire du bénéficiaire.
    - Date d'émission du chèque : Sélectionnez la date à laquelle le chèque a été émis.
    - Montant : Saisissez le montant du chèque.
    - Devise : Sélectionnez la devise utilisée pour la transaction.
    - Nom de la banque : Indiquez le nom de la banque émettrice du chèque.
    - Importer une justificative : Ajoutez une justificative du chèque (ex : image du chèque).

#### Mode de paiement : **Transfert**

![ProviderManager](/img/PM/ajout_trans_transfert.png)

    - Nom du bénéficiaire : Indiquez le nom de la personne ou de l'entité qui recevra l'argent.
    - Montant : Saisissez le montant de la transaction.
    - Devise : Sélectionnez la devise utilisée pour la transaction.
    - Numéro de compte : Indiquez le numéro de compte bancaire du bénéficiaire.
    - Nom de la banque : Indiquez le nom de la banque du bénéficiaire.
    - Code BIC : Indiquez le code BIC (Bank Identifier Code) de la banque du bénéficiaire.
    - IBAN : Indiquez le numéro IBAN (International Bank Account Number) du bénéficiaire.
    - Importer une justificative : Ajoutez une justificative du transfert (ex : reçu de virement).


## Supprimer un fournisseur

- Dans la colonne Actions du fournisseur que vous souhaitez supprimer, cliquez sur l'icône de la poubelle.
- Confirmez la suppression dans la fenêtre pop-up qui apparaît.

:::danger 
Il est impossible de supprimer un fournisseur qui est lié à un ou plusieurs canaux.
:::