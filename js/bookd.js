
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
document.getElementById("title").innerText=list[param.id-1].innerText
var dateb= document.getElementById("Dateb")
var dater= document.getElementById("Dater")
dateb.innerHTML=list[param.id-1].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText
dater.innerHTML=list[param.id-1].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText
var rev = document.getElementById("Reviews")
var temp= list[param.id-1].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText.split(":")
rev.innerHTML="<em>"+temp[0]+"</em>: <q>"+temp[1]+"</q>"