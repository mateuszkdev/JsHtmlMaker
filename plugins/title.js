const new_title_text = 
` 
Podaj nowy tytuł strony: <input id="tytul" type="text"> <button onclick="zmien_tytul();"> Potwierdz </button>
`


const formula = new div('main', 'okej', new_title_text)

formula.style({ 'background-color': 'grey', 'color': 'black', 'margin': '20px', 'padding': '10px' })

function zmien_tytul () {

    let new_title = document.getElementById('tytul').value

    new title(new_title)

}
