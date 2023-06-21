

// ******************** CLOCK ***************************

let hh = document.getElementById("hour")
let mm = document.getElementById("min")
let ss = document.getElementById("sec")
let apm = document.getElementById("ampm") 
function currentTime(){
    let time = new Date();
    let hour = time.getHours()
    let ampm = hour < 12 ? 'AM' : 'PM';
    hour = hour%12
    let min = time.getMinutes()
    min = min < 10 ? '0'+min : min
    let sec = time.getSeconds()
    sec = sec < 10 ? '0'+sec : sec
    if (hour == 0) {
        hour = 12
    }
    hh.innerHTML = hour
    mm.innerHTML = min
    ss.innerText = sec
    apm.textContent = ampm
    // console.log(`${hour}:${min}:${sec} ${ampm}`)
}

setInterval(()=>{
    currentTime()
},1000)


// ******************** SET ALARM ***************************

let morning = document.getElementById("morning")
let afternoon = document.getElementById("afternoon")
let evening = document.getElementById("evening")
let night = document.getElementById("night")

let wakeupSet = document.getElementById("wakeupSet")
let lunchSet = document.getElementById("lunchSet")
let napSet = document.getElementById("napSet")
let nightSet = document.getElementById("nightSet")


function setTime(){
    wakeupSet.innerHTML = morning.options[morning.selectedIndex].innerHTML
    lunchSet.innerHTML = afternoon.options[afternoon.selectedIndex].innerHTML
    napSet.innerHTML = evening.options[evening.selectedIndex].innerHTML
    nightSet.innerHTML = night.options[night.selectedIndex].innerHTML

    let hours = new Date().getHours();
    let wakeup = document.getElementsByClassName("wakeupText")[0]

    let imgtag = document.getElementById("imgtag")

    if (morning.options[morning.selectedIndex].value == hours) {
        wakeup.innerHTML = "<h1>good morning!! wake up!!</h1>"
        imgtag.setAttribute("src", "./image/Component 30 – 1.png");
    }
    else if (afternoon.options[afternoon.selectedIndex].value == hours) {
        wakeup.setAttribute("class", "wakeupText wakeupText2")
        wakeup.innerHTML = "<h1>good afternoon!! take some sleep</h1>"
        imgtag.setAttribute("src", "./image/Component 31 – 1.png");
        
    }
    else if (evening.options[evening.selectedIndex].value == hours) {
        wakeup.innerHTML = "<h1>good evening !!</h1>"
        imgtag.setAttribute("src", "./image/lunch_image.png");
    }
    
    else if (night.options[night.selectedIndex].value == hours) {
        wakeup.innerHTML = "<h1>good night !!</h1>"
        imgtag.setAttribute("src", "./image/Component 32 – 1.png");
    }
    else{
        imgtag.setAttribute("src", "./image/Component 30 – 1.png");
        wakeup.innerHTML = "<h1>Not match with current time</h1>"
    }
}


// ******************** FOODTEXT ***************************

let foodText = document.getElementsByClassName("foodText")[0]
// console.log(foodText.innerText)

function setFoodText() {
    let hours = new Date().getHours();
   
    if (hours >= 6 && hours <= 11) {
        foodText.innerHTML = "<h1>grab some healthy breakfast!!!</h1>"
    }
    else if(hours >= 12 && hours <= 16){
        foodText.setAttribute("class", "foodText foodText2")
        // foodText.style.paddingLeft = "2.5vw"
        foodText.innerHTML = "<h1>good afternoon!! take some sleep</h1>"
    }
    else if (hours >= 17 && hours <= 20) {
        foodText.setAttribute("class", "foodText foodText2")
        foodText.innerHTML = "<h1>STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!</h1>"
    }
    else if (hours >= 21 && hours <= 23) {
        foodText.classList.remove("foodText2")
        foodText.innerHTML = "<h1>close your eyes and go to sleep</h1>"
    }
    else if (hours >= 0 && hours <= 5) {
        foodText.innerHTML = "<h1>sleeping !! Don't Disturb</h1>"
    }
}
setInterval(() => {
    setFoodText()
}, 1000);


