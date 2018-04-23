/* 
Require:
- localStorage.nightShift
*/
function Account() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#account > div:first').addClass('black');
			$('#account > div:first img')[0].src = $('#account > div:first img')[0].src.replace(/black/, 'white');
		} else {
			$('#account > div:first').removeClass('black');
			$('#account > div:first img')[0].src = $('#account > div:first img')[0].src.replace(/white/, 'black');
		}
	};
	
	var scroller = $('#account > div:last')[0];
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
	
	this.linkDrawer = function (init) { // $('#drawerAccount')
		$('#account > div:first img').click(function () {
			if (init !== undefined && init.length === 1) {
				init.show();
			}
		});
	};
}