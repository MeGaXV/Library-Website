var list = document.querySelectorAll('li[id]')
var seeDetails= function(id){
    location.href="member-details.html?id="+ id
}
var dlist= document.getElementById("list")
var searchParam = window.location.search.replace("?q=", "").replaceAll("%20", " ").toLowerCase()
for(i=0; i<list.length; i++){
    var member = list[i]
    if (member.innerText.toLowerCase().startsWith(searchParam)) {
        var div = document.createElement('div')
        div.className="details"
        var img= document.createElement('div')
        img.className="image"
        img.innerHTML="<img src="+member.nextElementSibling.innerText+" class='cover'/>"
        var about = document.createElement("div")
        about.className="authpub"
        about.innerHTML = "Email: "+ member.innerText+ "<br/> First Name: "+member.nextElementSibling.nextElementSibling.innerText+"<br/> Last Name: "+ member.nextElementSibling.nextElementSibling.nextElementSibling.innerText
        
        var button = document.createElement("input")
        button.setAttribute("type","button")
        button.setAttribute("value","Read More")
        button.style.cursor = "pointer"
        button.setAttribute("onclick","seeDetails("+member.id+")")
        div.appendChild(img)
        div.appendChild(about)
        div.appendChild(button)
        dlist.appendChild(div)
    }
}