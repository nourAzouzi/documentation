---
sidebar_position: 1
---

# Liste des canaux



## Introduction

Cette interface vous permet de visualiser, ajouter, modifier et supprimer des canaux.

![ProviderManager](/img/PM/liste_canaux.png)

## Comment accéder à la liste des canaux ?

**Menu :** Sélectionnez l'onglet "Canaux" dans le menu de navigation latéral gauche.

**Liste des canaux :** Cliquez sur "Liste des canaux" pour accéder à la page contenant la liste complète des canaux.

## Comprendre l'interface

### Boutons et fonctionnalités principales 

**Ajouter un canal :** En haut à gauche de l'écran, vous trouverez un bouton vert intitulé "Ajouter un canal". Cliquez dessus pour ajouter un nouveau canal à la liste.

**Rechercher :** À droite du bouton d'ajout, une barre de recherche vous permet de trouver rapidement un canal spécifique en entrant son nom ou un autre critère pertinent.

### Filtrage et tri

**Critére pour filtrer :** Utilisez les menus déroulants "Fournisseur", "Type de canal", "Statut" et "Configuration de prévente" pour filtrer les canaux selon les fournisseurs associés à chaque canal, son type (Hébergement, Vol, transport), son statut (Activé ou désactivé) et si sa configuration de prévente est paramétré ou non.

### Tableau de la liste des canaux


**Nom du canal :** Cette colonne liste les noms des canaux enregistrés.

**Date de la dernière mise a jour :** Cette colonne liste la dérniere date pendant laquelle ce canal a été mis à jour.

**Statut :** Cette colonne indique si le canal est activé ou désactivé.

**Fournisseur** Cette colonne contient le fournisseur associé à ce canal

**Type du canal :** Cette colonne précise le type de canal (Hébergement, Vol, transport).


**Actions :** La colonne Actions propose plusieurs options :

    - **Visualiser :** Cliquez sur l'icône de l'œil pour voir les détails du canal.
    - **Modifier :** Cliquez sur l'icône du crayon pour éditer les informations du canal.
    - **Supprimer :** Cliquez sur l'icône de la poubelle pour supprimer un canal de la liste.

### Navigation

**Pagination :** Si la liste des canaux est longue, utilisez les contrôles de pagination en bas à droite de l'écran pour naviguer entre les pages.

## Ajouter un nouveau canal

- Cliquez sur le bouton "Ajouter canal".
- Remplissez le formulaire avec les informations requises telles que le nom, ...
- Cliquez sur "Enregistrer" pour ajouter le canal à la liste.
:::tip
Pour un accompagnement pas à pas sur comment ajouter un nouveau canal, veuillez consulter l'article suivant qui détaille chaque étape du processus.
:::

## Voir les détails d'un canal
Une fois que vous avez cliqué sur l'icône, une fenêtre pop-up apparaît avec les détails suivants :

![ProviderManager](/img/PM/résumé_canal.png)

- **Logo du canal :** Affiche le logo ou l'image associée au canal.
- **Nom du canal :** Nom officiel du canal.
- **URL du canal :** Lien vers l'URL du canal.
- **Identifiant :** Identifiant utilisé pour se connecter au canal.
- **Mot de passe :** Mot de passe associé à l'identifiant du canal.
- **Fournisseur :** Nom du fournisseur associé au canal.
- **Devise :** Devise utilisée pour les transactions sur le canal.
- **Type de tarif envoyé au canal :** Indique si les tarifs envoyés au canal incluent ou non des taxes et des commissions.
- **Options disponibles :**
    - Avec taxes
    - Sans taxes
    - Avec commission
    - Sans commission
    
## Modifier un canal existant

- Dans la colonne Actions du canal que vous souhaitez modifier, cliquez sur l'icône du crayon.
- Modifiez les informations nécessaires dans le formulaire qui s'affiche.

![ProviderManager](/img/PM/edit_fournisseur.png)

### Onglet "Informations générales"

- **Sauvegarder :** Le bouton "Sauvegarder" reste désactivé tant qu'aucune modification n'a été apportée aux champs.
Dès qu'un ou plusieurs champs sont modifiés, le bouton "Sauvegarder" devient activé, permettant d'enregistrer les changements.

- **Annuler :** Le bouton "Annuler" reste désactivé tant qu'aucune modification n'a été apportée aux champs.
Dès qu'un ou plusieurs champs sont modifiés, le bouton "Annuler" devient activé.
Si l'utilisateur clique sur le bouton "Annuler" après avoir effectué des modifications, toutes les modifications seront annulées et les champs retourneront à leur état initial avant modification.

### Onglet "Rapprochement"
Pour effectuer des rapprochements de données pour les pays, les villes et les hôtels: Assurez-vous que le canal est déjà configuré avant de commencer.

### Rapprochement des pays 

- Cliquez sur le bouton "Rapprochement automatique" pour effectuer un rapprochement automatique de tous les pays.
- Une liste de pays sera générée: Vous verrez une liste complète des pays disponibles après le rapprochement automatique.

![ProviderManager](/img/PM/rapp_pays.png)

- Pour chaque pays dans la liste, les informations suivantes sont affichées :
    - ID
    - Nom original
    - Nom rapproché (si déjà rapproché)
    - Statut
    - Score de certitude
    - Date de création
    - Actions (modifier = effectuer un rapprochement manuel, supprimer)
- Rapprochement Manuel:

    - Cliquez sur "Modifier" à côté du pays pour lequel vous souhaitez effectuer un rapprochement manuel.
    - Mettez à jour les informations nécessaires et enregistrez les modifications.
