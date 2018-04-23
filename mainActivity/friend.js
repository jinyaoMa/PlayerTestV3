/* 
Require:
- localStorage.nightShift
*/
function Friend() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#friend > div:first').addClass('black');
			$('#friend > div:first img')[0].src = $('#friend > div:first img')[0].src.replace(/black/, 'white');
		} else {
			$('#friend > div:first').removeClass('black');
			$('#friend > div:first img')[0].src = $('#friend > div:first img')[0].src.replace(/white/, 'black');
		}
	};
	
	var scroller = $('#friend > div:last')[0];
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
	
	this.linkDrawer = function (init) { // $('#drawerFriend')
		$('#friend > div:first img').click(function () {
			if (init !== undefined && init.length === 1) {
				init.show();
			}
		});
	};
}