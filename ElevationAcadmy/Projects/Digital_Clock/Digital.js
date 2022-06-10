function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("am");
  
    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
  }
  setInterval(clock, 1000);