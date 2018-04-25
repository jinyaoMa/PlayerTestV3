/* 
Require:
- localStorage.nightShift
*/
function Account() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#account .header').addClass('black');
			$('#account .header img')[0].src = $('#account .header img')[0].src.replace(/.black/, '.white');
		} else {
			$('#account .header').removeClass('black');
			$('#account .header img')[0].src = $('#account .header img')[0].src.replace(/.white/, '.black');
		}
	};
	
	var scroller = $('#account .body')[0];
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
		if (init === undefined || init.length !== 1) {
			return;
		}
		$('#account .header img').click(function () {
			init.show();
		});
	};
}