## JsHtmlMaker
> W pliku data.js znajdują sie informacje o tym co ma być na stronie:
* pages: {}
  - 'nazwa_strony: {}
    - 'nazwa_diva' : 'treść diva na stronie'
* style: {}
  - 'nazwa_diva': {}
    - 'nazwa stylu': 'wartośćć'
* plugins: {}
  - 'nazwa_skryptu': 'ścieżka do pliku'
  
# Instalacja
> Pobierz i wrzuć do folderu plik JsHtmlMaker.js oraz stwórz data.js z taka samą strukturą.
> Podejpnij do pliku .html dwa te skrypt, data.js nad plikem główym .js
> To tyle, Napisz swoją strone w pliku data.js !

# Wbudowane metody
* new write(elementID, content) - 
  Napisz coś na stronie za pomocą wbudowanej klasy write, jako 1 argument podaj ID elementu, jako drugi treść.
  
* new div(id_diva, id_nowego_diva, content) -
  Dodaj nowego diva w istniejącego diva na stronie głównej ( w przyszłośći opcja zapamiętywania i wyobory strony! )
  
* new div().style({ 'nazwa stylu': 'wartość }) - 
  Dla nowo dodanego stylu, można równierz dodać stylistyke
  
* new title(content) -
  Zmień tytuł strony
 
* zmien_strone(nazwa_strony) -
  Zmień wyświetlaną strone podając nazwe strony podaną w data.js!
