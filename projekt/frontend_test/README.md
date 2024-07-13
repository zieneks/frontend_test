# Zadanie rekrutacyjne

Witaj,

Prosimy Ciê o wykonanie poni¿szego zadania najlepiej jak tylko umiesz. Pozwoli to nam lepiej oceniæ Twoje umiejêtnoœci :)

## OPIS
W katalogu znajdziesz projekt graficzny. Prosimy Ciê o jego pociêcie oraz napisanie funkcjonalnoœci dla poszczególnych elementów. Swoje prace rób jako fork tego repozytorium.


### CEL

- Pociêta strona ma wype³niaæ ca³e okno przegl¹darki (nie zamykaæ contentu w kontenerze o sta³ej szerokoœci). Przy reponsywnoœci mo¿esz zastosowaæ dowolne breakpointy, samemu uznaj jak bêdzie najlepiej.

- Header powinien byæ na sta³e przyklejony do topu, Logo HTML5 w headerze powinno linkowaæ do '/' .  

- Stopka strony w przypadku ma³ej iloœci treœci w contencie powinna i tak byæ na samym dole strony a nie 'doklejaæ' siê pod contentem.

- W bloku pierwszym s¹ radiobuttony, ich wybór a nastêpnie klikniêcie przycisku w bloku drugim wykona akcjê podmiany lub doklejenia tekstu w bloku ostatnim. Treœci które maj¹ zostaæ u¿yte nale¿y pobraæ z JSONa (szczegó³y ni¿ej). Opcja pierwsza wybierze zawsze treœæ pierwsz¹, opcja druga drug¹ a opcja losowa dowoln¹ z pozosta³ych. Ka¿da osobna treœæ w ostatnim bloku powinna byæ objêta tagiem <article>. Doklejaj¹c treœæ nale¿y unikn¹æ powielania ju¿ istniej¹cej treœci (w przypadku u¿ycia opcji losowej nale¿y wylosowaæ kolejn¹ jeszcze nie u¿yt¹ treœæ). 

- Button 'poka¿' w footerze po klikniêciu pokazuje ramkê (wysuwa j¹ spod footera) z 2 klikalnymi opcjami. Pierwsza przywraca stronê do pocz¹tkowych ustawieñ, druga w headerze dokleja Twoje imiê i nazwisko.


### PLIK JSON
Zbudowaæ plik z tablic¹ przynajmniej 6 elementów zawieraj¹cych dowoln¹ treœæ. Wolno w JSONie trzymaæ dodatkowe dane je¿eli uproœci to wykonanie zadania.


### WARUNKI
- Nie u¿ywaæ bootstrapa/tailwinda ani innych podobnych frameworków.
- Zastosowaæ SCSS.
- Poni¿ej 960px wed³ug uznania dokonaæ zmian w projekcie by jak najlepiej przedstawiæ stronê (najlepiej wykorzystaæ przyk³ad projektu mobilnego).


### DODATKOWE PLUSY
- Osadzenie ca³ego zadania w jakimœ JSowym frameworku (najlepiej Angular).
- Brak plików graficznych w koñcowym projekcie (brak plików typu jpg, gif, png, svg).
- CSS IS AWESOME w footerze - po najechaniu myszk¹ ramka (bez tekstu) powinna wykonaæ animowany obrót.
- Zastosowanie BEM.
- Spe³nianie zasad a11y.
- Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze u¿ycie jednostki px) - w taki sposób by w efekcie responsywnoœæ spe³niona zosta³a jak najmniejsz¹ iloœci¹ kodu.
- Mobile first.
- Doklejaj¹c treœæ sprawiæ by w ostatnim bloku treœci by³y posortowane alfabetycznie.
- Przy doklejaniu treœci w przypadku niemo¿liwoœci spe³nienia warunku by by³a unikalna wyœwietliæ stosowny komunikat (np. alert/dialog/modal).
- Button w footerze ("poka¿") wysuwaj¹cy ramkê bez u¿ycia JSa.
- Rezultat prac wrzuciæ do podgl¹du na jak¹œ darmow¹ platformê (np. netlify/heroku).


### ZADANIE NA 6 :)
- Wykorzystaæ localStorage do za³adowania treœci z pliku i ich póŸniejszego przechowywania oraz napisaæ dodatkow¹ funkcjonalnoœæ pozwalaj¹c¹ na zarz¹dzanie nimi (dodawanie/edycja/usuwanie).


## UWAGI
Projekt nie musi byæ 'pixel perfect'. Z uwagi na brak pliku Ÿród³owego a jedynie jpg nale¿y wymiary samemu zmierzyæ. Ale przyk³adowo je¿eli jakiœ element po zmierzeniu wydaje siê ¿e ma 139px to dobr¹ praktyk¹ bêdzie zaokr¹gliæ go do 140px. U¿yty w projekcie font to OpenSans.


## WYSY£KA PRACY
Nale¿y przes³aæ link do swojego repozytorium z rozwi¹zaniem. Dodatkowo wrzuæ dokument tekstowy z list¹ rzeczy których nie uda³o siê wykonaæ z celów g³ównych oraz listê rzeczy które zrobiono dodatkowo.

POWODZENIA :)
