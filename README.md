### Gruppe 35
Alle filnavn, funksjoner, variabelnavn, og kommentarer er skrevet på engelsk mens dokumentasjonen vil være skrevet på norsk.

Koden har blitt kommentert nøye og (forhåpentligvis) blitt gitt beskrivende variabel og funksjonsnavn. 

## Filer
Alle filene ligger på github og da lokalt på maskinen som hoster nettsiden. Filene ligger under public/resource mappene. De er delt i sine egne audio, images, og json (tekst) mediatyper. Innad i hver av disse mappene er det flere mapper som er kategori spesifikt. I audio mappen er det noen ubrukte filer som tidligere var ment til å være en del av prosjektet.

Eksempel:
* public/resources/audio/music/sound1.mp3

## React
Strukturen i koden vår er laget på en måte der vi ønsker å fordele opp hver funksjonelle del inn i sine egne komponenter. De minste komponentene som ikke inneholder noen andre komponenter er i mappen 'parts', mens de komponentene som inneholder parts er i mappen 'components'. 

Det er App.js som har hovedansvaret for hele applikasjonen og fordeler korrekt informasjon til alle child komponentene sine. App.js inneholder komponentene ContentBox, CheckboxTabs, og ButtonTabs.

* CheckboxTabs har ansvaret for å ha allt som har med checkboxes å gjøre sammen og inneholder komponenten CheckboxCategory
  * CheckboxCategory har ansvaret for hver checkbox i en spesifikk kategori (audio, image, text). Den inneholder delen Checkbox         som forteller CheckboxCategory hvilken av de som er aktiv og sender det videre opp til App.js via CheckboxTabs.

* ButtonTabs har ansvaret for å fortelle hvilken av de knappene som velger media filer fra 1 til 4, eller hjemmesiden. Den inneholder den enkle delen Button som forteller ButtonTabs hvilken Button som har blitt trykket på, og ButtonTabs forteller det til Apps.js

* ContentBox får vite lydurl, xml'en til en svg, og teksten til et dikt. Med denne informasjonen legger ContentBox url'en til Audio komponenten og xml'en til Image komponenten hvor de har ansvaret for å vise informasjonen korrekt. Teksten blir direkte lagt inn som en div etter den har blitt lastet inn.

Den informasjonen som blir sendt opp fra ButtonTabs og CheckboxTabs angående hvilke filer som skal bli lastet inn sender Apps.js ned til ContentBox etter de har blitt lastet ned via flere funksjoner i Apps.js.

Vi bruker localStorage for å sikre oss at filene ikke lastes på nytt når man bytter mellom tabs. Vi lagrer filene som tekststrenger med en key som er pathen til elementene. 

## CSS
Siden er responsiv ved at bildene og elementene skalerer med størrelsen på nettleseren. Vi bruker flexbox og media queries til å endre på layouten til siden. 

## Testing
Siden er testet i Firefox og Chrome. På Chrome hendte det helt tilfeldig at det oppsto en feil som breaka siden ved innlasting, men når man lastet inn på nytt kom ikke feilen tilbake.
Vi har hatt problemer med at noen av bildene ble borte i en nettleser, men ikke en annen. I tillegg var det ikke de samme bildene som forsvant. 