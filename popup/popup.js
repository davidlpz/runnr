$('.text-total').html(chrome.i18n.getMessage('total'));
$('.text-achievements').html(chrome.i18n.getMessage('achievements'));

chrome.runtime.sendMessage({action: 'updatePopup'}, function(response) {
	var total = response.data.total;
	document.getElementById('km').innerHTML = (total.toFixed(3)).toLocaleString();
	var i = 0,
		blur = '',
		level = response.data.level,
		achievements = response.data.achievements;

	for (i = 0; i < achievements.length; i++) {
		blur = (i >= level) ? 'blurred' : '';
		$('.achievements').append('<li class="' + blur + ' icon icon' + i + '" title="' + achievements[i].name + ': ' + achievements[i].distance + 'km"></li>');
	}
});