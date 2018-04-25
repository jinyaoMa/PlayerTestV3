/* 
Require:
- localStorage.nightShift
*/
function PlayerEntry(){
	var speed = 3;
	var lineLength = [88, 200, 144, 256];
	var lineSpeedMultiple = [4 * speed, 4 * speed, 4 * speed, 4 * speed];
	
	var canvas = $('#playerEntry canvas')[0];
	var paint = canvas.getContext('2d');
	
	paint.lineCap = "round";
	refreshColor();
	draw();

	function refreshColor() {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			paint.strokeStyle = R.color.white;
		} else {
			paint.strokeStyle = R.color.black;
		}
		draw();
	}
	
	function draw() {
		for (var i = 0; i < lineLength.length; i++) {
			line(i, lineLength[i]);
		}
	}
	
	function line(num, len) {
		paint.beginPath();
		paint.lineWidth = 32;
		paint.moveTo(64 * (num + 1), canvas.height - paint.lineWidth);
		paint.lineTo(64 * (num + 1), canvas.height - paint.lineWidth - len);
		paint.stroke();
		paint.closePath();
	}
	
	this.refreshColor = refreshColor;
	
	this.run = function() {
		$('#playerEntry').addClass('run');
		this.interval = setInterval(function(){
			paint.clearRect(0,0,320,320);
			for (var i = 0; i < lineLength.length; i++) {
				if (lineLength[i] < 32 || lineLength[i] > 256) {
					lineSpeedMultiple[i] *= -1;
				}
				lineLength[i] += lineSpeedMultiple[i];
				line(i, lineLength[i]);
			}
		}, 100);
	};
	
	this.stop = function() {
		$('#playerEntry').removeClass('run');
		clearInterval(this.interval);
	};
	
	this.link = function (view) { // $('#playerActivity')
		if (view === undefined || view.length !== 1) {
			return;
		}
		$('#playerEntry').click(function () {
			view.show();
		});
	};
}