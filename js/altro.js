// Questa pagina si occupa delle interazioni nella home page.
document.addEventListener('DOMContentLoaded', darkModeHome)
let x = document.cookie.split('name=')
let c = x[1]
let us
let pref = JSON.parse(c);


// Le seguenti funzioni mettono like ai post
function brLike(){
    document.getElementById('brLik').innerHTML = '&#10084; 8401'
}
function paLike(){
    document.getElementById('paLik').innerHTML = '&#10084; 12462'
}
function niLike(){
    document.getElementById('niLik').innerHTML = '&#10084; 9446'
}
function heLike(){
    document.getElementById('heLik').innerHTML = '&#10084; 1015'
}
function divLike(){
    document.getElementById('divLik').innerHTML = '&#10084; 1242'
}
function micLike(){
    document.getElementById('micLik').innerHTML = '&#10084; 21050'
}
function darkModeHome(){    // Fa il contrario. Mette il tema chiaro se previsto dai cookie
    if(pref.name != null){
        if(pref.mode == 'white'){
            document.getElementById('stile').innerHTML = ' '
        }
    }
}