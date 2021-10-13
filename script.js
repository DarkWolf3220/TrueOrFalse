function red(element, color){
    element.style.color = color;
}

function check(){
    var check = Math.floor(Math.random()*100)+1

    if(check > 50){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "PRAWDA!";
    }else{
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "FAŁSZ!";
        
    }
}