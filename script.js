$(document).ready(function(){
    $(".cover").click(function(){
        $(".one_content").hide();
    });
    $(".one_content .cover .times").click(function(){
        $(".one_content").hide();
    })
    $(".main img").click(function(){
        var img=$(this).data("img");
        var msg=$(this).data("msg");
        var index=$(this).data("index");
        $(".slider").children().eq(0).attr("src",`img/large/${img}`);
        $(".slider").children().eq(1).text(msg);
        $(".active").removeClass("active");
        $(".navigation").children().eq(index).children().eq(1).addClass("active");
        $(".one_content").show();       
    })
    $(".navigation .item").click(function(){
        var img=$(this).data("img");
        var msg=$(this).data("msg");
        $(".slider").children().eq(0).attr("src",`img/large/${img}`);
        $(".slider").children().eq(1).text(msg);
        $(".active").removeClass("active");
        $(this).children().eq(1).addClass("active");
    })

        $("#right_i").click(function(){
        var next=$(".active").parent().next();
        if(next.length!=0){
        var img=$(".active").parent().next().data("img");
        var msg=$(".active").parent().next().data("msg");
        $(".slider").children().eq(0).attr("src",`img/large/${img}`);
        $(".slider").children().eq(1).text(msg);
        $(".active").parent().next().children().eq(1).addClass("active");
        $(".active").removeClass("active");
        next.children().eq(1).addClass("active");
        }else{
            var img=$(".navigation").children().eq(0).data("img");
            var msg=$(".navigation").children().eq(0).data("msg");
            $(".slider").children().eq(0).attr("src",`img/large/${img}`);
            $(".slider").children().eq(1).text(msg);
            $(".active").parent().next().children().eq(1).addClass("active");
            $(".active").removeClass("active");
            $(".navigation").children().eq(0).children().eq(1).addClass("active");
        }
        
    
    })

    $("#left_i").click(function(){
        var prev=$(".active").parent().prev();
        if(prev.length!=0){
        var img=$(".active").parent().prev().data("img");
        var msg=$(".active").parent().prev().data("msg");
        $(".slider").children().eq(0).attr("src",`img/large/${img}`);
        $(".slider").children().eq(1).text(msg);          
        $(".active").removeClass("active");
        prev.children().eq(1).addClass("active");
        }else{
            var img=$(".navigation").children().eq(0).data("img");
            var msg=$(".navigation").children().eq(0).data("msg");
            $(".slider").children().eq(0).attr("src",`img/large/${img}`);
            $(".slider").children().eq().text(msg);
            $(".active").removeClass("active");
            $(".navigation").children().eq(3).children().eq(1).addClass("active");
        }
    })


     
    // function allData(){
    //     var img=$(this).data("img");
    //     var msg=$(this).data("msg");
    //     $(".slider").children().eq(0).attr("src",`img/large/${img}`);
    //     $(".slider").children().eq(1).text(msg);
    //     $(".active").removeClass("active");
    //     $(".navigation").children().eq(index).children().eq(1).addClass("active");
    // }

 })
