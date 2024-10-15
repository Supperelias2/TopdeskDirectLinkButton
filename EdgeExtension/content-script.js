(function() {
    'use strict';

    // Functie om de grote knop toe te voegen of te verwijderen
    function updateButton() {
        // Vind de kleine geheime link knop
        const secretLink = document.querySelector('.bottombar .secretlink#secretlink');

        // Zoek de action bar
        const actionBar = document.querySelector('#actionbar.actions');

        // Als de action bar niet bestaat, doe niets
        if (!actionBar) {
            return;
        }

        // Zoek bestaande grote knop indien aanwezig
        let bigButton = document.querySelector('#actionbar .big-secret-link-button');

        if (secretLink) {
            // Geheime link is aanwezig
            if (!bigButton) {
                // Grote knop is nog niet toegevoegd, maak en voeg toe
                bigButton = document.createElement('a');
                bigButton.textContent = 'Kopieer directe link naar item';
                bigButton.className = 'button big-secret-link-button';
                bigButton.href = '#';
                bigButton.style.backgroundColor = 'darksalmon';
                bigButton.style.color = 'white';
                bigButton.style.position = 'relative';
                bigButton.style.textDecoration = 'none';

                // Maak melding label
                const messageLabel = document.createElement('div');
                messageLabel.textContent = 'Link is gekopieerd naar het klembord';
                messageLabel.style.backgroundColor = '#d4edda';
                messageLabel.style.color = '#155724';
                messageLabel.style.border = '1px solid #c3e6cb';
                messageLabel.style.padding = '5px 10px';
                messageLabel.style.marginTop = '5px';
                messageLabel.style.borderRadius = '4px';
                messageLabel.style.display = 'none';
                messageLabel.style.position = 'absolute';
                messageLabel.style.zIndex = '1000';
                messageLabel.style.left = '0';
                messageLabel.style.top = '100%';
                messageLabel.style.whiteSpace = 'nowrap';
                messageLabel.style.minWidth = 'max-content';

                // Voeg klikgebeurtenis toe om link naar klembord te kopiëren
                bigButton.addEventListener('click', function(e) {
                    e.preventDefault(); // Voorkom standaardactie
                    const link = secretLink.href;

                    // Gebruik de Clipboard API om naar het klembord te schrijven
                    navigator.clipboard.writeText(link).then(function() {
                        // Toon melding label onder de knop
                        messageLabel.style.display = 'block';
                        messageLabel.style.opacity = '1';

                        // Verberg de melding na een paar seconden met animatie
                        setTimeout(function() {
                            // Voeg fade-out animatie toe
                            messageLabel.style.transition = 'opacity 0.5s';
                            messageLabel.style.opacity = '0';
                            setTimeout(function() {
                                messageLabel.style.display = 'none';
                                messageLabel.style.opacity = '1'; // Reset voor volgende keer
                                messageLabel.style.transition = '';
                            }, 500);
                        }, 2000); // Toon melding voor 2 seconden
                    }, function(err) {
                        console.error('Kon de tekst niet kopiëren: ', err);
                    });
                });

                // Voeg de melding label toe aan de knop
                bigButton.appendChild(messageLabel);

                // Voeg de grote knop toe na de "Nieuwe Leverancier" knop
                const newSupplierButton = actionBar.querySelector('a[href*="supplier?action=new"]');
                if (newSupplierButton) {
                    newSupplierButton.parentNode.insertBefore(bigButton, newSupplierButton.nextSibling);
                } else {
                    // Als "Nieuwe Leverancier" knop niet gevonden is, voeg toe aan action bar
                    actionBar.appendChild(bigButton);
                }
            }
        } else {
            // Geheime link is niet aanwezig
            if (bigButton) {
                // Verwijder de grote knop
                bigButton.parentNode.removeChild(bigButton);
            }
        }
    }

    // Observeer wijzigingen in de body om te detecteren wanneer de action bar of secret link verandert
    function observeChanges() {
        const targetNode = document.body;

        const observer = new MutationObserver(function(mutations) {
            updateButton();
        });

        observer.observe(targetNode, { childList: true, subtree: true });
        updateButton(); // Eerste aanroep
    }

    // Start met observeren wanneer de pagina volledig geladen is
    window.addEventListener('load', function() {
        observeChanges();
    });
})();
