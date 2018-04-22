/* 
Require:
- localStorage.nightShift
*/
function Library() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#library > div:first-child').addClass('black');
			$('#library > div:first-child img')[0].src = $('#library > div:first-child img')[0].src.replace(/black/, 'white');
		} else {
			$('#library > div:first-child').removeClass('black');
			$('#library > div:first-child img')[0].src = $('#library > div:first-child img')[0].src.replace(/white/, 'black');
		}
	};
	
	var scroller = $('#library > div:last')[0];
	Transform(scroller, true);
	var at = new AlloyTouch({
		touch: scroller,
		vertical: true,
		target: scroller, 
		property: "translateY",
		max: 0,
		min: window.innerHeight - scroller.scrollHeight,
		factor: 1.5,
		moveFactor: 1,
		bindSelf: false,
		spring: false,
		inertia: false
	});
}