var main = document.querySelector("main")
var countdown=document.getElementById("countdown");
var days1=document.getElementById("days");
var hours1=document.getElementById("hours");
var minutes1=document.getElementById("minutes");
var seconds1=document.getElementById("seconds");
var audio=document.getElementById('myaudio')
var btn=document.getElementById('playbtn')
    var audio = document.getElementById("myaudio");
document.addEventListener("click", () => {
    audio.play();
  }); 
document.addEventListener("dblclick",()=>{
   audio.pause();
})
var ramadan = moment("2025-03-01 00:00:00")

function updateCountdown(){
var now =moment()
  if (ramadan.isBefore(now)) {
    ramadan.add(1, 'years');
  }
var diff = moment.duration(ramadan.diff(now))
var days=Math.floor(diff.asDays())
var hours=diff.hours()
var minutes=diff.minutes()
var seconds=diff.seconds()

  days1.textContent = days;
hours1.textContent = hours;
  minutes1.textContent = minutes;
  seconds1.textContent = seconds;
// countdown.innerHTML=(`${days}d ${hours}h ${minutes}m ${seconds}s`);
}
setInterval(updateCountdown,1000)
updateCountdown()










