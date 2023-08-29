
function MudouTamanho(){
    let menu = window.document.getElementById("lmenu")
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
    
}


function menuBurguer(){
    let menu = window.document.getElementById("lmenu")
    if(menu.style.display == 'block'){
        menu.style.display ='none'
    }else{
        menu.style.display ='block'
    }
}