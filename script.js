// Name: Toa Pita
// Description: Handle die rolls

function toggleDieHold(id){
    let currentState = document.getElementById(id).getAttribute("data-active");
    let newState = currentState==="true"?false:true;
    document.getElementById(id).setAttribute("data-active",newState);
    if(newState){
        document.getElementById(id).classList.remove("held")
    }else{
        document.getElementById(id).classList.add("held")
    }
}


