    $(document).ready(function () {
        var floorPath =$(".home path");
        var currentFloor = 2;
        var counteUp = $(".counter-up")
        var counteDown = $(".counter-down")
        var modal =$ (".modal");
        var modalCloseButton =$('.modal-close-button')

        $ (".home path").on("mouseover" , function () {
            $(".home path").removeClass("current-floor");
            currentFloor=$(this).attr("data-floor");
            $(".counter").text(currentFloor);
            
         });
         
         floorPath.on('click',function (){
                modal.toggleClass('is-open');
            });
        modalCloseButton.on('click',function (){
                modal.toggleClass('is-open');
            });

         counteUp.on("click",function(){
             if (currentFloor <18) {
                currentFloor++;
                usCurrentFloor =currentFloor.toLocaleString ("en-US",{minimumIntegerDigits:2,useGrouping:false});
                $(".counter").text(usCurrentFloor);
                $(".home path").removeClass("current-floor");
                $ (`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
             }
         });
         counteDown.on('click',function (){
             if (currentFloor >2) {
                 currentFloor --;
                 usCurrentFloor =currentFloor.toLocaleString ("en-US",{minimumIntegerDigits:2,useGrouping:false});
                 $(".counter").text(usCurrentFloor);
                 $(".home path").removeClass("current-floor");
                $ (`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");

             }
         })
    }); 