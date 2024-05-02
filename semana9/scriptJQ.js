$("#bt1").click(function (event) { 
    $("div.cuadro").each(function( index ) {
       if ($("div.cuadro").css("background-color")!='red') {
        $("div.cuadro").css("background-color","red");
       }
       else{
        $("div.cuadro").css("background-color","blue");
       }
      });
});
$("#bt2").click(function (event) { 
    $("div.cuadro").each(function( index ) {
       if ($("div.cuadro").css("border-radius")!='0%') {
        $("div.cuadro").css("border-radius","25%");
       }
       else{
        $("div.cuadro").css("border-radius","0%");
       }
      });
});
$("#bt3").click(function (event) { 
    $("#contenedor").append("<div class='cuadro'></div>");
});