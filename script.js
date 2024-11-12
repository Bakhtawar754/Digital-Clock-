function digitalClock(){
    const time = new Date();
    let hours = time.getHours();
    let  minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let session = "PM" ;
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('clock').innerHTML =  hours + ":" + minutes + ":" + seconds +" " + session;
    setTimeout(digitalClock, 1000);
   } 
   function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }