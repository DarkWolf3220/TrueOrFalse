function red(element, color){
    element.style.color = color;
}

function check(){
    var check = Math.floor(Math.random()*99)+1

    console.log(check);

    if(check < 33){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "TAK!";
        }
    else if(check < 66){
        document.getElementById("result").style.color = "yellow";
        document.getElementById("result").innerHTML = "MOŻE";
    }else{
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "NIE!";
        
    }
}