// Review Slider
jQuery(document).ready(function () {
    const slider = jQuery('.review-slider');
    if (jQuery.fn.slick && slider.length) {
        slider.slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }},
                { breakpoint: 990, settings: { slidesToShow: 2, slidesToScroll: 2 }},
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 }},
            ]
        });
    }
    $('.toggle-btn').on('click', function (e) {
        e.preventDefault();
      
        // Find the lender-item-more and lender-card elements
        var $lenderItemMore = $(this).closest('.lender-info').find('.lender-item-more');
        var $lenderCard = $(this).closest('.lender-card');
      
        // Toggle visibility and button text with animation
        $lenderItemMore.stop(true, true).slideToggle('slow', function() {
          // Calculate the reduced width by subtracting 20%
          var cardWidth = $lenderCard.outerWidth() * 0.78; 
      
          $(this).css('width', cardWidth + 'px'); // Adjust width after animation
      
          if ($(this).is(':visible')) {
            $(this).prevAll('.toggle-btn').hide(); 
          } else {
            $(this).prevAll('.toggle-btn').show(); 
          }
        });
      });
      
      // Adjust the width dynamically on window resize
      $(window).on('resize', function () {
        $('.lender-item-more:visible').each(function () {
          var $lenderCard = $(this).closest('.lender-card');
          var cardWidth = $lenderCard.outerWidth() * 0.78; 
          $(this).css('width', cardWidth + 'px'); // Adjust width on resize
        });
      });
    

      $('.menu-toggle').on('click', function () {
        $('body').toggleClass('menu-open'); // Toggle class on the body
        $(this).toggleClass('active'); // Toggle class on the clicked button
    });

// Function to show the modal
function showModal() {
  $(".confused-modal").fadeIn(500).css("display", "flex"); // Show modal with flex display
  $("body").addClass("popup-active"); // Add class to body for styling adjustments

  // Close modal on close button click
  $(".confused-modal .close-button").on("click", function () {
      $(".confused-modal").fadeOut(500); // Fade out modal
      $("body").removeClass("popup-active"); // Remove class from body
  });
}

  // Hide the modal initially
  $(".confused-modal").hide();

  // Show the modal after 120 seconds
  // setTimeout(function () {
  //     showModal();
  // }, 120000); 

  $(document).on("mouseleave", function (event) {
    // Define the specific pages where the modal should be shown
    const targetPages = ["/index.html", "/loan-lenders"]; // Replace with your page paths

    // Get the current page pathname
    const currentPage = window.location.pathname;

    // Check if the current page is in the list of target pages
    if (targetPages.includes(currentPage)) {
        // Check if the modal has already been shown this session
        if (event.clientY <= 0 && !sessionStorage.getItem("modalShown")) {
            showModal();
            // Set a flag in sessionStorage to indicate the modal has been shown
            sessionStorage.setItem("modalShown", "true");
        }
    }
});


  // Close button functionality
  $(".btn-close-it").on("click", function () {
      $(".confused-modal").fadeOut(500, function() {
          $("body").removeClass("popup-active"); // Remove class from body
      });
  });
    
    
});
