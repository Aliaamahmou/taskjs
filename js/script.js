var product = document.querySelectorAll("#div1 h2")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var totalprice = 0
var price = document.querySelector("#price")

product.forEach(function(item){
    item.onclick = function (){
        div.innerHTML += item.textContent + "/" 
        totalprice += +(item.getAttribute("price"))
        if(div.innerHTML != ""){
            btn.style.display ="block"
            btn.style.width ="300px"
        }
    }
})
btn.onclick = function (){
    price.innerHTML =totalprice
    console.log(totalprice)
    
 }