var bookUrl= "https://www.googleapis.com/books/v1/volumes?q="
var output= document.getElementById("details");
$.ajax({
    url: bookUrl+"harry potter",
    dataType: "json",
    success: function(res){
        console.log(res)
    }
})
var params = location.search.substring(1).split("&")
var param={"id":""}
param.id=parseInt(params[0].split("=")[1])
console.log(param)
var list=document.querySelectorAll("li[id]")
var author = document.getElementById('authpub')
var auth = list[param.id-1].nextElementSibling.nextElementSibling.innerText
var img = document.getElementById("cover")
img.setAttribute("src", list[parseInt(param.id)-1].nextElementSibling.innerText)
var pub = list[param.id-1].nextElementSibling.nextElementSibling.nextElementSibling.innerText
author.innerHTML= "Author: "+ auth +"<br/> Publisher: " + pub
var abs = document.getElementById("abstract")
abs.innerText = list[param.id-1].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText
var title = document.getElementById("bookTitle")
title.innerText=list[param.id-1].innerText
var stock= document.getElementById("availability")
stock.innerText="In Stock: "+list[param.id-1].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText