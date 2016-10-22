// /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
// }
// $(document).ready(function() {      
   
// });


$(document).ready(function() {

	// $(".logo").fadeIn(3000);



	$('#myCarousel').carousel({
	interval: 100
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	alert("slid");
	});
    
    
});

