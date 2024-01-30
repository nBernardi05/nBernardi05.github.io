let hap = '😀', mon = '🤑', pol = '👮🏻', sna = '🐍', lio = '🦁'
document.addEventListener('DOMContentLoaded', ora)
document.addEventListener('DOMContentLoaded', setava)
document.addEventListener('DOMContentLoaded', tscuro)
document.addEventListener('DOMContentLoaded', permessi)
//TPSIT.com. Autore Nicola Bernardi
let x = document.cookie.split('name=')
let c = x[1]
let us
let pref = JSON.parse(c);


function ora(){
    let nome = pref.name 
        document.getElementById('ciaino').innerText = nome
    //la funzione scrive il nome se l'utente si logga
}

function changeAvatar(idd){	//viene letto l'avatar selezionato e aggiornato
    let scie = document.querySelector("input[type='radio'][name='avatar']:checked").id
    let gig = document.getElementById('giga')
    let prof = pref.profile
    switch (scie){
        case 'happy':
            document.getElementById('giga').innerHTML = hap
            pref.profile = 1
            break
        case 'moneyman':
            document.getElementById('giga').innerHTML = mon
            pref.profile = 2
            break
        case 'police':
            document.getElementById('giga').innerHTML = pol
            pref.profile = 3
            break
        case 'snake':
            document.getElementById('giga').innerHTML = sna
            pref.profile = 4
            break
        case 'lion':
            document.getElementById('giga').innerHTML = lio
            pref.profile = 5;
            break
    }
    setCookie('name', pref)
}

function setava(){	// legge i cookie e setta l'avatar
    let gig = document.getElementById('giga')
    let prof = pref.profile
    
    switch (prof){
        case 1:
            gig.innerHTML = hap
            break
        case 2:
            gig.innerText = mon
            break
        case 3:
            gig.innerText = pol
            break
        case 4:
            gig.innerText = sna
            break
        case 5:
            gig.innerText = lio
            break
    }
}


function tscuro(){
    let tema = pref.mode
    if(tema == 'dark'){
        document.getElementById('temas').innerHTML = '<input type="checkbox" id="scuro" checked="true" disable>\n<label for="scuro">Tema scuro</label>'
    }else{
        document.getElementById('temas').innerHTML = '<input type="checkbox" id="scuro" disable>\n<label for="scuro">Tema scuro</label>'
    }
    tem()
}
function tem(){
    let tema = pref.mode

    if(document.getElementById('scuro').checked){
        document.getElementById('stile').innerHTML = '*{background-color:#052134; color:white;}'
        pref.mode = 'dark'
    }else{
        document.getElementById('stile').innerHTML = '*{background-color:white; color:black;}'
        pref.mode = 'white'
    }
    setCookie('name', pref)
    
    return
}

function permessi(){
    switch (pref.rango){
        case 'admin':
            document.getElementById('rang').innerText = 'Amministratore'
            break
        case 'mod':
            document.getElementById('rang').innerText = 'Moderatore'
            break
        case 'normal':
            document.getElementById('rang').innerText = 'Utente normale'
    }
}


