$(".pwCheck").click(function() {
    
    let password = $(".pwInput").val();
    
    if (password === "bred") {
        
        $(".yes").show();
        $(".denied").hide();
        
    } else {
        
        $(".denied").show();
        $(".yes").hide();
        
    }
});