
# Topdesk Direct Link Copier

Dit project biedt twee manieren om de Topdesk Direct Link Copier te gebruiken. De Edge-extensie heeft de voorkeur omdat deze gebruiksvriendelijker en veiliger is. De voorkeursmethode is via een Edge-extensie, die gemakkelijk te installeren is. De tweede methode is via een verouderd Tampermonkey-script, dat nog steeds werkt maar niet meer wordt bijgewerkt.

## 1. Edge-extensie (**Voorkeursmethode**)

De eenvoudigste manier om de Topdesk Direct Link Copier te gebruiken is door de Edge-extensie te installeren. Deze extensie voegt een knop toe aan de actie-balk in Topdesk om snel de geheime link van een Leverancier, Wijziging of Melding naar het klembord te kopiëren.

### Installatie van de Edge-extensie
1. Ga naar de [Microsoft Edge-extensiepagina](https://microsoftedge.microsoft.com/addons/detail/topdesk-direct-link-copie/ihmlaohkpnbcnidlpicadkhbhoijpjnn).
2. Klik op **"Get"** om de extensie toe te voegen aan je browser.

### Ondersteunde URL's
- `https://gzazna.topdesk.net/*`
- `https://zas.topdesk.net/*`


Na installatie is de extensie direct beschikbaar in Topdesk. Je vindt de knop in de actie-balk rechtsboven in het scherm, waarmee je eenvoudig links kunt kopiëren.


---


## 2. Tampermonkey-script (Verouderde methode)

Deze methode gebruikt een Tampermonkey-script om dezelfde functionaliteit toe te voegen. Houd er rekening mee dat deze methode niet langer wordt bijgewerkt en niet de voorkeur heeft.

### Functies
- Kopieert de geheime link naar een Leverancier, Wijziging of Melding rechtstreeks naar het klembord.
- Voegt een visuele knop toe die de link kopieert en een melding toont dat de link succesvol is gekopieerd.

![leveranciers](/screenshots/KnopBijleveranciers.png)

### Installatie van het Tampermonkey-script
1. Installeer [Tampermonkey voor Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) in je browser.
2. Ga naar het [Tampermonkey script op GitHub](https://raw.githubusercontent.com/Supperelias2/TopdeskDirectLinkButton/refs/heads/main/TampermonkeyScript/addbutton.js).
3. Kopieer de volledige code.
4. Open de Tampermonkey-dashboard.
5. Klik op **"Add a new script"** en plak de gekopieerde code.
6. Sla het script op.
