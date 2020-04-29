function displaytime(){
    var date= new Date();
    var h= date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var sessions = "AM" ;

    if (h==0){
        h=12;
    }

    if (h>12){
        h=h-12;
        sessions="PM";
    }

    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;

    var tim = h + ":" + m + ":"  + s + ":" + sessions;
    document.getElementById("display").innerHTML = tim;
}
displaytime();
setInterval(displaytime,1000);


