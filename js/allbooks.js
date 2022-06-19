var list = document.querySelectorAll('li[id]')
var seeDetails= function(id){
    location.href="book-details.html?id="+ id
}
var dlist= document.getElementById("list")
var searchParam = window.location.search.replace("?q=", "").replaceAll("%20", " ").toLowerCase()
for(i=0; i<list.length; i++){
    var book = list[i]
    if (book.innerText.toLowerCase().startsWith(searchParam)) {
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
        button.style.cursor = "pointer"
        button.style.width="200px"
        button.style.padding= "15px 0"
        button.style.textAlign= "center"
        button.style.margin= "20px 10px"
        button.style.borderRadius= "25px"
        button.style.fontWeight= "bold"
        button.style.border= "2px solid #009688"
        button.style.background= "transparent"
        button.style.color= "white"
        button.style.position= "relative"
        button.style.backgroundColor="#009688"
        button.setAttribute("onclick","seeDetails("+book.id+")")
        div.appendChild(img)
        div.appendChild(about)
        div.appendChild(button)
        dlist.appendChild(div)
    }
}




