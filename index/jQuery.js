$(document).ready(function(){
    /*window.addEventListener("resize", showTitles);*/
    function showTitles() {
        var width = $(window).width();
        if (width > 800) {
            $("#home").mouseenter(function(){
                $("#homeTitle").show();
            });
            $("#home").mouseleave(function(){
                $("#homeTitle").hide();
            });
            $("#search").mouseenter(function(){
                $("#searchTitle").show();
            });
            $("#search").mouseleave(function(){
                $("#searchTitle").hide();
            });
            $("#code").mouseenter(function(){
                $("#codeTitle").show();
            });
            $("#code").mouseleave(function(){
                $("#codeTitle").hide();
            });
            $("#contact").mouseenter(function(){
                $("#contactTitle").show();
            });
            $("#contact").mouseleave(function(){
                $("#contactTitle").hide();
            });
        }
    }
    showTitles();
});
