var image= [];
var names= [];
var price= [];
$(".itembutton").click(function(){
    var imageval = $(".imagein").val();
    var nameval = $(".namein").val();
    var priceval = parseInt($(".pricein").val());
    price.forEach(function(){});
    image.push(imageval);
    names.push(nameval);
    price.push(priceval);
    $(".masters").append("<div class='master'><img src="+imageval+"><p>"+nameval+"</p><p>$"+priceval+"</p></div");
   var itemcart = names.length;
  $(".itemcart").text(itemcart);
  
});