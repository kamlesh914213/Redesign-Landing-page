
$(document).ready(function(){
    $(".sec-1-card").owlCarousel({
        loop: true, 
        margin: 10,
        dots: true, 
        autoplay: true,
        responsive: { 
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            900: {
                items: 3
            },
            1000: {
                items: 3
            }
            ,
            1200: {
                items: 4
            }
        }
    });
});


// for sidebar
function openNav() {
    document.getElementById("mySidepanel").style.left = "0%";
}
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.left = "100%";
}

