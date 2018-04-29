/* Language resources */
function R() {}
R.en = {
	name: 'Yao Music',
	library: 'Library',
	music: 'Music',
	friend: 'Friend',
	account: 'Account',
	search: 'Search'
};
R.zh = {
	name: '耀音乐',
	library: '库',
	music: '音乐',
	friend: '朋友',
	account: '帐号',
	search: '搜索'
};
R.string = R.en;

/* Colors */
R.color = {
	white: 'white',
	black: 'black'
};

/* Paths */
R.path = {
	assets: 'assets'
};

/* Functions */
function setupLocalStorage() {
	if (localStorage.nightShift === undefined) {
		localStorage.nightShift = false;
	}
	if (localStorage.currentPage === undefined) {
		localStorage.currentPage = 0;
	}
}

function refreshColor() {
	if (localStorage.nightShift !== undefined &&
		JSON.parse(localStorage.nightShift)){
		$('.activity').css({
			'background-color': R.color.black,
			'color': R.color.white
		});
	} else {
		$('.activity').css({
			'background-color': R.color.white,
			'color': R.color.black
		});
	}
	navigation.refreshColor();
	playerEntry.refreshColor();
	library.refreshColor();
	music.refreshColor();
	friend.refreshColor();
	account.refreshColor();
	playerClose.refreshColor();
	phonograph.refreshColor();
	controller.refreshColor();
}

function linking() {
	navigation.link($('.activity:first > .container > div'));
	playerEntry.link($('#playerActivity'));
	library.linkDrawer();
	library.linkSearch();
	music.linkDrawer();
	friend.linkDrawer();
	account.linkDrawer();
	playerClose.link($('#playerActivity'));
	phonograph.linkLyric($('#lyric'));
	controller.linkAudio($('#controller'));
}