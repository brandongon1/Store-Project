var image= [];
var names= [];
var price= [];
var totalprice;
$(".itembutton").click(function(){
    totalprice=0;
    var imageval = $(".imagein").val();
    var nameval = $(".namein").val();
    var priceval = parseInt($(".pricein").val());
   
    image.push(imageval);
    names.push(nameval);
    price.push(priceval);
    $(".masters").append("<div class='master'><img src="+imageval+"><p>"+nameval+"</p><p>$"+priceval+"</p></div");
     price.forEach(function(total){});
    //totalprice = totalprice+parseInt(total);
    var itemcart = names.length;
  $(".itemcart").text(itemcart);
  
});