let start = prompt("Adınız")
let myName = document.querySelector("#myName")
myName.innerHTML = `${start}`



function tarihsaat() {
    let date = new Date()
let saat = date.getHours() 
let dakika = date.getMinutes()
let saniye = date.getSeconds()
let day = date.getDay()
let hafta = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
let myClock = document.querySelector("#myClock")
    myClock.innerHTML = saat + ":" + dakika + ":" + saniye + " " + hafta[day]
}
setInterval(tarihsaat, 1000);
