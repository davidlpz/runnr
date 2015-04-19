$(function(){
	var session = 0,
		last = 0,
		now = 0,
		px,
		actions = {};

	$('body').append('<div id="runnr" data-session="true"><img src="' + chrome.extension.getURL("img/runner.png") + '" />' +
		'<div class="balloon"><span class="msg"></span><span class="triangle"></span></div>' + 
		'<span class="runnr-session">0.000</span><span class="km">km</span></div>');

	$(window).on('scroll', function() {
		last = now;
		now = window.pageYOffset;
		px = now - last;
		if (px < 0) return;
		session += px*0.0000005;
		$('.runnr-session').html((session.toFixed(3)).toLocaleString());

		chrome.runtime.sendMessage({action: 'update', session: session}, function(response) {
			if (!response.data) return;
			$('.msg').html(chrome.i18n.getMessage('achievementUnlocked') + response.data);
			$('.balloon').addClass('show');
			window.setTimeout(function(){
				$('.balloon').removeClass('show');
				$('.msg').html('');
			}, 2000);
		});
	});
});