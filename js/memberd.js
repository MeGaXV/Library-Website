
var params = location.search.substring(1).split("&")
var param={"id":""}
param.id=params[0].split("=")[1]
console.log(param)
var list= document.querySelectorAll("li[id")
for (var i =0;i<list.length;i++){
    if(param.id==list[i].id){
        var det= document.getElementById("mdet")
        var mname = list[i].nextElementSibling.nextElementSibling.innerText+list[i].nextElementSibling.nextElementSibling.nextElementSibling.innerText
        var email = list[i].innerText
        det.innerHTML="Name: "+ mname + "<br/> Email: "+ email
    }
}
