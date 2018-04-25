/* 
Require:
- localStorage.nightShift
- localStorage.currentPage
*/
function Navigation() {
	var minNavBtnIndex = 0;
	var maxNavBtnIndex = 3;
	var numberOfNavLinks = 4;
	
	this.refreshColor = function () {
		var icons = $('#navigation img');
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#navigation').addClass('black');
			for (var i = 0; i < icons.length; i++) {
				icons[i].src = icons[i].src.replace(/.black/, '.white');
			}
		} else {
			$('#navigation').removeClass('black');
			for (var i = 0; i < icons.length; i++) {
				icons[i].src = icons[i].src.replace(/.white/, '.black');
			}
		}
	};
	
	this.goTo = function (num) {
		if (num >= minNavBtnIndex && num <= maxNavBtnIndex) {
			$('#navigation > div').removeClass('on');
			$('#navigation > div').eq(num).addClass('on');
		}
	};
	
	this.link = function (init) { // $('.activity:first > .container > div')
		if (init === undefined || init.length !== numberOfNavLinks) {
			return;
		}
		
		var scroller = init.parent()[0];
		Transform(scroller, true);
		
		var at = new AlloyTouch({
			touch: scroller,
			vertical: false,
			target: scroller, 
			property: "translateX",
			max: 0,
			min: init.width() * (init.length - 1) * -1,
			step: init.width(),
			animationEnd:function(){
				$('#navigation > div').removeClass('on');
				$('#navigation > div').eq(this.currentPage).addClass('on');
				localStorage.currentPage = this.currentPage;
			},
			factor: 1.5,
			moveFactor: 1,
			bindSelf: false,
			spring: false,
			inertia: false,
			touchEnd:function(evt, v, index){
				var step_v = index * this.step * -1;
				var dx = v - step_v;

				if (v < this.min) {
					this.to(this.min);
				} else if (v > this.max) {
					this.to(this.max);
				} else if (Math.abs(dx) < (this.step * 0.3)) {
					this.to(step_v);

				}
				else if (dx > 0) {
					this.to(step_v + this.step);

				} else {

					this.to(step_v - this.step);
				}

				return false;
			}
		});
		
		$('#navigation > div').click(function () {
			$('#navigation > div').removeClass('on');
			$(this).addClass('on');
			at.to($(this).index() * init.width() * -1);
			localStorage.currentPage = $(this).index();
		});
		
		$('#navigation > div').eq(localStorage.currentPage).addClass('on');
		at.to(localStorage.currentPage * init.width() * -1);
	};
}