:::tip Filtrage des Données
Utilisez les filtres pour trier les pays selon des critères spécifiques, comme le statut.
:::

:::tip Recherche
Utilisez le champ de recherche pour trouver rapidement un pays spécifique.
:::

### Rapprochement des villes 
- Cliquez sur le bouton "Rapprochement automatique" pour effectuer un rapprochement automatique de tous les villes.
- Une liste de villes sera générée: Vous verrez une liste complète des villes disponibles après le rapprochement automatique.

![ProviderManager](/img/PM/rapp_villes.png)

- Pour chaque ville dans la liste, les informations suivantes sont affichées :
    - Nom original
    - Nom rapproché (si déjà rapproché)
    - Statut (Rapproché ou Non rapproché)
    - Certitude (score de certitude du rapprochement)
    - Date de création
    - Actions :
        - Modifier : pour effectuer un rapprochement manuel si nécessaire.
        - Supprimer : pour supprimer un rapprochement de la liste.

:::tip Filtrage des Données
Utilisez les filtres pour trier les villes selon des critères spécifiques, comme le pays ou le statut de rapprochement.
:::

:::tip Recherche 
Utilisez le champ de recherche pour trouver rapidement une ville spécifique.
:::

### Rapprochement des hôtels 
- Cliquez sur le bouton "Rapprochement automatique" pour effectuer un rapprochement automatique de tous les hôtels disponibles dans la base de données.
- Une liste complète des hôtels disponibles après le rapprochement automatique sera générée.

![ProviderManager](/img/PM/rapp_hotel.png)

- Pour chaque hôtel dans la liste, les informations suivantes sont affichées: 
    - Nom original
    - Nom rapproché (si déjà rapproché)
    - Statut (Rapproché ou Non rapproché)
    - Certitude (score de certitude du rapprochement)
    - Date de création
    - Actions :
        - Modifier : pour effectuer un rapprochement manuel si nécessaire.
        - Supprimer : pour supprimer un rapprochement de la liste.

:::tip Filtrage des Données
Utilisez les filtres pour trier les hôtels selon des critères spécifiques, comme le statut de rapprochement ou le score de certitude.
:::

:::tip Recherche 
Utilisez le champ de recherche pour trouver rapidement un hôtel spécifique.
:::


### Onglet "Configuration de prévente"

![ProviderManager](/img/PM/config-pré-vente.png)

**Module de canal et Périodes**

- Module de canal : Choisissez un ou plusieurs modules auxquels ces configurations seront envoyées.

- Ajouter une période : Cliquez sur "Ajouter période" pour définir une nouvelle période de prévente pour cette configuration.

    - Dates : Sélectionnez les dates de début et de fin de la période.

- Jours de la semaine : Choisissez les jours de la semaine auxquels cette configuration s'applique en cochant les cases appropriées.

**Configuration Globale**

- Application de la configuration : Les configurations définies s'appliquent à tous les hôtels de la liste, sauf indication contraire.
- Marge et Taux : Définissez les valeurs de marge et de taux.
    - Marge : Entrez un pourcentage pour la marge.
    - Taux : Entrez un pourcentage pour le taux.
- Règles d'inventaire :
    - État : Sélectionnez l'état de l'inventaire.
    - Plafond : Entrez une valeur de plafond.
- Règles de restriction :
    - Séjour minimum : Entrez le nombre de jours minimum pour le séjour.
    - Séjour maximum : Entrez le nombre de jours maximum pour le séjour.
- Commission :
    - Marge : Entrez un pourcentage pour la marge de commission.
    - Taux : Entrez un pourcentage pour le taux de commission.

**Liste des Hôtels**
- Recherche : Utilisez le champ de recherche pour trouver un hôtel spécifique.
- Configurations individuelles : Chaque hôtel peut avoir des configurations spécifiques qui diffèrent des configurations globales.
        - Marge et Taux : Définissez des valeurs spécifiques pour la marge et le taux pour chaque hôtel.
        - Règles d'inventaire :
            - État : Sélectionnez l'état de l'inventaire pour chaque hôtel.
            - Plafond : Entrez une valeur de plafond spécifique pour chaque hôtel.
        - Règles de restriction :
            - Séjour minimum : Entrez le nombre de jours minimum pour le séjour.
            - Séjour maximum : Entrez le nombre de jours maximum pour le séjour.
        - Commission :
            - Marge : Entrez un pourcentage pour la marge de commission.
            - Taux : Entrez un pourcentage pour le taux de commission.

**Actions**
- Sauvegarder : Cliquez sur "Sauvegarder" pour enregistrer toutes les modifications apportées.
- Annuler : Cliquez sur "Annuler" pour annuler les modifications et revenir aux paramètres précédents.
- Activer/Désactiver : Utilisez les interrupteurs pour activer ou désactiver les configurations pour des hôtels spécifiques.

**Utilisation de la Pagination**
- Nombre de Pages : En bas de la liste des hôtels, vous verrez le nombre de pages disponibles. Par exemple, "Page 1 de 167".
- Navigation entre les Pages : Utilisez les flèches de navigation pour passer d'une page à l'autre. Les flèches "suivant" et "précédent" vous permettent de parcourir les pages séquentiellement.
- Accès Direct : Cliquez sur un numéro de page spécifique pour accéder directement à cette page.
## Supprimer un canal

- Dans la colonne Actions du canal que vous souhaitez supprimer, cliquez sur l'icône de la poubelle.
- Confirmez la suppression dans la fenêtre pop-up qui apparaît.