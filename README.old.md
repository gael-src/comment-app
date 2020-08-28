# Comments App

**Aufabe:**
Erstelle eine simple Kommentar-App, ähnlich wie der Diskussions-Bereich auf folgender Website (ganz nach unten scrollen): https://tiny-house-helden.de/tiny-house-buecher/ 


**1. Teil: Grundfunktionalität -> Nutzer kann Kommentar hinterlassen**
* Kommentare werden direkt als state gespeichert
    * keine Datenbank
    * kein Localstorage
    * => beim Neustarten der Seite gehen folglich alle Kommentare verloren
* Umsetzung
    * Formular zum Erstellen eines Kommentars 
        * Name
        * Nachricht
        * KEINE Checkboxes notwendig (Ihr könnt aber, wenn ihr möchtet)
    * Nach drücken des Buttons „Kommentar abschicken“ erscheint der Kommentar über dem Formular
        * Der Kommentar muss KEIN Datum und KEINE Uhrzeit enthalten (kann aber)

**2. Teil: Anzeigen der Anzahl der Kommentare**
* Ganz oben in deiner App soll die Anzahl der Kommentare stehen
  
**3. Teil: Löschen der Einträge**
* Neben jedem Kommentar gibt es einen Button, mit dem dieser gelöscht werden kann

**4. Teil: Speichern der Einträge in Localstorage**
* Kommentare sollen in localstorage gespeichert und beim Aufruf der App bzw. Website aus dem Localstorage geladen werden

# Sonstiges

**CSS**
* das Styling darf gerne ganz simpel sein und muss nicht so aussehen, wie auf dem Screenshot bzw. auf der Website zu sehen ist
* du kannst gerne bootstrap verwenden, wenn du möchtest
* generell ist das Styling nicht so wichtig bei dieser Aufgabe

**Allgemeines**
* verwendet „create-react-app“ um ein neues Projekt zu erstellen
* Bitte arbeitet in folgenden Teams:
  * Team 1: Victoria, Vadim, Andreas, Gael
  * Team 2: Pawel, Mariusz, Marco
  * Team 3: Majid, Melad, Kinan
* es wäre super, wenn ihr Teil 1 und 2 der Aufgabe fertig bekommen würdet
* Jedes Team stellt seine Kommentar-App am 10. August kurz vor 

Zur Verdeutlichung, um was es geht, noch ein Screenshot mit Anmerkungen:

![screenshot](Kommentar-App.png)
