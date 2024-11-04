var Responsive =
{
init: function()
{
var link = document.getElementsByClassName("topnav");
$(link).bind("click", clickListener);
function clickListener()
{
document.getElementsByClassName("topnav")[0].classList.toggle("toggleclass");
}// end of clickListener function
}// end of init function
}; //end of object
 Responsive.init();

        var slideIndex = 0;
        showSlides();
 
    function showSlides() {
          var i;
         var slides = document.getElementsByClassName("mySlides");
         for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
         }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
         setTimeout(showSlides, 5000); // Change image every 2 seconds
     }