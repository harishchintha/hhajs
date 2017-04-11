$(document).ready(function () {
    $(".logos").hide();
    $("#hslogo").hide;
    $("#course").click(function () {
        var opt=$("#course option:selected");
        switch (opt.val()){
            case "HTML":
                $("#html").show();
                $("#htmllogo").css({height: 300, width: 300});
                $("a").click(function() {
                    $("#htmllogo").css({height: 200, width: 200})
                });
                $(".logo").children().not("#html").hide();
                break;
            case "CSS3":
                $("#css3").show();
                $(".logo").children().not("#css3").hide();
                $("#csslogo").css({height: 300, width: 300});
                $("a").click(function() {
                    $("#csslogo").css({height: 200, width: 200})
                });
                break;
            case "JS":
                $("#js").show();
                $(".logo").children().not("#js").hide();
                break;
            case "BOOTSTRAP":
                $("#bs").show();
                $(".logo").children().not("#bs").hide();
                break;
            case "JQUERY":
                $("#jq").show();
                $(".logo").children().not("#jq").hide();
                break;
            case "ANGULARJS":
                $("#ajs").show();
                $(".logo").children().not("#ajs").hide();
                break;
            case "PHP":
                $("#php").show();
                $(".logo").children().not("#php").hide();
                break;
            case "MYSQL":
                $("#mysql").show();
                $(".logo").children().not("#mysql").hide();
                break;
            default:
                $("#hslogo").show();
                $(".logo").children().not("#hslogo").hide();
        }

    });

});