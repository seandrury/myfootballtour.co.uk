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

$(function() {
  	expandMainNav();
	
	if ($('.interactive-map').length > 0) {
		toggleColourMode();

		toggleAccessibilityMode();
  	}

	// console.log('function');
})