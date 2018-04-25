/* 
Require:
- localStorage.nightShift
*/
function Phonograph(){
	var canvasRod = $('#phonograph .body').find('.rod')[0];
	var canvasAnime = $('#phonograph .body').find('.anime')[0];
	var paintRod = canvasRod.getContext('2d');
	var paintAnime = canvasAnime.getContext('2d');
	
	fill();
	drawRod(paintRod);
	
	function fill(attr) {
		if (attr === undefined) {
			$('#phonograph .title').text(R.string.name);
			$('#phonograph .artist').text(R.string.name);
		}
	}
	
	function drawRod(paint) {
		paint.lineCap = 'round';
		
		paint.beginPath();
		paint.strokeStyle = 'rgba(255,255,255,0.6)';
		paint.lineWidth = 64;
		paint.moveTo(160,32);
		paint.lineTo(160,32);
		paint.stroke();
		paint.closePath();
		
		paint.beginPath();
		paint.strokeStyle = 'lightgray';
		paint.shadowBlur = 32;
		paint.shadowColor = "black";
		paint.lineWidth = 16;
		paint.moveTo(160,32);
		paint.lineTo(160,160);
		paint.lineTo(288,288);
		paint.stroke();
		paint.closePath();
		
		paint.beginPath();
		paint.strokeStyle = 'white';
		paint.lineWidth = 48;
		paint.moveTo(160,32);
		paint.lineTo(160,32);
		paint.stroke();
		paint.closePath();
		
		paint.beginPath();
		paint.shadowBlur = 0;
		paint.strokeStyle = 'lightgray';
		paint.lineWidth = 16;
		paint.moveTo(160,32);
		paint.lineTo(160,32);
		paint.stroke();
		paint.closePath();
		
		paint.beginPath();
		paint.shadowBlur = 32;
		paint.strokeStyle = 'black';
		paint.lineWidth = 8;
		paint.moveTo(220,220);
		paint.lineTo(288,288);
		paint.stroke();
		paint.closePath();
		
		paint.strokeStyle = 'white';
		
		paint.beginPath();
		paint.lineWidth = 28;
		paint.moveTo(250,250);
		paint.lineTo(288,288);
		paint.stroke();
		paint.closePath();
		
		paint.beginPath();
		paint.lineWidth = 48;
		paint.moveTo(276,276);
		paint.lineTo(288,288);
		paint.stroke();
		paint.closePath();
		
		paint.strokeStyle = 'lightgray';
		paint.shadowBlur = 8;
		paint.lineWidth = 2;
		
		paint.beginPath();
		paint.moveTo(272-6,272+6);
		paint.lineTo(292-6,292+6);
		paint.stroke();
		paint.closePath();
		
		paint.beginPath();
		paint.moveTo(278,266);
		paint.lineTo(298,286);
		paint.stroke();
		paint.closePath();
	}
	
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#phonograph .header').css('background-color', R.color.black);
			$('#phonograph .disc').addClass('reverse');
		} else {
			$('#phonograph .header').css('background-color', R.color.white);
			$('#phonograph .disc').removeClass('reverse');
		}
	};
	
	this.fill = fill;
	
	this.linkLyric = function (view) { // $('#lyric')
		if (view === undefined || view.length !== 1) {
			return;
		}
		
		var scroller = view.parent()[0];
		Transform(scroller, true);
		
		var at = new AlloyTouch({
			touch: scroller,
			vertical: false,
			target: scroller, 
			property: "translateX",
			max: 0,
			min: view.width() * (view.length - 1) * -1,
			step: view.width(),
			animationEnd:function(){
				if (this.currentPage === 1) {
					controller.hide();
				} else {
					controller.show();
				}
			},
			factor: 1.5,
			moveFactor: 1,
			bindSelf: false,
			spring: false,
			inertia: false,
			touchEnd: function(evt, v, index){
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
	};
}