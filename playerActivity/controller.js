/* 
Require:
- localStorage.nightShift
*/
function Controller(){
	this.refreshColor = function () {
		var optionsIcons = $('#controller .options > div img');
		var controlsIcons = $('#controller .controls > div img');
		if (localStorage.nightShift !== undefined &&
			JSON.parse(localStorage.nightShift)){
			for (var i = 0; i < optionsIcons.length; i++) {
				optionsIcons[i].src = optionsIcons[i].src.replace(/.black/, '.white');
			}
			for (var i = 0; i < controlsIcons.length; i++) {
				controlsIcons[i].src = controlsIcons[i].src.replace(/.black/, '.white');
			}
		} else {
			for (var i = 0; i < optionsIcons.length; i++) {
				optionsIcons[i].src = optionsIcons[i].src.replace(/.white/, '.black');
			}
			for (var i = 0; i < controlsIcons.length; i++) {
				controlsIcons[i].src = controlsIcons[i].src.replace(/.white/, '.black');
			}
		}
	};
	
	this.linkMenu = function (init) { // $('#menuController')
		$('#playerEntry').click(function () {
			if (init !== undefined && init.length === 1) {
				init.show();
			}
		});
	};
}