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
			$(".map-region img").attr("src", newImage);
			$(".map-region #region-heading").html("Showing " + regionName);

			$(".map-region").fadeIn();
			$(".region-pins." + regionId).fadeIn("500");
		})
	});

	$(".map-region .show-all")
	.unbind()
	.click(function (e) {
		e.preventDefault();

		$(".region-pins").fadeOut("500");

		$(".map-region").fadeOut(function() {
			$(".map-all svg").fadeIn();
		})
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