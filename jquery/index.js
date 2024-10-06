$('#show-btn').click(function(){
     $('#view').show();
})

$('#hide-btn').click(function(){
    $('#view').hide();
})


    $('#hom').hide();
    $('#abo').hide();
    $('#cus').hide();
    $('#itm').hide();

$('#home-btn').click(function(){
    $('#hom').show();
    $('#abo').hide();
    $('#cus').hide();
    $('#itm').hide();
})
$('#About-btn').click(function(){
    $('#hom').hide();
    $('#abo').show();
    $('#cus').hide();
    $('#itm').hide();
})
$('#Customer-btn').click(function(){
    $('#hom').hide();
    $('#abo').hide();
    $('#cus').show();
    $('#itm').hide();
})
$('#item-btn').click(function(){
    $('#hom').hide();
    $('#abo').hide();
    $('#cus').hide();
    $('#itm').show();
})
$('#logo').click(function(){
    $('#hom').hide();
    $('#abo').hide();
    $('#cus').hide();
    $('#itm').hide();
})
