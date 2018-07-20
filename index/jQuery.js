$(document).ready(function(){
    $("#home").mouseenter(function(){
        $("#home").append("HOME");
    $("#home").mouseleave(function(){
        $("#home").remove("HOME");
        });
    });
});