let keys = document.querySelectorAll(".key");
let arrays= document.querySelectorAll('audio');


window.addEventListener('keydown',function (event) {
    console.log(event);
    keys.forEach(function (key) {
        if (event.keyCode == key.getAttribute("data-key")) {
            key.classList.add("playing",)

            key.addEventListener('transitionend',function(event){
                key.classList.remove('playing',"sound")
            })
        }
        
    })
    arrays.forEach(function(array){
        if (event.keyCode == array.getAttribute("data-key")) {
            array.play();
            
        }
    })
})
   

// let clé = keys.getAttribut('data-key');

// keys.getAttribut("keydown",function(event){
// if (event.keycode == clé){

// * 
function beatBox() {
    function simulateKey(key) {
        var boxkey = new Event('keydown',{
            bubbles : true   
        });
        boxkey.keyCode = key

        //
        window.dispatchEvent(boxkey)
    }
    function playBeat(time,key){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(simulateKey(key));
            }, time);
        })
    }



    playBeat(300,).then(()=>{
       return playBeat(200,83)
    }).then(()=>{
        return playBeat(100,69)
     })
     .then(()=>{
        return playBeat(100,83)
     })
     .then(()=>{
        return playBeat(10,83)
     })
     .then(()=>{
        return playBeat(100,69)
     })
     .then(()=>{
        return playBeat(10,83)
    })
    }


