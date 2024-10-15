
# Topdesk Secret Link Copier

Dit Tampermonkey-script voegt een knop toe aan de actie-balk in Topdesk om snel de geheime link van een Leverancier, Wijziging, of Melding naar het klembord te kopiëren. Dit script werkt voor zowel Leveranciers als voor Wijzigingen en Meldingen in Topdesk.

## Functies
- Kopieert de geheime link naar een Leverancier, Wijziging of Melding rechtstreeks naar het klembord.
- Voegt een visuele knop toe die de link kopieert en een melding toont dat de link succesvol is gekopieerd.
- Integreert naadloos met de bestaande Topdesk interface.

## Installatie

1. Installeer [Tampermonkey](https://www.tampermonkey.net/) als extensie in je browser.
2. Voeg het script toe door deze link te openen in je browser:
   ```bash
   https://raw.githubusercontent.com/Supperelias2/TopdeskDirectLinkButton/main/topdesk_secret_link_copier.user.js
   ```
3. Bevestig de installatie in Tampermonkey.

## Gebruik

- Open een Leverancier, Wijziging of Melding in Topdesk.
- Klik op de knop "Kopieer direct link naar leverancier".
- De geheime link wordt automatisch naar het klembord gekopieerd, en een melding verschijnt ter bevestiging.

## Ondersteunde URL's

- `https://gzazna.topdesk.net/*`
- `https://zas.topdesk.net/*`

## Toekomstige verbeteringen

- Ondersteuning voor andere Topdesk instances.
- Mogelijkheid om aangepaste meldingen te configureren.
