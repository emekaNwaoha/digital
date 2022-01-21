window.addEventListener("load", function () {


    setInterval(function () {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        let clock = document.getElementById("time");


        clock.innerHTML = h + ":" + m + ":" + s;
        if (parseInt(h) < 12) {
            let am = document.getElementById("AM")
            am.innerText = "AM";
        }
        else if (parseInt(h) > 12) {
            let pm = document.getElementById("AM");
            pm.innerText= "PM";
            if(parseInt(m)<10){
                let tens=document.getElementById("time")
                tens.innerText=h+":"+m+"0"+":"+s;
            }
        }
    },
        1000);





});