# EasyFrisch
Timm Schimmel, Samanta Szczurowska


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



- [1. Spezifikation und Design](#1-spezifikation-und-design)
  - [1.1. Projektziele](#11-projektziele)
  - [1.2. Design](#11-design)
    - [1.2.1. Style Tile](#121-style-tile)
    - [1.2.2. Mockups](#122-mockups)
  - [1.3. Personas](#13-personas)
  - [1.4. Kontext Diagramm](#14-kontext-diagramm)
  - [1.5. Aktoren](#15-aktoren)
  - [1.6. Use Cases](#16-use-cases)
    - [**UC CRUD**](#uc-crud)
    - [**UC Info**](#uc-info)
    - [**UC Transaction**](#uc-transaction)
    - [**UC Search**](#uc-search)
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

| Besucher | Kunde | Administrator| 
|----------|----------|----------|
| Kann sich die Homepage anschauen, sich über die Bäckerei/das Team sowie über das Angebot informieren. Zudem kann er ein Account erstellen. | Ist ein registrirter Benutzer, der sich die Produkte nicht nur anschauen kann, sondern auch bestellen. Außerdem kann er eine Bestellung aufgeben, sich sie anschauen und stornieren. Außerdem hat er die Möglichkeit, sein Account/seine Daten zu bearbeiten. | Ist ein Mitarbeiter der Bäckerei, der für die Verwaltung des Sortiments verantwortlich ist (neue Produkte hinzufügen und bestehende Produkte bearbeiten, löschen oder sich anzeigen lassen). |



### 1.6. Use Cases

![](/assets/images/useCaseDiagram.png)

#### **UC CRUD**

| UC Name | Sortiment bearbeiten |
| --- | --- |
| Beschreibung | Neue Produkte können zum Sortiment hinzugefügt werden und bestehende Produkte entfernt oder bearbeitet werden. |
| Aktor(en) | Administrator |

| UC Name | Benutzer bearbeiten |
| --- | --- |
| Beschreibung | Daten der Benutzer können bearbeitet und/oder gelöscht werden. |
| Aktor(en) | Administrator, Kunde |



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


#### **UC Transaction**

| UC Name | Bestellung aufgeben |
| --- | --- |
| Beschreibung | Nachdem der Kunde die Produkte ausgesucht hat, kann er die Bestellung realisieren. |
| Aktor(en) | Kunde |

| UC Name | Bestellung stornieren |
| --- | --- |
| Beschreibung | Falls sich der Kunde anders überlegt hat, kann er seine Bestellung wieder stornieren. |
| Aktor(en) | Kunde |


#### **UC Search**

| UC Name | Produkt suchen |
| --- | --- |
| Beschreibung | Der Administrator, der (registrierte) Kunde und der Besucher können sich durch Filtern über ausgewählte Produkte informieren. |
| Aktor(en) | Administrator, Kunde, Besucher |


## 2. Implementierung


## 3. Bereitstellung

[easyfrisch.onrender.com](https://easyfrisch.onrender.com)

**Admin:**

Email: admin@easyfrisch.com     
Passwort: *****


**User:**

Email:     
Passwort: *****


## 4. Optimierung

Beschreibung der Optimierungsmaßnahmen.



