
# Topdesk Direct Link Copier

Dit Tampermonkey-script voegt een knop toe aan de actie-balk in Topdesk om snel de geheime link van een Leverancier, Wijziging of Melding naar het klembord te kopiëren. Dit script werkt voor zowel Leveranciers als voor Wijzigingen en Meldingen in Topdesk.

## Functies
- Kopieert de geheime link naar een Leverancier, Wijziging of Melding rechtstreeks naar het klembord.
- Voegt een visuele knop toe die de link kopieert en een melding toont dat de link succesvol is gekopieerd.

![leveranciers](/screenshots/KnopBijleveranciers.png).
![meldingen](/screenshots/KnopBijMeldingen.png).


## Installatie

1. Installeer [Tampermonkey voor Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) in je browser.
2. Ga naar het [script op GitHub](https://raw.githubusercontent.com/Supperelias2/TopdeskDirectLinkButton/main/addbutton.js).
3. Kopieer de volledige code.
4. Open de Tampermonkey-dashboard.
5. Klik op **"Add a new script"** en plak de gekopieerde code.
6. Sla het script op.

## Updates
Na installatie kun je het script direct updaten door naar de Tampermonkey-dashboard te gaan, het script te selecteren en op **"Check for updates"** te klikken. Het script controleert automatisch op updates via de volgende URL:

- `@updateURL`: https://raw.githubusercontent.com/Supperelias2/TopdeskDirectLinkButton/main/addbutton.js

## Ondersteunde URL's

- `https://gzazna.topdesk.net/*`
- `https://zas.topdesk.net/*`
