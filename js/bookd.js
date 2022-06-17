var bookUrl= "https://www.googleapis.com/books/v1/volumes?q="
var output= document.getElementById("details");
$.ajax({
    url: bookUrl+"harry potter",
    dataType: "json",
    success: function(res){
        console.log(res)
    }
})