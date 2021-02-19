let keys = document.querySelectorAll(".key");
let arrays= document.querySelectorAll('audio');


window.addEventListener('keydown',function (event) {
    console.log(event.keyCode);
    keys.forEach(function (key) {
        console.log(key.getAttribute("data-key"));
        if (event.keyCode == key.getAttribute("data-key")) {
            key.classList.add("playing",)

            
        }
        
    })
    arrays.forEach(function(array){
        console.log(array.getAttribute("data-key"))
        if (event.keyCode == array.getAttribute("data-key")) {
            array.play();
            
        }
    })
})
    window.addEventListener('keyup',function(event){
        keys.forEach(function(key){
            console.log(key.getAttribute("data-key"))
            if (event.keyCode == key.getAttribute("data-key")){
               setTimeout(() => {
                   key.classList.remove('playing',"sound")
               }, 300); 
                
            }
        
        })
    })

// let clé = keys.getAttribut('data-key');

// keys.getAttribut("keydown",function(event){
// if (event.keycode == clé){

// * 