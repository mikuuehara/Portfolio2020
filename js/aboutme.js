$(function(){

    $('.skills button').on('click', function () {
        let skill_class = $(this).attr("class")
        var skill_class_Array = skill_class.split(" ");
        $('.' + skill_class_Array[1] + '_exp').fadeIn(200);
    });

    $('.close , .mask').on('click', function(){
        $('.popup').fadeOut(200);
    })
});