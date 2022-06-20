const currentTime = document.querySelector("h1");
const selctMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("button");
const content = document.querySelector(".content");

let alarmTime;
let isalertSet = false ;
ringtone = new Audio("files/audio/alarmclock.mp3");

for (let hour = 12; hour > 0 ; hour--) {
    hour = hour < 10 ? "0" + hour : hour ;
    let option = `<option value="${hour}">${hour}</option>`;
    selctMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
    
}
for (let minute = 59; minute > -1 ; minute--) {
    minute = minute < 10 ? "0" + minute : minute ;
    let option = `<option value="${minute}">${minute}</option>`;
    selctMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
    
}
for (let ampm = 2; ampm > 0 ; ampm--) {
    let amMp = ampm == 1 ? "AM" : "PM";
    let option = `<option value="${amMp}">${amMp}</option>`;
    selctMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
    
}

setInterval(()=>{
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";

    if(h>=12){
        h=h-12;
        ampm ="PM"
    }

    h = h == 0 ? h = 12 : h;
    h = h <10 ? "0"+ h : h;
    m = m <10 ? "0"+ m : m;
    s = s <10 ? "0"+ s : s;
    
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if(alarmTime == `${h}:${m} ${ampm}`){
        console.log("True");
        ringtone.play();
        ringtone.loop = true;
    }

}, 1000);
function setAlarm(){
    if(isalertSet){
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isalertSet = false ;

    }
    let time = `${selctMenu[0].value}:${selctMenu[1].value} ${selctMenu[2].value}` ;
    
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Please selct valid time to set alarm");
    }
    isalertSet = true ;
    alarmTime = time ;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
  
}
setAlarmBtn.addEventListener("click", setAlarm);