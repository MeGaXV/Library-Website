var list = document.querySelectorAll('li[id]')
var seeDetails= function(id){
    location.href="book-details.html?id="+ id
}
var dlist= document.getElementById("list")
for(i=0; i<list.length; i++){
    var book = list[i]
    var div = document.createElement('div')
    div.className="details"
    var img= document.createElement('div')
    img.className="image"
    img.innerHTML="<img src="+book.nextElementSibling.innerText+" class='cover'/>"
    var about = document.createElement("div")
    about.className="authpub"
    about.innerHTML = "Title: "+ book.innerText+ "<br/> Author: "+book.nextElementSibling.nextElementSibling.innerText+"<br/> Publisher: "+ book.nextElementSibling.nextElementSibling.nextElementSibling.innerText
    
    var button = document.createElement("input")
    button.setAttribute("type","button")
    button.setAttribute("value","Read More")
    console.log(book.id)
    button.setAttribute("onclick","seeDetails("+book.id+")")
    div.appendChild(img)
    div.appendChild(about)
    div.appendChild(button)
    dlist.appendChild(div)
}




