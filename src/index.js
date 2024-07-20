import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'computer'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

function toggleColourMode() {
	$(".toggle-colours .checkbox").change(function() {
		if(this.checked) {
			$(".interactive-map").removeClass('team-colours');
			$(".interactive-map").addClass('league-colours');
		}
	});
}

$(function() {
  	if ($('.interactive-map').length > 0) {
		toggleColourMode();

		toggleAccessibilityMode():
  	}
})