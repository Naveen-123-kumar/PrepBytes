function clock() {
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("secs");
  var am_pm = document.getElementById("am");
  var time = new Date();
  // console.log(time)
  var a = time.getHours();
  const value=parseInt(a)>=12?'PM':'AM';
  am_pm.innerText=value;
  var b = time.getMinutes();
  var c = time.getSeconds();
  hours.innerHTML =a;
  minutes.innerHTML = b;
  seconds.innerHTML = c;
}
setInterval(clock, 1000);

// let clickButton=document.getElementsByClassName('set_time')[0];
// clickButton.addEventListener('click',()=>{
//   document.getElementsByClassName("set_time")[0].innerHTML = "Alarm set"

// })
function settime() {
  // let text = document.getElementsByClassName("set_time")[0];
  // text.innerHTML = "Alarm set";
  var hours = new Date().getHours();
  document.getElementsByClassName("set_time")[0].innerHTML = "Alarm set"
  var i = document.getElementById("wakeuptime").value;
  var j = document.getElementById("lunchTime").value;
  var k = document.getElementById("napTime").value;
  var l = document.getElementById("sleepTime").value;

  if (i == hours) {
    document.getElementById("rightimage_container").style.backgroundImage =
      "url(./Assets/Cage.png)";
    document.getElementById("rightText_container").innerHTML =
      "GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("description_text").innerHTML = "GOOD MORNING!!";
  }
  if (j == hours) {
    document.getElementById("rightimage_container").style.backgroundImage =
      "url(./Assets/lunchTime.png)";
    document.getElementById("rightText_container").innerHTML =
      "LETS HAVE SOME LUNCH !!";
    document.getElementById("description_text").innerHTML = "GOOD AFTERNOON!!";
  }
  if (k == hours) {
    document.getElementById("rightimage_container").style.backgroundImage =
      "url(./Assets/EveningTime.png)";
    document.getElementById("rightText_container").innerText ="STOP YAWNING,GET SOME TEA..ITS JUST EVENING";
    document.getElementById("description_text").innerHTML = "GOOD EVENING!!";
  }
  if (l == hours) {
    document.getElementById("rightimage_container").style.backgroundImage =
      "url(./Assets/goodNight.png)";
    document.getElementById("rightText_container").innerHTML =
      "CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("description_text").innerHTML = "GOOD NIGHT!!";
  }

  var container = document.createElement("p");
  document.getElementsByClassName("time-summary")[0].appendChild(container);
  var timing = document.getElementsByClassName("p1");
  var invalue1 = document.getElementById("wakeuptime");
  var invalue2 = document.getElementById("lunchTime");
  var invalue3 = document.getElementById("napTime");
  var invalue4 = document.getElementById("sleepTime");

  timing[0].innerText =
    "Wakeup Time:" + " " + invalue1.options[invalue1.selectedIndex].text;
  timing[1].innerText =
    "Lunch Time:" + " " + invalue2.options[invalue2.selectedIndex].text;
  timing[2].innerText =
    "Nap Time:" + " " + invalue3.options[invalue3.selectedIndex].text;
  timing[3].innerText =
    "Sleep Time:" + " " + invalue4.options[invalue4.selectedIndex].text;
}
