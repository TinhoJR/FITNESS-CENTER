$(document).ready(function() {

    let motivesBtn = $(".motives-btn");

     motivesBtn.on("click", function() {

        let currentMotive = $(this).data("motive");

        let motivesInfo = $(".motives-info");

        $(".motives-btn").removeClass("active");

        motivesInfo.css("display", "none");

        $("#" + currentMotive).css("display", "block");

         $(this).addClass("active");

     });

     $("#defaultMotive").click();

     






    
})