const informacje_o_stronie = {

    logo: 'SUPER STRONA W JS',
    timer: '00:00:00'

}

const data = {

    title: 'Strona w JS',

    main_page: 'home',

    pages: {

        'home': {

            'logo': informacje_o_stronie.logo,

            'timer': informacje_o_stronie.timer,
    
            'main': 
            `
            <p class="przycisk" onclick="zmien_strone('kontakt')"> KONTAKT - Kliknij </p> <br>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam veritatis maxime minus neque dolores, repellat, consequuntur rem obcaecati deleniti accusantium dicta, explicabo eum laboriosam. Nihil, autem provident. Earum, rerum. <br>
    
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam veritatis maxime minus neque dolores, repellat, consequuntur rem obcaecati deleniti accusantium dicta, explicabo eum laboriosam. Nihil, autem provident. Earum, rerum. <br> 
            `,

        },

        'kontakt': {

            'logo': informacje_o_stronie.logo,

            'timer': informacje_o_stronie.timer,

            'main':
            `
            Kontakt: <br>
            * E-Mail: XYZ@gmail.com <br>
            <br>
            *Telefon: 123 123 123

            <p class="przycisk" onclick="zmien_strone('home')"> Wróć </p>
            `

        }

    },


    style: {

        '#logo':{

            'color': 'black',
            'background-color': 'white',
            'font-size': '40px',
            'text-align': 'center'

        },

        '#main': {

            'color': 'grey',
            'background-color': 'white',
            'text-align': 'center',
            'margin-top': '20px',
            'padding': '15px',

        },

        'body': {

            'background-color': 'grey'

        },

        '#timer': {

            'text-align': 'left',
            'background-color': 'white',
            'margin': '10px',
            'padding': '10px',
            'font-size': '20px',
            'color': 'grey',
            'margin-right': '50%'

        },

        '.przycisk': {

            'color': 'blue',
            'margin': '0',
            'font-size': '25px'

        },

        '.przycisk:hover': {

            'color': 'red' 

        }

    },

    plugins: {

        'timer': './plugins/timer.js',
        'divs': './plugins/divs.js',
        'title': './plugins/title.js'

    }

}
