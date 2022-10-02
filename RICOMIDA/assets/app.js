$(function(){
    $( '[data-bs-toggle]' ).tooltip();

    $("#enviarcorreo").click(function(){
        alert("El correo fue enviado correctamente...");

    });
   } );


$(".title-prep").dblclick(function(){
    $(this).css("color", "red");

} )

$(".card-title").click(function(){
    $(".card-text").toggle();
});


