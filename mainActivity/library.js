/* 
Require:
- localStorage.nightShift
*/
function Library() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#library .header').addClass('black');
			$('#library .header img')[0].src = $('#library .header img')[0].src.replace(/.black/, '.white');
		} else {
			$('#library .header').removeClass('black');
			$('#library .header img')[0].src = $('#library .header img')[0].src.replace(/.white/, '.black');
		}
	};
	
	var scroller = $('#library .body')[0];
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
	
	this.linkDrawer = function (init) { // $('#drawerLibrary')
		$('#library .header img').click(function () {
			if (init !== undefined && init.length === 1) {
				init.show();
			}
		});
	};
	
	this.linkSearch = function (init) { // $('#searchActivity')
		$('#library .header div').click(function () {
			if (init !== undefined && init.length === 1) {
				init.show();
			}
		});
	};
}