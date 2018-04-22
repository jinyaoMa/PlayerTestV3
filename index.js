/* Language resources */
function R() {}
R.en = {
	library: 'Library',
	music: 'Music',
	friend: 'Friend',
	account: 'Account'
};
R.zh = {
	library: '库',
	music: '音乐',
	friend: '朋友',
	account: '帐号'
};
R.string = R.en;

/* Colors */
R.color = {
	white: 'white',
	black: 'black'
};

/* Initialize localStorage */
if (localStorage.nightShift === undefined) {
	localStorage.nightShift = false;
}

/* Functions */
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
}

function linking() {
	navigation.link();
}