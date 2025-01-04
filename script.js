let text = document.getElementById('text');
let text_c = document.getElementById('h2_container');
let skyy = document.getElementById('skyy');
let admin = document.getElementById("admin");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value<360){
        text_c.style.marginTop = value * 2.5 + "px";
    }
    else{
        text_c.style.marginTop = value * 0 + "px";
    }
    
    

});