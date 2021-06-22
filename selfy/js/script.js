jQuery(document).ready(function ($) {
    $(".burger__container").on("click", function(){
        let navToggle = $("#navToggle");
        let nav = $("#nav");
        $(this).toggleClass("change");
        nav.toggleClass("display");
    });
    let modalCall = $("[data-modal]");
    function addCssScale(element, value){
        $(element).find(".modal__dialog").css({
            transform: "scale("+ value +")"
        });
    }
    modalCall.on("click", function(event){
        event.preventDefault();
        let modal = $(".modal");
        modal.addClass("show");
        $("body").addClass("no-scroll");
        setTimeout(function(){
            addCssScale(modal, 1);
        }, 200);
        hideImages($(this).data("modal"));
    });
    $(".modal").on("click", function(){
    
        $(this).removeClass("show");
        $("body").removeClass("no-scroll");

        addCssScale(this, 0);

    });

    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
    });
    let imgCounter = 0;
    let imgs = $(".slider__photo");
    function hideImages(imgId){
        imgCounter = imgId;
        for (let i = 0; i < imgs.length; i++) {
            if(i == imgId){
                $(imgs[imgId]).addClass("show__image");
                $(imgs[imgId]).removeClass("hide__image");
            }else{
                $(imgs[i]).addClass("hide__image");
                $(imgs[i]).removeClass("show__image");
            }
        }
        
    }
    function checkImgId() {
        let imgsLength = imgs.length;
        if(imgCounter < 0){
            imgCounter = imgsLength-1;
        }

        if(imgCounter > imgsLength-1){
            imgCounter = 0;
        }
    }
    $(".prev").on("click", function() {
        imgCounter--;
        checkImgId();
        hideImages(imgCounter);
    });
    $(".next").on("click", function() {
        imgCounter++;
        checkImgId();
        hideImages(imgCounter);
    });
});    
      