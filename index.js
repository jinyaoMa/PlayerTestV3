/* Language resources */
function R() {}
R.en = {
	library: 'Library',
	music: 'Music',
	friend: 'Friend',
	account: 'Account',
	search: 'Search'
};
R.zh = {
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
		document.body.style.backgroundColor = R.color.black;
		document.body.style.color = R.color.white;
	} else {
		document.body.style.backgroundColor = R.color.white;
		document.body.style.color = R.color.black;
	}
	navigation.refreshColor();
	playerEntry.refreshColor();
	library.refreshColor();
	music.refreshColor();
	friend.refreshColor();
	account.refreshColor();
}

function linking() {
	navigation.link($('.activity:first > .container > div'));
	playerEntry.link();
	library.linkDrawer();
	library.linkSearch();
	music.linkDrawer();
	friend.linkDrawer();
	account.linkDrawer();
}