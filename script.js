function check(){
    var check = Math.floor(Math.random()*99)+1;
    var question = document.getElementById("question").value;
    const array2 = new Array();

    if(question == ""){
        return alert("Prosze podać pytanie!");
    }

    if(check < 25){
        for(i = 0; i < 1; i++){
        document.getElementById("result").style.color = "#03fc07";
        var ans = document.getElementById("result").innerHTML = "TAK!";
        array2[i] = ans;
        }
    }else if(check < 50){
        for(i = 0; i < 1; i++){
        document.getElementById("result").style.color = "#f4fc03";
        var ans = document.getElementById("result").innerHTML = "MOŻLIWE ŻE TAK";
        array2[i] = ans;
        }
    }else if(check < 75){
        for(i = 0; i < 1; i++){
        document.getElementById("result").style.color = "#fc7f03";
        var ans = document.getElementById("result").innerHTML = "MOŻLIWE ŻE NIE";
        array2[i] = ans;
        }
    }else{
        for(i = 0; i < 1; i++){
        document.getElementById("result").style.color = "#fc0303";
        var ans = document.getElementById("result").innerHTML = "NIE!";
        array2[i] = ans;
        }
    }

    const array = new Array();

    if(check){
        for(i = 0; i < 1; i++){
            array[i] = question;
            document.getElementById("questions").innerHTML += array[i] + " = " + array2[i] + "<br />"; 
        }
    }
    
    console.log(array, array2);
        
}

