$(document).ready(function () {
 $("a[href='#login']").click(function () {
     $("#login").css({border:"2px inset lightblue",padding:"10px"}).fadeIn(1000);
     $("#forgotpwd").fadeOut();
     $("#register").fadeOut();


 });
    $("a[href='#register']").click(function () {
        $("#register").css({border:"2px inset lightblue",padding:"10px"}).fadeIn(1000);
        $("#login").fadeOut();
        $("#forgotpwd").fadeOut();
    });
    $("a[href='#forgotpwd']").click(function () {
        $("#forgotpwd").css({border:"2px inset lightblue",padding:"10px"}).fadeIn(1000);
        $("#login").fadeOut();
        $("#register").fadeOut();
    });
});