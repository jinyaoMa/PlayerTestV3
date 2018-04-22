/* 
Require:
- localStorage.nightShift
*/
function Navigation() {
	var minNavBtnIndex = 0;
	var maxNavBtnIndex = 3;
	
	refreshColor();

	function refreshColor() {
		var icons = $('#navigation img');
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#navigation').addClass('black');
			for (var i = 0; i < icons.length; i++) {
				icons[i].src = icons[i].src.replace(/black/, 'white');
			}
		} else {
			$('#navigation').removeClass('black');
			for (var i = 0; i < icons.length; i++) {
				icons[i].src = icons[i].src.replace(/white/, 'black');
			}
		}
	};
	
	this.refreshColor = refreshColor;
	
	this.goTo = function (num) {
		if (num >= minNavBtnIndex && num <= maxNavBtnIndex) {
			$('#navigation > div').removeClass('on');
			$('#navigation > div').eq(num).addClass('on');
		}
	};
	
	this.link = function (init) { // $('#container > div')
		$('#navigation > div').click(function () {
			$('#navigation > div').removeClass('on');
			$(this).addClass('on');
			if (init !== undefined && init.length === 4) {
				init.hide();
				init.eq($(this).index()).show();
			}
		});
	};
}