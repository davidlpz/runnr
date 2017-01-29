// ID of the tumblr tab
var selectedId = -1;

// runnr object
var runnr = {
	total: 0,
	session: 0,
	level: 0,
	achievements: [
		{ name: chrome.i18n.getMessage('achievement1') , distance: 8.848 },
		{ name: chrome.i18n.getMessage('achievement2') , distance: 42.195 },
		{ name: chrome.i18n.getMessage('achievement3') , distance: 2000 },
		{ name: chrome.i18n.getMessage('achievement4') , distance: 2428 },
		{ name: chrome.i18n.getMessage('achievement5') , distance: 9259 },
		{ name: chrome.i18n.getMessage('achievement6') , distance: 21196 },
		{ name: chrome.i18n.getMessage('achievement7') , distance: 40076 },
		{ name: chrome.i18n.getMessage('achievement8') , distance: 300000 },
		{ name: chrome.i18n.getMessage('achievement9') , distance: 384400 },
		{ name: chrome.i18n.getMessage('achievement10') , distance: 19567577226 },
		{ name: chrome.i18n.getMessage('achievement11') , distance: 9460730472580.8 },
		{ name: chrome.i18n.getMessage('achievement12') , distance: 40018889899017 }
	],
	load: function(data) {
		return {
			total: runnr.total,
			session: runnr.session
		}
	},
	update: function(data) {
		runnr.session = data.session;
		if ((runnr.session + runnr.total) >= runnr.achievements[runnr.level].distance) {
			return runnr.achievements[runnr.level++].name;
		}
		return false;
	},
	updatePopup: function() {
		return {
			level: runnr.level,
			total: runnr.total + runnr.session,
			achievements: runnr.achievements
		}
	},
	save: function() {
		runnr.total += runnr.session;
		runnr.session = 0;
		runnr.level = 0;
		chrome.storage.sync.set({ runnr_total : runnr.total }, function() {
			if (chrome.runtime.error) {
				chrome.i18n.getMessage('save_error')
			}
		});
	}
};

chrome.storage.sync.get('runnr_total', function(items) {
	if (chrome.runtime.error) {
		chrome.i18n.getMessage('load_error')
	} else {
		if (items.runnr_total !== undefined) {
			runnr.total = items.runnr_total;
		}
		for (var i = 0; i < runnr.achievements.length; i++) {
			if (runnr.total < runnr.achievements[i].distance) break;
		}
		runnr.level = i;
	}
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	// On load, show icon
	if (message.onTumblr){
		selectedId = sender.tab.id;
		chrome.pageAction.show(sender.tab.id);
	}
	// Do runnr.load() or runnr.update()
	if (runnr.hasOwnProperty(message.action)) {
		var data = runnr[message.action](message);
		sendResponse({ data: data });
	}
	return true;
});

// On update, save current values
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo){
	if (changeInfo.status == 'complete' && tabId == selectedId){
		runnr.save();
	}
});

// On close, save current values
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo){
	if (tabId == selectedId){
		runnr.save();
	}
});