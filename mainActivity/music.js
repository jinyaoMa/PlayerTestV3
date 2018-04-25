/* 
Require:
- localStorage.nightShift
*/
function Music() {
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#music .header').addClass('black');
			$('#music .header img')[0].src = $('#music .header img')[0].src.replace(/.black/, '.white');
		} else {
			$('#music .header').removeClass('black');
			$('#music .header img')[0].src = $('#music .header img')[0].src.replace(/.white/, '.black');
		}
	};
	
	var scroller = $('#music .body')[0];
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
		$('#music .header img').click(function () {
			if (init !== undefined && init.length === 1) {
				init.show();
			}
		});
	};
}