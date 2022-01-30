function clock(){
    var hr = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("seconds");
    var merdian =document.getElementById("period");

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours>12){
        hours=hours-12;
        merdian.innerHTML="PM";
    }
    if (hours>=12){
        merdian.innerHTML="PM";
    }
    if( minutes<10){
        minutes="0"+minutes;
    }
    if( seconds<10){
        seconds="0"+seconds;
    }
    hr.innerHTML=hours;
    min.innerHTML=minutes;
    sec.innerHTML=seconds;
}
setInterval(clock ,1000);

function settime(){
    var hrs = new Date().getHours();
    var a =document.getElementById("wakeuptime").value;
    var b =document.getElementById("lunchtime").value;
    var c =document.getElementById("naptime").value;
    var d =document.getElementById("nighttime").value;
    if(a==hrs){
        document.getElementById("image").classList.add('wake');
        document.getElementById("imagetext").innerHTML="grab some healthy brekfast!!!";
        document.getElementById("text").innerHTML="good morning!! wake up!!";
    };
    if(b==hrs){
        document.getElementById("image").classList.add('lunch');
        document.getElementById("imagetext").innerHTML="let's have some lunch !!";
        document.getElementById("text").innerHTML="good afternoon !! take some sleep";
    };
    if(c==hrs){
        document.getElementById("image").classList.add('nap');
        document.getElementById("imagetext").innerHTML="stop yawning, get some tea.. its just evening!";
        document.getElementById("text").innerHTML="good evening !!";
    };
    if(d==hrs){
        document.getElementById("image").classList.add('night');
        document.getElementById("imagetext").innerHTML="close your eyes and go to sleep";
        document.getElementById("text").innerHTML="good night !!";
    };
    
    var wakeup =document.getElementById("wakeuptime");
    var w = wakeup.options[wakeup.selectedIndex].text;
    document.getElementById("p1").innerHTML="Wake Up Time : "+ w;

    var lunch =document.getElementById("lunchtime");
    var l= lunch.options[lunch.selectedIndex].text;
    document.getElementById("p2").innerHTML="Lunch Time : "+ l;

    var evening =document.getElementById("naptime");
    var e = evening.options[evening.selectedIndex].text;
    document.getElementById("p3").innerHTML="Nap Time : "+ e;

    var night =document.getElementById("nighttime")
    var n = night.options[night.selectedIndex].text;
    document.getElementById("p4").innerHTML="Night Time : "+ n;

    document.getElementById("endbox").style.visibility="visible";
}