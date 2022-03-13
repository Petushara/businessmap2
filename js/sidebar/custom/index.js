// скрипт слайдера выбора гос. стоимости бизнесов
$(".polzunok-busuness1").slider({
    min:10000,
    max:500000,
    values: [10000, 500000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-busuness1-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-busuness1-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-busuness1-left").val($(".polzunok-busuness1").slider("values", 0));
$(".polzunok-input-busuness1-right").val($(".polzunok-busuness1").slider("values", 1));
$(".polzunok-container-busuness1 input").change(function() {
    var input_left = $(".polzunok-input-busuness1-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-busuness1").slider("option", "min"),
    where_right = $(".polzunok-busuness1").slider("values", 1),
    input_right = $(".polzunok-input-busuness1-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-busuness1").slider("option", "max"),
    where_left = $(".polzunok-busuness1").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-busuness1-left").val(input_left); 
    $(".polzunok-input-busuness1-right").val(input_right); 
    if (input_left != where_left) {
        $(".polzunok-busuness1").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-busuness1").slider("values", 1, input_right);
    }

});
// скрипт слайдера выбора гос. стоимости бизнесов
$(".polzunok-busuness2").slider({
    min:565,
    max:30775,
    values: [565, 30775],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-busuness2-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-busuness2-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-busuness2-left").val($(".polzunok-busuness2").slider("values", 0));
$(".polzunok-input-busuness2-right").val($(".polzunok-busuness2").slider("values", 1));
$(".polzunok-container-busuness2 input").change(function() {
    var input_left = $(".polzunok-input-busuness2-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-busuness2").slider("option", "min"),
    where_right = $(".polzunok-busuness2").slider("values", 1),
    input_right = $(".polzunok-input-busuness2-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-busuness2").slider("option", "max"),
    where_left = $(".polzunok-busuness2").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-busuness2-left").val(input_left); 
    $(".polzunok-input-busuness2-right").val(input_right); 
    if (input_left != where_left) {
        $(".polzunok-busuness2").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-busuness2").slider("values", 1, input_right);
    }

});