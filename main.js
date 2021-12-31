const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setData(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    secondHand.innerHTML= seconds;
    minsHand.innerHTML = mins;
    if(hours > 12){
    hourHand.innerHTML = hours-12;
    }
    else{
    hourHand.innerHTML = hours;
    }
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    const minsDegree = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform =`rotate(${minsDegree}deg)`;
    const hoursDegree = ((hours / 12) * 360) + ((mins / 60) * 30) +90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setData,1000);