let guestCount = 0;
let homeCount = 0;

$('.counter',this).on('click',function(){

})

function scoreUpdater(grounds, val){

    if(grounds == "home"){
        if(val == 1){
            homeCount++;
        }
        else if(val == 2){
            homeCount+=2;
        }
        else if(val == 3){
            homeCount+=3;
        }

        let element = document.getElementById("home-el");
        element.textContent = homeCount;
    
    }
    else{
        if(val == 1){
            guestCount++;
        }
        else if(val == 2){
            guestCount+=2;
        }
        else if(val == 3){
            guestCount+=3;
        }

        let element = document.getElementById("guest-el");
        element.textContent = guestCount;
    }
    
}


































