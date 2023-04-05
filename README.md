# Enquête voor minor Web Development
De opdracht is om een enquête te ontwikkelen voor de minor Web Development, die gebruikers de mogelijkheid biedt om verschillende antwoorden te selecteren. De enquête moet een overzicht bieden van de voortgang van de gebruiker en aangeven hoeveel vragen er nog moeten worden beantwoord. Daarnaast moet het mogelijk zijn voor de gebruiker om eerdere antwoorden te herzien en indien nodig later verder te gaan waar ze gebleven waren.

![Schermafbeelding 2023-04-06 om 01 26 47](https://user-images.githubusercontent.com/94384526/230233772-034021f0-d568-4cc0-a433-33c5f99828b1.png)

## Inhoudsopgave
- [Progressive enhancement](https://github.com/maxvl3/browser-technologies-2223#progressive-enhancement)
- [Core functionaliteit](https://github.com/maxvl3/browser-technologies-2223#core-functionaliteit)
- [Toetsenbord vriendelijk](https://github.com/maxvl3/browser-technologies-2223#toetsenbord-vriendelijk)
- [Kleurencontrast](https://github.com/maxvl3/browser-technologies-2223#kleurencontrast)
- [3 lagen uitgelegd](https://github.com/maxvl3/browser-technologies-2223#3-lagen-uitgelegd)
- [Feature detection](https://github.com/maxvl3/browser-technologies-2223#feature-detection)
- [Browsers en devices](https://github.com/maxvl3/browser-technologies-2223#browsers-en-devices)
- [Server](https://github.com/maxvl3/browser-technologies-2223#server)

## Progressive enhancement

Progressive enhancement is een ontwikkelingsbenadering voor websites die ervoor zorgt dat de website bruikbaar blijft voor alle gebruikers, ongeacht welk apparaat of browser zij gebruiken. Het is gebaseerd op het idee dat de website moet werken op de meest elementaire apparaten en vervolgens kan worden verbeterd met geavanceerde functies voor gebruikers met betere apparaten en browsers.
Deze aanpak begint met een basislaag die wordt ontworpen om toegankelijk te zijn voor alle gebruikers. Deze laag bevat de essentiële inhoud en functionaliteit van de website en werkt op elk apparaat. Vervolgens kunnen ontwikkelaars extra lagen toevoegen die geavanceerdere functies bevatten voor gebruikers met betere apparaten en browsers.

Een voorbeeld van progressive enhancement is het gebruik van afbeeldingen op een website. In plaats van grote afbeeldingen te gebruiken die de laadtijd van de pagina vertragen, kunnen ontwikkelaars kleine afbeeldingen gebruiken die snel worden geladen. Vervolgens kunnen ze extra lagen toevoegen, zoals afbeeldingen met hogere resoluties voor gebruikers met betere apparaten en browsers.
Progressive enhancement is een belangrijk onderdeel van toegankelijkheids- en inclusiviteitsdoelen voor websites. Het zorgt ervoor dat alle gebruikers toegang hebben tot de inhoud en functionaliteit van de website, ongeacht hun apparaat of browser.

Hier een van mijn eerste concepten waarin ik laat zien hoe de verschillende lagen er ongeveer uit komen te zien:

<img width="1078" alt="Schermafbeelding 2023-04-06 om 01 32 17" src="https://user-images.githubusercontent.com/94384526/230235470-790182c1-382e-4a8e-a54e-dd8b23171ff6.png">

## Core functionaliteit
- Niet alle vragen tegelijkertijd
- Verder gaan in het formulier waar je gebleven was
- Formulier validatie

De core functionaliteiten van de enquête voor de minor Web Development zijn het weergeven van vragen in delen, zodat de gebruiker niet alle vragen tegelijk hoeft in te vullen. Daarnaast kan de gebruiker verdergaan waar hij of zij was gebleven en worden alle antwoorden gevalideerd. Hierdoor kan de gebruiker eerder ingevulde vragen herzien en de enquête later hervatten waar hij of zij gebleven was.

## Toetsenbord vriendelijk
Toetsenbord vriendelijkheid is een belangrijk aspect bij het ontwerpen van webapplicaties. Om ervoor te zorgen dat de enquête voor de minor Web Development voor iedereen toegankelijk is, heb ik focus states aan elementen toegevoegd. De score bars waren erg uitdagend om werkend te krijgen voor toetsenbord. Dit kwam lange tijd doordat ik display none op de radio buttons had staan. Ik heb dit nu deels opgelost door met opacity 0 te werken, maar nog steeds ben ik niet helemaal te vreden.

![Schermafbeelding 2023-04-06 om 01 35 15](https://user-images.githubusercontent.com/94384526/230236190-daece520-521b-46d2-9f3f-fdd9ef5f17f6.png)
![Schermafbeelding 2023-04-06 om 00 38 58](https://user-images.githubusercontent.com/94384526/230236131-5c8d5d74-bce1-42c5-933d-27e9e15d9fcd.png)

## Kleurencontrast
Kleuren zijn een belangrijk aspect van webdesign, omdat ze een grote invloed hebben op hoe mensen de site waarnemen en gebruiken. Een goed kleurencontrast zorgt ervoor dat de inhoud gemakkelijker te lezen en te begrijpen is voor gebruikers met een verminderd zicht of kleurenblindheid. Daarom is het belangrijk om bij het ontwerpen van een website rekening te houden met kleurencontrast en ervoor te zorgen dat deze voldoet aan de toegankelijkheidsrichtlijnen.

Ik heb de colorcontrast tool gebruikt op https://coolors.co/ om te controleren of mijn contrasten goed genoeg zijn. Dit zijn de resultaten:

![Schermafbeelding 2023-04-06 om 00 42 52](https://user-images.githubusercontent.com/94384526/230236265-472d52e2-9cfb-4b10-bba8-173bc4e45098.png)
![Schermafbeelding 2023-04-06 om 00 43 18](https://user-images.githubusercontent.com/94384526/230236267-e06e7628-72b2-42f4-b170-a1a9afaed3c2.png)
![Schermafbeelding 2023-04-06 om 00 42 31](https://user-images.githubusercontent.com/94384526/230236331-c37328bf-744f-49aa-bd84-f9871e35db63.png)

## 3 lagen uitgelegd
Functionele laag:
De functionele laag richt zich op de basisbehoeften van de gebruikers. Het gaat hierbij om de functionaliteit van de website en de navigatie. De belangrijkste vraag hierbij is: werkt het en is het logisch opgebouwd? Het doel is om gebruikers in staat te stellen hun doelen te bereiken, zoals het vinden van informatie of het voltooien van een aankoop.

Wat heb ik in deze laag verwerkt?
- HTML structuur
- Formulier validatie door middel van de juiste tags
- Basis multistep formulier

Usable laag:
De usable laag is gericht op het optimaliseren van de gebruikerservaring. Dit wordt bereikt door middel van effectief ontwerp en functionaliteit. Het doel is om de gebruiker een eenvoudige en prettige ervaring te bieden. Hierbij wordt gekeken naar de consistentie van het ontwerp, de leesbaarheid van de tekst en de gebruiksvriendelijkheid van de website.

Wat heb ik in deze laag verwerkt?
- Kleur
- Positionering
- CSS form validatie
- Light/dark mode

Pleasurable laag:
De pleasurable laag heeft als doel de gebruiker een emotionele en esthetische ervaring te bieden. Hierbij wordt gekeken naar visuele aantrekkingskracht, interactieve elementen en gamification-technieken. Het doel is om de gebruiker te vermaken en te prikkelen, zodat deze terug blijft komen naar de website.

Wat heb ik in deze laag verwerkt?
- Input opslaan in localstorage

## Feature detection
Feature detection is het proces waarbij wordt gecontroleerd of een browser bepaalde functies ondersteunt voordat deze worden gebruikt in CSS. Dit wordt meestal gedaan met behulp van de @supports-regel, die controleert of een bepaalde CSS-eigenschap of -waarde wordt ondersteund door de browser. Als dit het geval is, worden de CSS-regels binnen de @supports-regel toegepast, anders worden ze genegeerd. Bijvoorbeeld:

```
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

Ook in JavaScript kun je feature detection gebruiken om te bepalen welke functies of API's beschikbaar zijn in de browser. Een voorbeeld hiervan is het testen op de aanwezigheid van de geolocation API met behulp van de volgende code:

```
if ('geolocation' in navigator) {
  // Geolocation API is available
} else {
  // Geolocation API is not available
}
```

## Browsers en devices
Geteste devices:
- Macbook
- Iphone
- Samsung

Geteste browsers:
- Chrome
- Safari
- Firefox
- Samsung internet

Obscure browser: Flow

Tijdens het bouwen van mijn formulier heb ik vaak gekeken hoe het eruit ziet in de obscure browser flow. Ik moet zeggen dat ik verrassend veel goed vond werken, maar er zijn ook een aantal features die ontbreken.

- Gap werkt niet
Ik maak veel gebruik van display flex in combinatie met gap, maar helaas ondersteunt Flow dit niet. Dit heb ik opgelost door te werken met <br> in de HTML en margin in de CSS.

- HTML/CSS validation werkt niet
Helaas werkt de formulier validatie niet zoals gewild in Flow. Ik ben er nog steeds niet uit welke features precies wel en niet ondersteund worden. Misschien dat validatie door middel van JavaScript wel had kunnen werken, helaas ben ik hier niet aan toegekomen.

- Navigatie toetsenbord bij score bars
De navigatie met toetsenbord werkt niet correct in Flow. Ook in moderne browser heb ik hier veel moeite mee gehad. Uiteindelijk heb ik in deze moderne browsers een soort oplossing gevonden maar in Flow is dit helaas niet gelukt. Dit heeft allemaal te maken met de custom radio button styling, hierdoor begrijpen de meeste browsers niet meer goed dat het radio buttons zijn.

- Appearance none werkt niet
Voor het stylen van de scorebars wilde ik eigenlijk appearance none gebruiken. Helaas ondersteunt Flow dit niet. Daarom ben ik opzoek gegaan naar alternatieven, en heb ik gekozen voor opacity 0.

## Server
Als dit formulier daadwerkelijk moet functioneren is een server nodig die data kan opslaan en kan switchen van routes. In deze stappen leg ik uit hoe ik dit zou aanpakken:

1. Set-up

Begin door een nieuw project op te zetten met behulp van node.js. Dit is de basis van je applicatie.

2. Installatie van de nodige pakketten

Installeer de nodige pakketten die nodig zijn om de applicatie te laten werken, zoals Express, Body-parser en Mysql.

```
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
```

3. Maken van de database

Maak een nieuwe database aan voor dit project en maak een nieuwe tabel aan met de gewenste kolommen.

4. Schrijven van de server code

Schrijf de server side code met behulp van Node.js en Express om de formulieren te verwerken en de gegevens op te slaan in de database. Hier een voorbeeld hoe ik dit zou doen voor 1 van mijn pagina’s:

```
// Eerste pagina van het formulier
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pagina1.html');
});

// Verwerken van de data van de eerste pagina
app.post('/pagina1', (req, res) => {
  const data = {
    input1: req.body.input1,
    input2: req.body.input2
  };

  connection.query('INSERT INTO table_name SET ?', data, (err, result) => {
    if (err) throw err;
    res.redirect('/pagina2');
  });
});
```
