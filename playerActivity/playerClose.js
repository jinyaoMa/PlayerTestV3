/* 
Require:
- localStorage.nightShift
*/
function PlayerClose(){
	this.refreshColor = function () {
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			$('#playerClose img')[0].src = $('#playerClose img')[0].src.replace(/.black/, '.white');
		} else {
			$('#playerClose img')[0].src = $('#playerClose img')[0].src.replace(/.white/, '.black');
		}
	};
	
	this.link = function (view) { // $('#playerActivity')
		if (view === undefined || view.length !== 1) {
			return;
		}
		$('#playerClose').on('click', function () {
			view.removeClass('open');
		});
	}
}