/* 
Require:
- localStorage.nightShift
*/
function Music() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#music > div:first').addClass('black');
			$('#music > div:first img')[0].src = $('#music > div:first img')[0].src.replace(/black/, 'white');
		} else {
			$('#music > div:first').removeClass('black');
			$('#music > div:first img')[0].src = $('#music > div:first img')[0].src.replace(/white/, 'black');
		}
	};
	
	var scroller = $('#music > div:last')[0];
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
	
	this.linkDrawer = function (init) { // $('#drawerMusic')
		$('#music > div:first img').click(function () {
			if (init !== undefined && init.length === 1) {
				init.show();
			}
		});
	};
}