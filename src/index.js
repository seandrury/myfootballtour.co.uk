import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'computer'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

// function expandMainNav() {
// 	$(document).ready(function(){
// 		$(".nav").hover(
// 			function() {
// 				setTimeout(function() {
// 					$(".nav .nav-list .nav-item .nav-link").removeAttr("hidden").show(); // Remove hidden attribute and show the element
// 				}, 400);
// 			}, 
// 			function() {
// 				$(".nav .nav-list .nav-item .nav-link").attr("hidden", true).hide(); // Add hidden attribute and hide the element (optional)
// 			}
// 		);
// 	});
// }

function toggleColourMode() {
	$(".toggle-colours .switch input[type='checkbox']").change(function() {
		if(this.checked) {
			$(".interactive-map").removeClass('team-colours');
			$(".interactive-map").addClass('league-colours');
		}
		else {
			$(".interactive-map").addClass('team-colours');
			$(".interactive-map").removeClass('league-colours');
		}
	});
}

function toggleAccessibilityMode() {
	$(".toggle-accessibility .switch input[type='checkbox']").change(function() {
		if(this.checked) {
			$(".interactive-map").addClass('accessibility-mode');
		}
		else {
			$(".interactive-map").removeClass('accessibility-mode');
		}
	});
}

function setupMap() {
	
	$(".interactive-map .clickable-region")
	.unbind()
	.click(function (e) {
		e.preventDefault();

		var regionName = $(this).attr("data-name");
		var regionId = $(this).attr("data-id");

		var newImage = "https://myfootballtour.ddev.site/assets/images/maps/" + regionId + ".svg";

		$(".map-all svg").fadeOut(function() {
			$(".map-region img.map-image").attr("src", newImage);
			$(".map-region #region-heading").html("Showing " + regionName);

			$(".map-region").fadeIn();
			$(".region-pins." + regionId).fadeIn("500");
			$(".region-teams." + regionId).fadeIn("500");
		})
	})
	// .hover(function() {
	// 	$(".interactive-map .clickable-region").css("fill","#ffffff")
	// 	$(this).css("fill","")

		
	// });

	// $(".clickable-region").hover(function() {
    //     // On hover
    //     $(".clickable-region").not(this).addClass("inactive");

	// 	$(this).addClass("active");
    // }, function() {
    //     // On mouse leave
    //     $(".clickable-region").removeClass("active");
    // });

    // $("#map-all").mouseleave(function() {
    //     // When the mouse leaves the SVG
    //     $(".clickable-region").removeClass("active");
	// 	$(".clickable-region").removeClass("inactive");
    // });

	$(".map-region .show-all")
	.unbind()
	.click(function (e) {
		e.preventDefault();

		$(".region-pins").fadeOut();
		$(".region-teams").fadeOut();
		$(".stadium-modal").fadeOut();

		$(".map-region").fadeOut(function() {
			$(".map-all svg").fadeIn();
		})
	});

	$(".stadium-pin")
	.unbind()
	.click(function (e) {
		e.preventDefault();
		var $this = $(this);
		
		var id = $this.attr("id");

		$(".stadium-modal").fadeOut();
		// $(".stadium-modal." + id).removeClass("hidden");
		$(".stadium-modal." + id).fadeIn(500);
	});

	$("#select-leagues input[type='checkbox']").change(function() {
		var $this = $(this);
		var league = $this.attr("name");

		$(".stadium-modal").fadeOut();

		if(this.checked) {
			$("." + league + " .stadium-pin").removeClass('d-none');
		}
		else {
			$("." + league + " .stadium-pin").addClass('d-none');
		}
	});


}

$(function() {
  	// expandMainNav();
	
	if ($('.interactive-map').length > 0) {
		toggleColourMode();

		toggleAccessibilityMode();

		setupMap();
  	}

	// console.log('function');
})