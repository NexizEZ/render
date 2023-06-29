# EasyFrisch
Timm Schimmel, Samanta Szczurowska

------------------------------------------------------------------------------

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Apr 06 2023 12:42:05 GMT+0200 (Central European Summer Time) using Sails v1.5.4.


<!-- Internally, Sails used [`sails-generate@2.0.7`](https://github.com/balderdashy/sails-generate/tree/v2.0.7/lib/core-generators/new). -->


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

-----------------------------------------------------------------------------

- [EasyFrisch](#easyfrisch)
    - [Links](#links)
    - [Version info](#version-info)
  - [1. Spezifikation und Design](#1-spezifikation-und-design)
    - [1.1. Projektziele](#11-projektziele)
    - [1.2. Design](#12-design)
      - [1.2.1. Style Tile](#121-style-tile)
      - [1.2.2. Mockups](#122-mockups)
    - [1.3. Personas](#13-personas)
    - [1.4. Kontext Diagramm](#14-kontext-diagramm)
    - [1.5. Aktoren](#15-aktoren)
    - [1.6. Use Cases](#16-use-cases)
      - [**UC Info**](#uc-info)
      - [**UC Search**](#uc-search)
      - [**UC Transaction**](#uc-transaction)
      - [**UC CRUD**](#uc-crud)
  - [2. Implementierung](#2-implementierung)
  - [3. Bereitstellung](#3-bereitstellung)
  - [4. Optimierung](#4-optimierung)



## 1. Spezifikation und Design

### 1.1. Projektziele

+ Arbeitsbelastung reduzieren und Prozesse vereinfachen durch automatisierte Auftragsabwicklung.

+ Effizienzsteigerung durch automatisierte Bestellabwicklung und Lieferung.

+ Verkaufs- und Umsatzsteigerung durch Online-Bestellungen und Lieferungen.

+ Erhöhung der Kundenzufriedenheit durch eine benutzerfreundliche Oberfläche.

+ Verbesserte Wettbewerbsfähigkeit durch die Einführung einer Applikation.


### 1.2. Design

#### 1.2.1. Style Tile

![](/assets/images/styletile.png)


#### 1.2.2. Mockups

![](/assets/images/mobile.png)

![](/assets/images/desktopHome.png)


### 1.3. Personas

![](/assets/images/viola.png)

![](/assets/images/max.png)

![](/assets/images/alexander.png)


### 1.4. Kontext Diagramm

![](/assets/images/contextDiagram.png)


### 1.5. Aktoren

| Besucher | Kunde | Administrator/Miarbeiter | 
|----------|----------|----------|
| Kann sich die Homepage anschauen, sich über die Bäckerei/das Team sowie über das Angebot informieren. Zudem kann er ein Account erstellen. | Ist ein registrirter Benutzer, der sich die Produkte nicht nur anschauen kann, sondern auch bestellen. Außerdem kann er eine Bestellung aufgeben, sich sie anschauen und stornieren. Außerdem hat er die Möglichkeit, sein Account/seine Daten zu bearbeiten. | Ist ein Mitarbeiter der Bäckerei, der für die Verwaltung des Sortiments verantwortlich ist (neue Produkte hinzufügen und bestehende Produkte bearbeiten, löschen oder sich anzeigen lassen). Er kann auch die Bestellungen der Kunden einsehen und sie stornieren/löschen. |



### 1.6. Use Cases

![](/assets/images/useCaseDiagram.jpg)


#### **UC Info**

| UC Name | Homepage aufrufen |
| --- | --- |
| Beschreibung | Kunde/Besucher können die Homepage aufrufen, um das Unternehmen kennenzulernen und grob von seinen Dienstleistungen zu erfahren. Administrator/Mitarbeiter können die Seite aufrufen, um sie zu verwalten. |
| Aktor(en) | Administrator, Kunde, Besucher |

| UC Name | Sortiment anschauen |
| --- | --- |
| Beschreibung | Der (registrierte) Kunde und der Benutzer können sich das Sortiment anschauen, ohne sich davor anmelden zu müssen. |
| Aktor(en) | Kunde, Besucher |

| UC Name | Bestellung aufrufen |
| --- | --- |
| Beschreibung | Ein Kunde kann abgleichen, was er bestellt hat, und dazu wird ihm die Verwaltungsmöglichkeiten der Bestellung zur Verfügung gestellt. |
| Aktor(en) | Administrator, Kunde |



#### **UC Search**

| UC Name | Produkt suchen |
| --- | --- |
| Beschreibung | Der Administrator, der (registrierte) Kunde und der Besucher können sich durch Filtern über ausgewählte Produkte informieren. |
| Aktor(en) | Administrator, Kunde, Besucher |



#### **UC Transaction**

| UC Name | Bestellung aufgeben |
| --- | --- |
| Beschreibung | Nachdem der Kunde die Produkte ausgesucht hat, kann er die Bestellung realisieren. |
| Aktor(en) | Kunde |

| UC Name | Bestellung stornieren |
| --- | --- |
| Beschreibung | Falls sich der Kunde anders überlegt hat, kann er seine Bestellung wieder stornieren. |
| Aktor(en) | Kunde |



#### **UC CRUD**

| UC Name | Sortiment bearbeiten |
| --- | --- |
| Beschreibung | Neue Produkte können zum Sortiment hinzugefügt werden und bestehende Produkte entfernt oder bearbeitet werden. |
| Aktor(en) | Administrator |

| UC Name | Benutzer bearbeiten |
| --- | --- |
| Beschreibung | Daten der Benutzer können bearbeitet und/oder gelöscht werden. |
| Aktor(en) | Administrator, Kunde |





## 2. Implementierung

Generell werden alle Use Cases mit Hilfe von HTML und CSS gestaltet. HTML wird verwendet, um die Struktur und den Inhalt der Benutzeroberfläche zu definieren, während CSS verwendet wird, um das Erscheinungsbild anzupassen und das Benutzererlebnis zu verbessern. Dabei hat uns das Bootstrap-Framework ebenfalls sehr geholfen.

Die Funktionalität der Use Cases unserer Web-Applikation wurde hingegen größtenteils durch den Einsatz von Controllern realisiert. Controller sind Komponenten, die für die Verarbeitung von Benutzeranfragen zuständig sind und die Logik zur Steuerung des Datenflusses zwischen Modellen und Ansichten enthalten. Zusätzlich wurden Endpunkte verwendet, um URLs bereitzustellen, die für den Zugriff auf Ressourcen und die Ausführung von Operationen verantwortlich sind. Dies hat uns ermöglicht, die Verwaltung von Ressourcen in der Webanwendung zu erleichtern.

Um die Verwaltung und Verarbeitung der Daten zu ermöglichen und die Web-Applikation interaktiver zu gestalten, wurde die Webanwendung mit einer MySQL-Datenbank verbunden. Dadurch konnten wir die Funktionalität der Web-Applikation erweitern und eine verbesserte Benutzererfahrung bieten.

-----------------------------------------------------------------------------

**UC SEARCH**

Funktionlität:
+ Die Suche ist eine Funktion, die es Benutzern ermöglicht, nach bestimmten Inhalten in der Webanwendung zu suchen. Die Suchergebnisse werden in Echtzeit angezeigt und aktualisiert, um den Benutzern relevante Ergebnisse zu liefern.

Die Implementierung des Suchformulars ist einmal in EJS implementiert aber wird auch auf der Shopseite verwendet. Dafür wird das Vue.js-Framework in Kombination mit HTML, CSS und JavaScript, um eine interaktive Benutzeroberfläche zu erstellen. Vue.js bietet Datenbindung und Ereignisbehandlungsfunktionen, um den Zustand des Formulars zu verfolgen und auf Benutzerinteraktionen zu reagieren. JavaScript wird verwendet, um API-Anfragen zu senden und die Ergebnisse zu verarbeiten.

**Implementierung:**

EJS:
Die Implementierung des Such-Filters in EJS ist über die Route **/item** zu finden, im File: 
 **/pages/item/index.ejs**

Vue:
Die Implementierung des Such-Filters in VUE ist über die Route **/order** zu finden.
Wir verwenden hier einen VUE Router, welcher in 

**views/pages/basket/basket.ejs** 

initialisiert wird.

Die Implementierung perse des Filters findet man in der Komponente:

**assets/vue/item.js**

---------------------------------------------------------------------------


**UC TRANSACTION**

Funktionalität:
+ Bestellung aufgeben & stornieren

Um den Use Case zu implementieren, haben wir Vue Router, Vue-Komponenten sowie Datenmodelle und Datenbankbeziehungen genutzt. Der Bestellvorgang wird durch verschiedene Ansichten und Interaktionen mit den Datenmodellen umgesetzt. Zur Kommunikation mit dem Server und zum Abrufen bzw. Speichern von Bestell- und Artikelinformationen verwenden wir eine REST-API (Endpunkte).

Vue Router ermöglicht es uns, die verschiedenen Schritte des Bestellvorgangs in separate Ansichten zu organisieren und die Navigation zwischen ihnen zu verwalten. Die Vue-Komponenten dienen dazu, die Benutzeroberfläche für jeden Schritt der Bestellung zu definieren und die Logik der Datenverarbeitung zu implementieren.

**Implementierung:**

Die Bestellung wird über einen VUE-Router verwirklicht, welcher über die Route /order zu erreichen ist.
Der Router verwendet die Komponenten aus: **assets/vue**


Die Stonierung ist in zwei EJS Komponenten möglich.

Als Kunde findet man die Stonierungsoption über die eigene Account-Overiew. 
Diese findet man in der Datei: 

**views/pages/account/account-overview.ejs**  mit der Vue-Komponente:  **assets/vue/orders.js** verwendet.


Als Mitarbeiter hat man die Option alle Bestellungen einzusehen.

Diese findet man unter:

**views/pages/account/order-overview.ejs**  mit der Vue-Komponente:  **assets/vue/ordersAll.js**

--------------------------------------------------------------------------

**UC CRUD**

Funktionalität:
+ Sortiment bearbeiten 
+ Benutzerdaten bearbeiten (Password ändern, persönliche Benutzerinformationen bearbeiten)

Der Use Case verwendet JavaScript (Vue.js) für die Interaktivität und dynamische Aktualisierung der Webseite. Vue.js-Komponenten werden eingesetzt, um bestimmte Funktionen zu bündeln und die Wiederverwendbarkeit zu verbessern.

Auf der serverseitigen Seite kommt Node.js (Sails.js) zum Einsatz. Sails.js ist ein MVC-Framework für Node.js und ermöglicht die Verarbeitung von serverseitiger Logik und Datenbankoperationen.

Für das Hochladen und Speichern von Bildern wird jedoch S3 (Amazon Simple Storage Service) genutzt. S3 ist ein Cloud-Speicherdienst von Amazon Web Services (AWS).


**Implementierung:** 

Das Sortiment kann nur von einem Mitarbeiter bearbeitet werden.

Diese findet man auf der Route:

**/item** in der Datei **views/pages/item/index.ejs**

Unter -> weitere Optionen kann man hier die Produkte löschen oder individuel bearbeiten.

Der Benutzer kann seine Daten unter der Route:

**/account** in der Datei: **views/pages/account/account-overview.ejs**

bearbeiten.






---------------------------------------------------------------------------


## 3. Bereitstellung

[easyfrisch.onrender.com](https://easyfrisch.onrender.com)

**Admin/Mitarbeiter:** 

Email: admin@easyfrisch.com     
Passwort: admin


**Kunde:**

Email: max.mustermann@gmx.com  
Passwort: Mu$terMann1


**Besucher:**

Besucher hat keinen Account.


## 4. Optimierung

![](/assets/images/lighthouseReport.png)

Um die Web-Applikation zu beschleunigen und die Performance zu verbessern, wurden die Fotos von PNG/JPG in das optimierte WEBP-Format konvertiert. Durch diese Umformatierung werden die Daten schneller übertragen, was zu einer insgesamt schnelleren Ladezeit der Web-Applikation führt.

Darüber hinaus wurde der Code optimiert und nicht verwendete Teile entfernt. Durch diese Optimierungen wird der Code effizienter, was zu einer verbesserten Leistung der Web-Applikation führt.