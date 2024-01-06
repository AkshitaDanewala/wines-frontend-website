var servicebox1topfront = document.querySelector(".servicebox1-top-front")
var servicebox1botttomfront = document.querySelector(".servicebox1-bottom-front")
var servicebox3topfront = document.querySelector(".servicebox3-top-front")
var servicebox3bottomfront = document.querySelector(".servicebox3-bottom-front")


var h41 = document.querySelector(".click1")
var h42 = document.querySelector(".click2")
var h43 = document.querySelector(".click3")
var h44 = document.querySelector(".click4")
var closes1 = document.querySelector(".close1")
var closes2 = document.querySelector(".close2")
var closes3 = document.querySelector(".close3")
var closes4 = document.querySelector(".close4")



h41.addEventListener("click", function(){
    servicebox1topfront.style.top = "-750%"
    // servicebox1topfront.style.display = "none"
})
closes1.addEventListener("click",function(){
    servicebox1topfront.style.top = "0%"

})



h42.addEventListener("click", function(){
    servicebox1botttomfront.style.top = "-850%"
    // servicebox1topfront.style.display = "none"
})
closes2.addEventListener("click",function(){
    servicebox1botttomfront.style.top = "0%"

})



h43.addEventListener("click", function(){
    servicebox3topfront.style.top = "-750%"
    // servicebox1topfront.style.display = "none"
})
closes3.addEventListener("click",function(){
    servicebox3topfront.style.top = "0%"

})

h44.addEventListener("click", function(){
    servicebox3bottomfront.style.top = "-850%"
    // servicebox1topfront.style.display = "none"
})
closes4.addEventListener("click",function(){
    servicebox3bottomfront.style.top = "0%"

})


