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
	
	this.hide = function () {
		$('#controller').addClass('hide');
	};
	
	this.show = function () {
		$('#controller').removeClass('hide');
	};
	
	this.linkMenu = function (view) { // $('#menuController')
		if (view !== undefined && view.length === 1) {
			return;
		}
		
	};
	
	this.linkPlaylist = function (view) { // $('#playlistController')
		if (view !== undefined && view.length === 1) {
			return;
		}
		view.show();
	};
	
	this.linkAudio = function (view) { // $('#audio')
		if (view === undefined || view.length !== 1) {
			return;
		}
		
		var btn = $('#controller .button');
		var bar = $('#controller .bar');
		var cur_bar = $('#controller .current');
		var minLength = bar.offset().left; 
		var maxLength = minLength + bar.width();
		var currentX = btn.offset().left;
		var currentY = btn.offset().top;
		var pass = $('#controller .pass');
		var left = $('#controller .left');
	
		bar.on('touchstart', function (e) {
			var moveX = e.touches[0].clientX;
			var moveY = e.touches[0].clientY;
			if(moveX < minLength){
				cur_bar.css("width", "0%");
				currentX = minLength;
			}else if(moveX > maxLength){
				cur_bar.css("width","100%");
				currentX = maxLength;
			}else{
				var percent = ((moveX - minLength) * 100) / (maxLength - minLength);
				cur_bar.css("width", percent+"%");
				currentX = moveX;
			}
		});
		
		var mode = $('#controller .mode');
		var prev = $('#controller .prev');
		var play = $('#controller .play');
		var next = $('#controller .next');
		var list = $('#controller .list');
		
		play.on('touchstart', 'img', function(e){
			var icon = $(this)[0];
			if (icon.src === icon.src.replace(/play./, 'pause.')) {
				icon.src = icon.src.replace(/pause./, 'play.');
			} else {
				icon.src = icon.src.replace(/play./, 'pause.');
			}
		});
		
		prev.on('touchstart', 'img', function(){
			if (false) {
				
			} else {
				
			}
		});
		
		next.on('touchstart', 'img', function(){
			if (false) {
				
			} else {
				
			}
		});
		
		mode.on('touchstart', 'img', function(){
			
		});
		
		list.on('touchstart', 'img', function(){
			
		});
		
		var favourite = $('#controller .favourite');
		var download = $('#controller .download');
		var talk = $('#controller .talk');
		var menu = $('#controller .menu');
		
		favourite.on('touchstart', 'img', function(){
			
		});
		
		download.on('touchstart', 'img', function(){
			
		});
		
		talk.on('touchstart', 'img', function(){
			
		});
		
		menu.on('touchstart', 'img', function(){
			
		});
	};
}