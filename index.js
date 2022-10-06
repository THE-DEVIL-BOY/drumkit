
for(let i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        let o=this.innerHTML
        makesound(o)
        flash(o)
    })

}
document.addEventListener("keypress", function(event){
    makesound(event.key)
    flash(event.key)
})

function makesound(key){
    switch (key) {
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play()     
            break;
        case 'a':
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play()     
            break;
        case 's':
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play()     
            break;
        case 'd':
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play()  
            break;
        case 'j':
            var audio=new Audio("sounds/snare.mp3")
            audio.play() 
            break;
        case 'k':
            var audio=new Audio("sounds/crash.mp3")
            audio.play()    
            break;
        case 'l':
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play()     
            break;
        default:
            break;
    }
}
 function flash(press){
    var kk=document.querySelector("."+press)
    kk.classList.add("pressed")
    setTimeout(function(){
        kk.classList.remove("pressed")
    },100)
 }