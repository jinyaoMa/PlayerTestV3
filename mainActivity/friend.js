/* 
Require:
- localStorage.nightShift
*/
function Friend() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#friend .header').addClass('black');
			$('#friend .header img')[0].src = $('#friend .header img')[0].src.replace(/.black/, '.white');
		} else {
			$('#friend .header').removeClass('black');
			$('#friend .header img')[0].src = $('#friend .header img')[0].src.replace(/.white/, '.black');
		}
	};
	
	var scroller = $('#friend .body')[0];
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
		if (init === undefined || init.length !== 1) {
			return;
		}
		$('#friend .header img').click(function () {
			init.show();
		});
	};
}