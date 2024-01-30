

let userr


let nbernardi = createObject('Nicola Bernardi', 'ciaooo', 'dark', 4, 'admin')
let erizzolo = createObject('Emanuele Rizzolo', 'profff', 'white', 3, 'mod')
//let sign = createObject('?', 'white', 1, 'normal')
/* let nbernardi = {   // Creati gli oggetti degli utenti
    name: 'Nicola Bernardi',
    mode: 'dark',
    profile: 4,
    rango: 'admin'
}; 
let erizzolo = {    // erizzolo, pass: profff
    name: 'Emanuele Rizzolo',
    mode: 'white',
    profile: 3,
    rango: 'mod'
};
let sign = {    //  Utente registrato
    name: '?',
    mode: 'white',
    profile: 1,
    rango: 'normal'
};
*/


function main(){
    cookieContent // TODO function cookie content
    let ifcookie = document.cookie
    let x = document.cookie.split('name=')
    let c = x[1]
    if(document.cookie != 'name=c' && document.cookie != ''){
        let us
        let pref = JSON.parse(c);
        document.getElementById('usrlogged').innerText = pref.name
    }
}

function logg(){
    us = document.getElementById('usr').value
    let ps = document.getElementById('pass').value
    switch (us){
        case 'nbernardi':
            if(ps == 'ciaooo')
                login(us)
            else
                document.getElementById('err').innerText = 'Username o password non corretti'
            break
        case 'erizzolo':
            if(ps == 'profff')
                login(us)
            else
                document.getElementById('err').innerText = 'Username o password non corretti'
            break
        default:
            document.getElementById('err').innerText = 'Username o password non corretti'
    }
}

function login(us){
    let us = getById('usr').value
    /*if(us == 'nbernardi'){
        let ciao = 'name=' + JSON.stringify(nbernardi) + ';path=/'
        document.cookie = ciao
        redirect('settings.html')
    }else{
        let er = 'name=' + JSON.stringify(erizzolo) + ';path=/'
        document.cookie = er
        redirect('settings.html')
    } */
    let x = JSON.parse(getCookie(us))
    alert(x)

    
}

function reg(){
    userr = document.getElementById('realname').value
    usrname = getById('usr').value
    sign.name = userr
    let pas = getById('pass').value
    let pas2 = getById('pass2').value
    let ob = JSON.stringify(createObject(userr, pas, 'white', 1, 'normal'))
    //us = document.getElementById('usr').value
    if(getCookie(usrname) != null){
        if(pas == pas2){
            setCookie(usrname, ob)

        }else{
            msg('err', 'La password non coincide')
        }
    }else{
        msg('err', 'Username già registrato.')
    }
    //let ps = document.getElementById('pass').value
    //setCookie('name', sign)
    //redirect('settings.html')
}

function slogga(){
    let scad = new Date()
    scad.setTime(scad.getTime()-1000000)
    document.cookie = 'name=c; path=/; expires=' + scad.toUTCString()
    redirect('../')
}

function redirect(dove){
    location.href = dove
}

function setCookie(nome, contenuto, path = '/'){
    document.cookie = nome + '=' + JSON.stringify(contenuto) + '; path=' + path
}

function createObject(nome, pass, mod3, picture, lvl){
    let ob = {
        name: nome,
        password: pass,
        mode: mod3,
        profile: picture,
        rango: lvl
    }
    return ob
}

function cookieContent(name){
    let b = document.cookie.split(name + '=')
    console.log(b)

}

function getCookie(name){
    return document.cookie.split(name + "=")
}

function getById(id){
    return document.getElementById(id)
}
function msg(id, msg){
    document.getElementById(id).innerText = msg
}






